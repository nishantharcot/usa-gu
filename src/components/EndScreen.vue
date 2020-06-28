<template>
  <v-container class="pb-0">
    <v-row class="mt-5">
      <v-col cols="2"></v-col>
      <v-col cols="12" md="8">
        <div class="text-center">
          <h1 class="mainHeading mb-5">
            Student Says About Us
          </h1>
          <p>
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row class="">
      <v-col
        class="pa-0 mb-0"
        cols="12"
        md="3"
        v-for="image in images"
        :key="image"
      >
        <v-img height="400" :src="image"></v-img>
      </v-col>
      <!-- <vue-picture-swipe :items="items"></vue-picture-swipe> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    testimaonials: [
      {
        text:
          'Far far away, behind the word mountains, far from the countries Vokaila and Consonantia, there live the blind texts',
        name: 'Mark Huff',
        relation: 'Mother',
        image: require('../assets/teacher-2.jpg')
      },
      {
        text:
          'Far far away, behind the word mountains, far from the countries Vokaila and Consonantia, there live the blind texts',
        name: 'Will Smith',
        relation: 'Father',
        image: require('../assets/teacher-5.jpg')
      },
      {
        text:
          'Far far away, behind the word mountains, far from the countries Vokaila and Consonantia, there live the blind texts',
        name: 'Henry Dee',
        relation: 'Mother',
        image: require('../assets/teacher-3.jpg')
      },
      {
        text:
          'Far far away, behind the word mountains, far from the countries Vokaila and Consonantia, there live the blind texts',
        name: 'Ken Bosch',
        relation: 'Mother',
        image: require('../assets/teacher-4.jpg')
      },
      {
        text:
          'Far far away, behind the word mountains, far from the countries Vokaila and Consonantia, there live the blind texts',
        name: 'Rodel Golez',
        relation: 'Mother',
        image: require('../assets/teacher-6.jpg')
      }
    ],
    images: [
      require('../assets/image_1.jpg'),
      require('../assets/image_2.jpg'),
      require('../assets/course-1.jpg'),
      require('../assets/image_4.jpg')
    ],
    items: [
      {
        src: '../assets/image_1.jpg',
        w: 600,
        h: 400
      },
      {
        src: '../assets/image_2.jpg',
        w: 600,
        h: 400
      },
      {
        src: '../assets/course-1.jpg',
        w: 600,
        h: 400
      },
      {
        src: '../assets/image_4.jpg',
        w: 600,
        h: 400
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.mainHeading {
  font-size: 50px;
  font-weight: 900;
}

.v-list-item {
  background-color: white !important;
  color: black;
}
</style>
