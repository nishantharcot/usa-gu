<template>
  <v-row class="mx-0 screen1 white--text">
    <v-col
      class="d-flex flex-column justify-center align-center"
      id="screen1-content"
      cols="12"
      sm="12"
    >
      <h1 class="display-1 font-weight-bold mb-5 text-center">
        {{ pageHeading }}
      </h1>
      <div
        class="d-flex flex-row align-center"
        v-if="Boolean(caption) === true"
      >
        <v-btn text to="/" color="white">
          Home >
        </v-btn>
        <p class="text-center my-auto" color="white">{{ caption }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    pageHeading: {
      type: String,
      required: true
    },
    caption: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-size: cover;
  background-position: center;
}

#screen1-content {
  min-height: 50vh;
  background-color: rgba(black, 0.7);
  z-index: 2;
}
</style>
