<template>
  <v-row class="mx-0 screen1 white--text">
    <v-col id="screen1-content" cols="12" sm="12">
      <h1 id="mainHeading" class="display-1 mb-5 text-center">
        {{ pageHeading }}
      </h1>
      <div class="startCaption" v-if="Boolean(caption) === true">
        <v-btn text to="/" color="white">
          Home >
        </v-btn>
        <p class="centerText" color="white">{{ caption }}</p>
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

.centerText {
  text-align: center;
  margin: auto;
}

#mainHeading {
  font-weight: 900 !important;
}

.startCaption {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#screen1-content {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(black, 0.7);
  z-index: 2;
}

#secondHeading {
  font-weight: 600;
}
</style>
