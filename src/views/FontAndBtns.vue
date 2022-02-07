<template>
  <v-container id="container">
    <v-row>
      <!-- top right section -->
      <v-col cols="12" xl="6" lg="6" md="12" sm="12">
        <div class="home__item">
          <p class="mb-0 display-4">This is title</p>
          <p class="mb-0 display-3">This is title</p>
          <p class="mb-0 display-2">This is title</p>
          <p class="mb-0 display-1">This is title</p>
          <span class="headline">This is headline</span>
          <span class="caption">This is CAPTION</span>
        </div>
      </v-col>
      <!-- top left section -->
      <v-col cols="12" xl="6" lg="6" md="12" sm="12">
        <div class="home__item">
          <div
            class="
              home__pink
              mb-2
              pink
              text--white text-center
              font-weight-regular font-italic
            "
          >
            test test test
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- end of top row -->
    <v-row>
      <v-col cols="12" xl="12" lg="12" md="6" sm="6">
        <div class="buttons">
          <v-btn class="pink white--text ml-1"> click me </v-btn>

          <v-btn depressed class="pink white--text ml-1"> click me </v-btn>
            <!-- btn with click -->
          <v-btn class="ml-1 pink text--darken-1" @click="clicked">
            <span>email me</span>
            <v-icon left>{{ icons.mdiPencil }}</v-icon>
          </v-btn>
            <!-- btn with tooltip -->
          <v-tooltip bottom color="warning">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="warning" dark v-bind="attrs" v-on="on" class="ml-1 rounded-xl">
                Hover Me
              </v-btn>
            </template>
            <span>slm</span>
          </v-tooltip>

          <!-- btn diffrent sizes -->
            <v-btn small class="pink white--text ml-1"> click me (small) </v-btn>
            <v-btn large class="pink white--text ml-1"> click me (large) </v-btn>
          <!-- rounded btn -->
            <v-btn fab dark color="purple ml-2">
              <v-icon>{{ icons.mdiHeart }}</v-icon>
            </v-btn>

            <!-- conditional btns -->
            <!-- hide in md and lower -->
            <v-btn class="blue white--text ml-1 hidden-md-and-down">
              hide in md and down
            </v-btn>

            <!-- hide in md and up -->
            <v-btn class="blue white--text ml-1 hidden-md-and-up">
              hide in md and up
            </v-btn>

            <!-- only show in md  -->
            <v-btn class="blue white--text ml-1 hidden-lg-only">
              hidden lg Only
            </v-btn>
            
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPencil, mdiHeart } from "@mdi/js";
export default {
  name: "Fonts",
  data() {
    return {
      icons: {
        mdiPencil,
        mdiHeart
      },
    };
  },
  methods: {
    clicked() {
      console.log("hi");
    },
  },
};
</script>

<style scoped lang="scss">
.home__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  div {
    width: 100%;
  }
}
#container {
  direction: rtl;
}
</style>