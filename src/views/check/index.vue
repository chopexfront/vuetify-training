<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right app>
      <div class="drawer">
        <div class="drawer__head">
          <img src="./assets/images/logo.png" alt="" />
        </div>
      </div>

      <v-divider></v-divider>

      <div class="drawer__content">
        <div class="drawer__image">
          <img src="./assets/images/user.jpg" />
        </div>
        <div class="drawer__detail">
          <p class="drawer__name text-center">پیام حیاتی</p>
          <p class="drawer__name text-center">توسعه دهنده وب</p>
          <p class="drawer__edit text-center">ویرایش اطلاعات</p>
        </div>

        <div class="drawer__links">
          <div class="drawer__item" v-for="(item, index) in items" :key="index">
            <v-icon white>{{ item.icon }}</v-icon>
            <div class="drawer__link">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="ml-1"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-smile" },
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-smile" },
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-smile" },
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-smile" },
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-smile" },
    ],
  }),
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: 'iransans';
  src: url('./assets/fonts/iransans.ttf');
}
* {
  direction: rtl;
}

.drawer {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drawer__head {
  display: flex;
  align-items: center;
  height: 30px;
  img {
    width: auto;
    height: 19px;
  }
}
.drawer__image {
  width: 90px;
  height: 90px;
  background-color: #f5f4f3;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  img {
    width: 90%;
    height: 90%;
    position: relative;
    border-radius: 15px;
  }
}
.drawer__content{
  padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.drawer__links{
  background: #016670;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  }
  .drawer__item{
    display: grid;
    grid-template-columns: 25px auto;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 5px;
    position: relative;
  }
  .drawer__link{
    text-align: center;
  }
  .drawer__name{
    margin: 0 0 5px 0;
    color: #111;
    font-family: 'iransans'!important;
    font-size: 14;
    font-weight: normal;
  }
  .drawer__edit{
    margin: 0 0 5px 0;
    color: #2724ff;
    font-family: 'iransans'!important;
    cursor: pointer;
  }
</style>
