<template>
  <div>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="
        `${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`
      "
      item-layout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />

        <template slot="actions">
          <span key="comment-basic-like">
            <a-tooltip title="Like">
              <a-icon
                type="like"
                :theme="action === 'liked' ? 'filled' : 'outlined'"
                @click="like"
              />
            </a-tooltip>
            <span style="padding-left: '8px';cursor: 'auto'">
              {{ likes }}
            </span>
          </span>
          <span key="comment-basic-dislike">
            <a-tooltip title="Dislike">
              <a-icon
                type="dislike"
                :theme="action === 'disliked' ? 'filled' : 'outlined'"
                @click="dislike"
              />
            </a-tooltip>
            <span style="padding-left: '8px';cursor: 'auto'">
              {{ dislikes }}
            </span>
          </span>
          <span key="comment-basic-reply-to">Reply to</span>
        </template>
      </a-list-item>
    </a-list>
    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <!--
   <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
-->

        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
          >
            Add Comment
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      comments: [],
      submitting: false,
      value: "",
      moment,
    };
  },
  created() {
    axios
      .get(
        "http://localhost/tianos-v2-backend/public/index.php/comment_api/comments"
      )
      .then((response) => {
        this.todos = response.data.items;
        console.log("Objeto", this.todos);
        console.log("cuenta", this.todos.length);
        for (var i = 0; i < this.todos.length; i++) {
          console.log(this.todos[i].comment);
          let tcomment = this.todos[i].comment;
          setTimeout(() => {
            this.submitting = false;
            this.comments = [
              {
                author: localStorage.getItem("username"),
                avatar:
                  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                content: tcomment,
                datetime: moment().fromNow(),
              },
              ...this.comments,
            ];
          }, 1000);
        }
      })
      .catch((e) => console.log("error", e));
  },

  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: localStorage.getItem("username"),
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];

        let data = JSON.stringify({
          comment: this.value,
          //password: this.formInline.password,
        });
        axios
          .post(
            "http://localhost/tianos-v2-backend/public/index.php/comment_api/comments",
            data
          )
          .then((response) => {
            console.log(response.data.status);
            this.answer = response.data.id;
            //if (response.data.status == Util.status_success) {
            if (response.data.status == "1") {
              this.show = false;

              localStorage.setItem("username", this.formInline.user);
              //this.$session.set('token', 152t2tw6wy2);
            }
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
  },
};
</script>
