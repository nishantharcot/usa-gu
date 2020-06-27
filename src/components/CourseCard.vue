<template>
  <v-card class="mx-auto" max-width="450" max-height="500">
    <v-img class="white--text align-end" height="200px" :src="courseInfo.image">
    </v-img>

    <v-card-title class="pb-0">
      {{ courseInfo.title }}
    </v-card-title>

    <v-card-text class="text--primary d-flex">
      <div>
        Separated they live in. A small river named Duden flows by their place
        and supplies it with the necessary regelialia. It is a paradisematic
        country
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">
        Apply Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  props: {
    courseInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
