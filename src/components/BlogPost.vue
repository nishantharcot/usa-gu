<template>
  <v-card class="mx-auto" max-width="450">
    <v-img class="white--text align-end" height="200px" :src="blogInfo.image">
    </v-img>

    <v-card-title class="pb-0">
      Skills To Develop Your Child Memory
    </v-card-title>

    <v-card-text class="text--primary">
      <div>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">
        Read More
        <v-icon class="pl-2">
          fas fa-arrow-right
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    blogInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
