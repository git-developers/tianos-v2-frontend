<!--
https://getbootstrap.com/docs/5.1/examples/album/
https://getbootstrap.com/docs/5.1/examples/
-->

<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <img
          src="https://cronuts.digital/wp-content/uploads/2020/04/tik-tok-1200x900.jpg"
          style="width:80px"
        />
        <a-input-search
          placeholder="Buscar cuentas y videos"
          style="width: 200px"
          @search="onSearch"
        />
        <div>
          <a-anchor>
            <a-anchor-link
              href="#components-anchor-demo-basic"
              title="Basic demo"
            />
          </a-anchor>
          <Button type="primary">Iniciar sesión </Button>
          <a-icon type="more" />
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider style="width: 400px">
          <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
            <a-menu-item key="1">
              <a-icon type="home" />
              <span class="nav-text">Part 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="team" />
              <span class="nav-text">Siguiendo</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="video-camera" />
              <span class="nav-text">LIVE</span>
            </a-menu-item>
          </a-menu>

          <hr />

          <a-card style="width: 200px">
            <a-button type="danger" block>
              Iniciar sesión
            </a-button>
            <p style="text-align: left">
              Inicia sesión para seguir a creadores, dar un me gusta a videos y
              ver comentarios.
            </p>
          </a-card>
          <hr />

          <a-popover>
            <template slot="content">
              <p>
                <a-avatar size="large" icon="user" />
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>Content</p>
            </template>
            <a-button type="primary">
              <div>
                <a-avatar size="large" icon="user" />
                <a>name1</a>
              </div>
            </a-button>
          </a-popover>
          <a-popover>
            <template slot="content">
              <p>
                <a-avatar size="large" icon="user" />
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>Content</p>
            </template>
            <a-button type="primary">
              <div>
                <a-avatar size="large" icon="user" />
                <a>name2</a>
              </div>
            </a-button>
          </a-popover>
          <a-popover>
            <template slot="content">
              <p>
                <a-avatar size="large" icon="user" />
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>Content</p>
            </template>
            <a-button type="primary">
              <div>
                <a-avatar size="large" icon="user" />
                <a>name3</a>
              </div>
            </a-button>
          </a-popover>
          <div><a>Ver más</a></div>
        </a-layout-sider>
        <a-layout-content style>
          <div>
            <a-card>
              <p>
                <a-avatar size="large" icon="user" />
                <a>name1</a>
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ratione id optio error magni pariatur ad. Libero quam excepturi
                asperiores? Ipsa voluptate unde voluptatem dolor minus facere
                saepe reiciendis nulla!
              </p>
              <p>
                <img
                  src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
                  style="width:300px"
                />
                <a-icon type="heart" />
                <a-icon type="message" />
                <a-icon type="share-alt" />
              </p>
            </a-card>
          </div>
          <div>
            <a-card>
              <p>
                <a-avatar size="large" icon="user" />
                <a>name2</a>
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ratione id optio error magni pariatur ad. Libero quam excepturi
                asperiores? Ipsa voluptate unde voluptatem dolor minus facere
                saepe reiciendis nulla!
              </p>
              <p>
                <img
                  src="https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-e.jpg"
                  style="width:300px"
                />
                <a-icon type="heart" />
                <a-icon type="message" />
                <a-icon type="share-alt" />
              </p>
            </a-card>
          </div>
          <div>
            <a-card>
              <p>
                <a-avatar size="large" icon="user" />
                <a>name3</a>
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ratione id optio error magni pariatur ad. Libero quam excepturi
                asperiores? Ipsa voluptate unde voluptatem dolor minus facere
                saepe reiciendis nulla!
              </p>
              <p>
                <img
                  src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"
                  style="width:300px"
                />
                <a-icon type="heart" />
                <a-icon type="message" />
                <a-icon type="share-alt" />
              </p>
            </a-card>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-dark {
  background-color: #343434 !important;
}
</style>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
  border: solid 4px red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
  border: solid 4px black;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  border: solid 4px black;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
