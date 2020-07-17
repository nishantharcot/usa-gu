<template>
  <v-card class="mx-auto text-center" max-width="450">
    <v-img
      eager
      class="white--text align-end"
      height="300px"
      :src="teacher.image"
    >
    </v-img>

    <v-card-title class="justify-center">
      {{ teacher.name }}
    </v-card-title>
    <v-card-subtitle class="text--primary">
      {{ teacher.qualification }}
    </v-card-subtitle>
    <v-card-text class="pb-0 text-body-1 justify-center">
      {{ teacher.title }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      required: true
    }
  }
}
</script>
