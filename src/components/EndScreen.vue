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
    <!-- <v-row class="">
      <v-col
        class="pa-0 mb-0"
        cols="12"
        md="3"
        v-for="image in images"
        :key="image"
      >
        <v-img height="400" :src="image"></v-img>
      </v-col>
      <vue-picture-swipe :items="items"></vue-picture-swipe>
    </v-row> -->
    <v-row class="mt-15">
      <v-col
        v-for="testimonial in studentTestimonials"
        :key="testimonial.name"
        cols="12"
        md="4"
      >
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="300px"
            :src="testimonial.image"
          >
          </v-img>
          <v-card-text class="text--primary">
            {{ testimonial.description }}
          </v-card-text>
          <v-card-title>
            {{ testimonial.name }}
          </v-card-title>
          <v-card-subtitle class="pb-0">
            {{ testimonial.branch }}
          </v-card-subtitle>
        </v-card>
      </v-col>
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
    ],
    studentTestimonials: [
      {
        name: 'WILSON E. POLAND',
        image: require('../assets/admission-last-screen-2.jpg'),
        branch: 'Computer Science, Bachelor Degree',
        description:
          'American British Graduate University is amazing because it lets me pursue my dream of working in computer science alongside my demanding full-time job.'
      },
      {
        name: 'AMANDA C, UNITED STATES',
        image: require('../assets/admission-last-screen-1.jpg'),
        branch: 'Business Administration, Bachelor Degree',
        description:
          'I am glad to be a part of American British Graduate University because it stands for the standardization of higher education that should be provided globally to all mankind'
      },
      {
        name: 'ELIZAVETA K. UKRAINE',
        image: require('../assets/admission-last-screen-3.jpg'),
        branch: 'Computer Science, Master Degree',
        description:
          'American British Graduate University has rekindled my enthusiasm to achieve my academic dreams with rigorous academic programs and the highest standards of academic excellence.'
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
