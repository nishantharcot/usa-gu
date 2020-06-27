<template>
  <v-card class="mx-auto text-center" max-width="450">
    <v-img class="white--text align-end" height="300px" :src="teacher.image">
    </v-img>

    <v-card-title class="pb-0 mb-4 justify-center">
      {{ teacher.name }}
    </v-card-title>
    <v-card-subtitle class="pb-0">
      {{ teacher.title }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        I am an ambitious workaholic, but apart from that, pretty simple person.
      </div>
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
