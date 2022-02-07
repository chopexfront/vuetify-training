<template>
  <v-app>
    <!-- <v-main> -->
      <Navbar>
        <template #content>
          <!-- <router-link :to="{ name: 'Dashboard' }">dashboard</router-link> -->
          <router-view></router-view>
        </template>
      </Navbar>
    <!-- </v-main> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "iransans";
  src: url("./assets/fonts/iransans.ttf");
}
* {
  text-decoration: none;
}
</style>