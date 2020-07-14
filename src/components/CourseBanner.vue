<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.smAndDown">
      <v-row
        class="justify-center course-banner secondary mt-10"
        align="center"
      >
        <v-col cols="12">
          <h1 class="text-h4 white--text text-center">
            {{ courseName }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-row
      v-else
      class="justify-center course-banner secondary mt-10"
      align="center"
    >
      <v-col cols="12">
        <h1 class="text-h4 white--text text-center">
          {{ courseName }}
        </h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    courseName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.course-banner {
  min-height: 25vh;
}
</style>
