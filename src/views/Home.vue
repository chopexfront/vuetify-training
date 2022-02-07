<template>
  <div>
    <!-- <Navbar>
    <template #content>
      <router-link :to="{ name : 'Dashboard' }">dashboard</router-link>
    </template>
  </Navbar> -->
    SLM

    <router-link :to="{ name: 'Dashboard' }">dashboard</router-link>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
</style>