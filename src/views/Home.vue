<template>
  <div>
    <v-container v-if="$vuetify.breakpoint.smAndDown" class="pt-0 pb-0">
      <v-row id="screen1" app>
        <v-col id="screen1-content" cols="12" sm="12">
          <h1 id="mainHeading" class="display-1 text-center">
            EDUCATION NEEDS COMPLETE SOLUTION
          </h1>
          <v-btn x-large color="primary" class="mt-5">
            CONTACT US
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else id="screen1" class="pb-0" app>
      <v-col id="screen1-content" cols="12" sm="12">
        <h1
          id="mainHeading"
          class="display-1 text-center animate__animated animate__bounce"
        >
          EDUCATION NEEDS COMPLETE SOLUTION
        </h1>
        <v-btn x-large color="primary" class="mt-5">
          CONTACT US
        </v-btn>
      </v-col>
    </v-row>
    <v-container class="pt-0 mt-0" v-if="$vuetify.breakpoint.smAndDown">
      <v-row class="pt-0 mt-0">
        <v-col
          class="pa-0 colorCard"
          cols="12"
          md="3"
          v-for="item in screen2Data"
          :key="item.title"
        >
          <v-card
            class="mx-auto cardClass mb-0 mt-0 pt-0"
            height="300"
            :color="item.id % 2 === 0 ? 'primary' : 'secondary'"
            dark
            tile
          >
            <div class="text-center">
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </div>
            <h3 class="text-center screen2Heading">
              {{ item.title }}
            </h3>
            <p class="text-center screen2Text px-3">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else>
      <v-col
        class="pa-0 colorCard"
        cols="12"
        md="3"
        v-for="item in screen2Data"
        :key="item.title"
      >
        <v-card
          class="mx-auto d-flex flex-colum cardClass mb-0 text-center"
          height="300"
          :color="item.id % 2 === 0 ? 'primary' : 'secondary'"
          dark
          tile
        >
          <div>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </div>
          <h3 class="screen2Heading">
            {{ item.title }}
          </h3>
          <p class="screen2Text px-3">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-container class="home">
      <v-row class="mt-3">
        <v-col class="about2" cols="12" sm="12" md="7">
          <h2 class="mb-5 display-1">
            What We Offer
          </h2>
          <p class="flexStart">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the
            word.
          </p>
          <v-row align="stretch">
            <v-col
              v-for="item in screen3Data"
              :key="item.title"
              cols="12"
              md="6"
            >
              <v-card height="100%" flat>
                <v-list-item three-line>
                  <v-list-item-avatar size="60" tile>
                    <v-icon color="primary">
                      {{ item.icon }}
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{ item.title }}
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="pt-0 pb-0 mt-0"
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="12"
          sm="12"
          md="5"
        >
          <div>
            <v-img src="../assets/about.jpg"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 1000 : 500"
      src="../assets/about2.jpg"
    >
      <v-overlay opacity="0.7" absolute style="max-width: 100vw">
        <v-container style="max-width: 100vw">
          <v-row align="center" justify="center">
            <v-col class="text-center pa-0" cols="12" md="5">
              <!-- <LazyYoutubeVideo
                src="https://www.youtube.com/embed/xmCWXOO1XNA"
              /> -->
              <v-img src="../assets/bg_2.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="5" class="text-center">
              <h1 class="display-1 font-weight-thin mb-4">USA GU University</h1>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </v-col>
          </v-row>
          <v-row justify="center" class="theme--dark">
            <v-col
              cols="6"
              md="2"
              xs="6"
              v-for="item in collegeStatistics"
              :key="item.title"
            >
              <v-card width="100%" class="justify-center text-center">
                <v-card-title class="d-flex flex-column text-center">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.label }}</p>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="12" md="8">
          <div class="text-center">
            <h1 class="mainHeading mb-5">
              Our Courses
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
      <v-row id="screen2" class="mx-auto mt-10 mb-10">
        <v-col v-for="index2 in courses.length" :key="index2" cols="12" md="3">
          <CourseCard :courseInfo="courses[index2 - 1]" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="12" md="8">
          <div class="text-center">
            <h1 class="mainHeading mb-5">
              Certified Professors
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
      <v-row id="screen2" class="mx-auto mt-10 mb-10">
        <v-col
          v-for="index2 in courseteachers.length"
          :key="index2"
          cols="12"
          md="3"
        >
          <Teacher :teacher="courseteachers[index2 - 1]" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="12" md="8">
          <div class="text-center">
            <h1 class="mainHeading mb-5">
              Recent Blog
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
      <v-row id="screen2" class="mx-auto mt-10">
        <v-col v-for="index2 in blogs.length" :key="index2" cols="12" md="4">
          <BlogPost :blogInfo="blogs[index2 - 1]" />
        </v-col>
      </v-row>
    </v-container>
    <EndScreen />
  </div>
</template>

<style lang="scss" scoped>
#screen1 {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/bg_1.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}
#screen1-content {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(black, 0.5);
  z-index: 2;
}

.screen2Text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
}

.v-overlay__content {
  max-width: 100vw !important;
}

.screen2Heading {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
}

.cardClass {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.mainHeading {
  font-size: 50px;
  font-weight: 900;
}
</style>

<script>
// @ is an alias to /src
import EndScreen from '@/components/EndScreen.vue'
import BlogPost from '@/components/BlogPost.vue'
import CourseCard from '@/components/CourseCard.vue'
import Teacher from '@/components/Teacher.vue'
import 'vue-lazy-youtube-video/dist/style.css'
// import LazyYoutubeVideo from 'vue-lazy-youtube-video'

export default {
  name: 'Home',
  components: {
    EndScreen,
    BlogPost,
    CourseCard,
    Teacher
    // LazyYoutubeVideo
  },
  data() {
    return {
      blogs: [
        {
          image: require('../assets/image_1.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_2.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_3.jpg'),
          title: 'Electrical Engineering'
        }
      ],
      screen2Data: [
        {
          id: 1,
          icon: 'fas fa-user-check',
          title: 'Certified teachers',
          content: ''
        },
        {
          id: 2,
          icon: 'fas fa-book-reader',
          title: 'Special Education',
          content: ''
        },
        {
          id: 3,
          icon: 'fas fa-book-open',
          title: 'Book & Library',
          content: ''
        },
        {
          id: 4,
          icon: 'fas fa-futbol',
          title: 'Sport Clubs',
          content: ''
        }
      ],
      screen3Data: [
        {
          title: 'Safety First',
          icon: 'fas fa-shield-alt',
          text: ''
        },
        {
          title: 'Regular Classes',
          icon: 'fas fa-chalkboard-teacher',
          text: ''
        },
        {
          title: 'Certified teachers',
          icon: 'fas fa-certificate',
          text: ''
        },
        {
          title: 'Sufficient Classrooms',
          icon: 'fas fa-school',
          text: ''
        },
        {
          title: 'Creative Lessons',
          icon: 'fas fa-plus',
          text: ''
        },
        {
          title: 'Sports Facilities',
          icon: 'fas fa-running',
          text: ''
        }
      ],
      courses: [
        {
          image: require('../assets/course-1.jpg'),
          title: 'Computer Engineering'
        },
        {
          image: require('../assets/course-2.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/course-3.jpg'),
          title: 'Civil Engineering'
        },
        {
          image: require('../assets/course-4.jpg'),
          title: 'Mechanical Engineering'
        }
      ],
      courseteachers: [
        {
          image: require('../assets/teacher-1.jpg'),
          title: 'English Professor',
          name: 'Bianca Wilson'
        },
        {
          image: require('../assets/teacher-2.jpg'),
          title: 'Art Professor',
          name: 'Mitch Parker'
        },
        {
          image: require('../assets/teacher-3.jpg'),
          title: 'Science Professor',
          name: 'Stella Smith'
        },
        {
          image: require('../assets/teacher-4.jpg'),
          title: 'Maths Professor',
          name: 'Monshe Henderson'
        }
      ],
      collegeStatistics: [
        {
          title: 18,
          label: 'Professors'
        },
        {
          title: 401,
          label: 'Students'
        },
        {
          title: 30,
          label: 'Courses'
        },
        {
          title: 50,
          label: 'Awards Won'
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
    }
  }
}
</script>
