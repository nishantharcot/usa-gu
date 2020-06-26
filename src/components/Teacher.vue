<template>
  <v-card class="mx-auto" max-width="450">
    <v-img class="white--text align-end" height="300px" :src="teacher.image">
      <!-- <v-card-title>
        {{ teacher.title }}
      </v-card-title> -->
    </v-img>

    <v-card-title class="pb-0 centerClass mb-4">
      {{ teacher.name }}
    </v-card-title>
    <v-card-subtitle class="pb-0 centerClass">
      {{ teacher.title }}
    </v-card-subtitle>

    <v-card-text class="text--primary centerClass">
      <div>
        I am an ambitious workaholic, but apart from that, pretty simple person.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  props: {
    teacher: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cardText {
  text-align: start;
}

.centerClass {
  text-align: center !important;
  display: flex;
  justify-content: center;
}
</style>
