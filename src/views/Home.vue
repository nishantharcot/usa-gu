<template>
  <div>
    <video-background
      src="/video.mp4"
      style="max-height: 400px; height: 100vh;"
    >
      <v-overlay absolute opacity="0.8">
        <v-row class="pb-0" app>
          <v-col cols="12" sm="12" class="text-center">
            <h1 class="display-1 text-center">
              EDUCATION NEEDS COMPLETE SOLUTION
            </h1>
            <v-btn x-large color="primary" class="mt-5" to="/contact">
              CONTACT US
            </v-btn>
          </v-col>
        </v-row>
      </v-overlay>
    </video-background>
    <v-container class="pt-0 mt-0" v-if="$vuetify.breakpoint.smAndDown">
      <v-row class="pt-0 mt-0">
        <v-col
          class="pa-0"
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
            <h3 class="text-center screen2Heading">{{ item.title }}</h3>
            <p class="text-center screen2Text px-3">
              {{ item.content }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else>
      <v-col
        class="pa-0"
        cols="12"
        md="3"
        v-for="item in screen2Data"
        :key="item.title"
      >
        <!-- :color="item.id % 2 === 0 ? 'primary' : 'secondary'" -->
        <v-card
          v-intersect.once="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }"
          class="mx-auto d-flex flex-colum animate__animated cardClass mb-0 text-center"
          :class="isIntersecting ? 'animate__backInLeft' : ''"
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
          <h3 class="screen2heading">
            {{ item.title }}
          </h3>
          <p class="screen2Text px-3">
            {{ item.content }}
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-container class="home">
      <v-row class="mt-3 align-center justify-center">
        <v-col class="about2 align-center justify-center" cols="12" md="8">
          <h2 class="mb-5 display-1 text-center">
            Our Achievement
          </h2>
          <p class="flexStart text-center">
            USAG University: Experience the benefits of a global education
            community and interact with students in countries around the world.
          </p>
          <v-row class="align-center justify-center">
            <v-col
              v-for="item in screen3Data"
              :key="item.text"
              cols="12"
              md="6"
            >
              <v-card height="100%" flat>
                <v-list-item>
                  <v-list-item-content class="mx-auto text-center">
                    <v-icon size="60" color="primary">
                      {{ item.icon }}
                    </v-icon>
                    <p class="mt-3">
                      {{ item.text }}
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mb-10">
        <v-col v-for="item in foo1Data" :key="item.text" cols="12" md="3">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="dark--text align-end"
              height="200px"
              :src="item.image"
            >
              <v-overlay absolute opacity="0.6" class="align-end">
                <v-card-actions>
                  <v-btn color="primary" text :to="item.link">
                    {{ item.text }}
                    <v-icon>
                      fas fa-angle-double-right
                    </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-overlay>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 1000 : 500"
      src="../assets/image_4-min.jpg"
    >
      <v-overlay opacity="0.7" absolute style="max-width: 100vw">
        <v-container style="max-width: 100vw">
          <v-row align="stretch" justify="center">
            <v-col class="" cols="12" md="5">
              <v-img src="../assets/bg_2.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="5" class="" align="stretch">
              <h1 class="text-h5 mb-4">
                MORE ABOUT OUR UNIVERSITY
              </h1>
              <p class="text-body-1">
                Online and distance learning is the future of education. Even
                though we live in a global village the concept of a global
                university – not rooted in a particular country – such as USAG
                University – is occasionally misunderstood by the dinosaurs of
                brick and mortar education especially in countries where online
                education is still a novelty.
              </p>
              <p class="text-body-1">
                USAG University's formula has proven a great success over the
                years. It is efficient, student-oriented, and can be transmitted
                from any computer terminal anywhere in the world. That is why
                this formula is now being championed by numerous online
                educational institutions around the world.
              </p>
              <v-btn class="primary" to="/about">
                <v-icon>
                  fas fa-angle-double-right
                </v-icon>
                Read More
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-parallax>
    <v-container>
      <!-- Admission last screen -->

      <v-row class="justify-center">
        <v-col cols="12">
          <h1 class="display-1">
            <strong>What</strong>
            People Say
          </h1>
          <p class="mt-5">
            Here are some of the feedback from our students that we have
            received from some of our recent seminars and e-learning courses:
          </p>
        </v-col>
        <v-col
          v-for="testimonial in studentTestimonials.slice(0, 3)"
          :key="testimonial.name"
          cols="12"
          md="3"
        >
          <v-card class="mx-auto" max-width="350">
            <v-img
              class="white--text align-end"
              height="275px"
              :src="testimonial.image"
              position="top"
            >
            </v-img>
            <v-card-text class="text--primary">
              {{ testimonial.description }}
            </v-card-text>
            <v-card-subtitle class="py-0">
              <b>
                {{ testimonial.name }}
              </b>
            </v-card-subtitle>
            <v-card-subtitle class="py-0">
              {{ testimonial.branch }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col
          v-for="testimonial in studentTestimonials.slice(3, 6)"
          :key="testimonial.name"
          cols="12"
          md="3"
        >
          <v-card class="mx-auto" max-width="350">
            <v-img
              class="white--text align-end"
              height="275px"
              :src="testimonial.image"
              position="top"
            >
            </v-img>
            <v-card-text class="text--primary">
              {{ testimonial.description }}
            </v-card-text>
            <v-card-subtitle class="py-0">
              <b>
                {{ testimonial.name }}
              </b>
            </v-card-subtitle>
            <v-card-subtitle class="py-0">
              {{ testimonial.branch }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" md="8">
          <div class="text-center">
            <h1 class="mainHeading">
              LATEST EVENTS
            </h1>
            <p>
              Even though all of the programs provided by USAG University are
              100 % online and the students don't have to visit the campus of
              the university in Hawaii, our campus in Prague, Czech Republic
              often organizes events such as the annual USAG AWARDS. We would
              like to share a few photos from these wonderful events with you.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col
          v-for="photoCard in photoGallery"
          :key="photoCard.name"
          cols="12"
          md="4"
        >
          <v-card max-width="400" class="mx-auto">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="photoCard.image"
            >
            </v-img>
            <v-card-title>
              {{ photoCard.name }}
            </v-card-title>
            <v-card-text class="text--primary">
              Have a look at the most captivating moments from our Graduation
              Ceremony, where we handed out diplomas to our successful
              graduates.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="justify-center">
          <div class="d-flex justify-center">
            <v-btn class="primary" to="/eventgallery">
              <v-icon>
                fas fa-angle-double-right
              </v-icon>
              See All Events
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-parallax dark src="../assets/vbanner-min.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12" md="8">
            <h1 class="display-1 font-weight-thin mb-4">
              STUDYING AT USAG University
            </h1>
            <h4 class="subheading">
              USAG University’s formula has proven a great success over the
              years. It is efficient, student-oriented, and can be transmitted
              from any computer terminal anywhere in the world. That is why this
              formula is now being championed by numerous online educational
              institutions around the world.
            </h4>
            <v-btn color="primary" class="mt-3" to="/about">
              Read More
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
      <v-row class="mt-10">
        <v-col cols="12" md="5">
          <h1 class="text-h4">
            <strong>
              WHY CHOOSE
            </strong>
          </h1>
          <h1 class="text-h5 mt-15">
            <strong>
              RESEARCH AND TEACHING
            </strong>
          </h1>
          <p class="mt-5">
            The University‘s academic staff are highly qualified and
            experienced. They are accustomed to working with executives,
            managers and consultants employed in both the private and public
            sectors.
          </p>
          <h1 class="text-h5 mt-15">
            <strong>
              CAREERS & OFFERS
            </strong>
          </h1>
          <p class="mt-5">
            This exciting alternative in higher education holds for you the
            promise of professional and personal growth without any limits or
            boundaries.
          </p>
        </v-col>
        <v-col cols="12" md="7">
          <h1 class="text-h4">
            <strong>
              FEATURES
            </strong>
          </h1>
          <v-expansion-panels class="mt-15" popout>
            <v-expansion-panel v-for="(item, i) in lastScreenData" :key="i">
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.text }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <v-row class="justify-center" justify="center" align="center">
        <v-col cols="12">
          <h1 class="text-h4 text-center mb-10">
            <strong>
              OUR ACCREDITATION AND PARTNERS
            </strong>
          </h1>
        </v-col>
        <v-col
          cols="6"
          lg="2"
          md="3"
          v-for="(item, i) in accreditionData"
          :key="i"
        >
          <v-img class="mx-auto" :src="item" width="200" height="100" contain>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
v-list-item {
  display: flex !important;
  justify-content: center !important;
  align-content: center !important;
  align-self: center !important;
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
// import Teacher from '@/components/Teacher.vue'
import 'vue-lazy-youtube-video/dist/style.css'
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'Home',
  components: {
    // Teacher,
    VideoBackground
  },
  data() {
    return {
      screen2Data: [
        {
          id: 1,
          icon: 'fas fa-user-check',
          title: 'Certified teachers',
          content:
            'Highly qualified, experienced and accustomed to industry professionals'
        },
        {
          id: 2,
          icon: 'fas fa-book-reader',
          title: 'Special Education',
          content:
            "Addresses each students' individual differences and special needs"
        },
        {
          id: 3,
          icon: 'fas fa-book-open',
          title: 'E-Library',
          content:
            'E-Library integrates contents from Institutional Digital Repositories'
        },
        {
          id: 4,
          icon: 'fas fa-futbol',
          title: 'Online Memberships',
          content:
            'Experience the benefits of a global education community around the world.'
        }
      ],
      screen3Data: [
        {
          title: '',
          icon: 'fas fa-book-reader',
          text: '890+ STUDENTS'
        },
        {
          title: '',
          icon: 'fas fa-graduation-cap',
          text: '670+ GRADUATE'
        },
        {
          title: '',
          icon: 'fas fa-trophy',
          text: '160+ AWARD WINNING'
        },
        {
          title: '',
          icon: 'fas fa-chalkboard-teacher',
          text: '200+ FACULTIES'
        }
      ],
      foo1Data: [
        {
          image: require('../assets/home-screen-1.jpg'),
          text: '200+ Prestigious Faculty',
          link: '/about'
        },
        {
          image: require('../assets/home-screen-2.jpg'),
          text: '800+ Scholars',
          link: '/admissions'
        },
        {
          image: require('../assets/home-screen-3.jpg'),
          text: '40+ Elite Programs',
          link: '/programs'
        },
        {
          image: require('../assets/home-screen-4.jpg'),
          text: '270+ Championships',
          link: '/gallery'
        }
      ],
      studentTestimonials: [
        {
          name: 'CLAYTON E. CARTINELLI, UK',
          image: require('../assets/people-new2.jpg'),
          branch: 'Computer Science, PG Degree',
          description:
            'USAG University is amazing because it lets me pursue my dream of working in computer science alongside my demanding full-time job.'
        },
        {
          name: 'BIANCA C, UNITED STATES',
          image: require('../assets/people-new3.jpg'),
          branch: 'Business Administration, PG Degree',
          description:
            'I am glad to be a part of USAG University because it stands for the standardization of higher education that should be provided globally to all'
        },
        {
          name: 'CHRISTINE VONE, BRAZIL',
          image: require('../assets/people-new4.jpg'),
          branch: 'Computer Science, Master Degree',
          description:
            'USAG University has rekindled my enthusiasm to achieve my dreams with rigorous Programs and highest standards of academic excellence.'
        },
        {
          name: 'OLIVIA TYSON, AUSTRALIA',
          image: require('../assets/people-new5.jpg'),
          branch: 'Tourism Management, PG Degree',
          description:
            'USAG University gives a great opportunity for students to broaden their knowledge beyond their field of studies within an international multicultural environment.'
        },
        {
          name: 'ALYSSA HEALY, NEWZEALAND',
          image: require('../assets/people-new6.jpg'),
          branch: 'Computer Science, Master Degree',
          description:
            'The exceptional programmes and teaching methodologies backed by practical skills and industry interface have given me the confidence to pursue my career ahead.'
        },
        {
          name: 'COURTNEY COOK, RUSSIA',
          image: require('../assets/people-new7.jpg'),
          branch: 'Hospitality Management, PG Degree',
          description:
            'The academic experience with a world class infrastructure and excellent faculty at USAG University has endured me with a lifelong career excellence.'
        }
      ],
      courseteachers: [
        {
          image: require('../assets/teacher-1.jpg'),
          title: 'Chancellor',
          qualification: 'MA. MBA. PhD. DBA.DCD',
          name: 'Bianca Wilson'
        },
        {
          image: require('../assets/teacher-2.jpg'),
          title: 'Vice Chancellor',
          qualification: 'MBA. PhD.',
          name: 'Mitch Parker'
        },
        {
          image: require('../assets/teacher-3.jpg'),
          title: 'USAG University-Head',
          qualification: 'MA. PhD',
          name: 'Stella Smith'
        },
        {
          image: require('../assets/teacher-4.jpg'),
          title: 'Assosciate Manager',
          qualification: 'BA. BSc. PGD. MBA',
          name: 'Monshe Henderson'
        },
        {
          image: require('../assets/teacher-5.jpg'),
          title: 'Chief Technology Officer',
          qualification: 'BA. PGD. MA',
          name: 'Will Sentence'
        },
        {
          image: require('../assets/teacher-6.jpg'),
          title: 'Social Media Officer',
          qualification: 'BSc. BA. PGD',
          name: 'Olivia Baker'
        },
        {
          image: require('../assets/teacher-7.jpg'),
          title: 'General Administrator',
          qualification: 'BA. PGD',
          name: 'Ellyse Perry'
        },
        {
          image: require('../assets/teacher-8.jpg'),
          title: 'Admin Officer',
          qualification: 'BA. PGD',
          name: 'Veronica Donowan'
        }
      ],
      photoGallery: [
        {
          image: require('../assets/new-gallery-1.jpg'),
          name: 'Graduation Ceremony 2020',
          description: ''
        },
        {
          image: require('../assets/hawaii.jpg'),
          name: 'Hawaii: Oahu',
          description: ''
        },
        {
          image: require('../assets/new-gallery-3.jpg'),
          name: 'USAG Awards 2020',
          description: ''
        }
      ],
      lastScreenData: [
        {
          title: 'Student learning oppurtunites',
          text:
            'Online and distance learning is the future of education. Even though we live in a global village the concept of a global university – not rooted in a particular country – such as USAG University – is occasionally misunderstood by the dinosaurs of brick and mortar education especially in countries where online education is still a novelty.'
        },
        {
          title: 'Student stories',
          text:
            'I believe you will find the story of USAG University inspiring and become a part of it - because thanks to YOU we have the chance to grow and continue to make a difference!'
        },
        {
          title: 'New Course',
          text:
            'With our unique, world-leading style of distance learning, USAG University enables you to study from home, work or even on the move, at a time that suits you. With a wide choice of qualifications, at undergraduate and postgraduate level, USAG University offers the choice and flexibility you need.'
        }
      ],
      accreditionData: [
        require('../assets/logo1.png'),
        require('../assets/logo2.jpg'),
        require('../assets/logo3.jpg'),
        require('../assets/logo4.jpg'),
        require('../assets/logo5.png'),
        require('../assets/logo6.jpg'),
        require('../assets/logo7.jpeg'),
        require('../assets/logo8.jpeg'),
        require('../assets/logo9.png'),
        require('../assets/logo10.jpg'),
        require('../assets/logo11.png'),
        require('../assets/logo12.jpg'),
        require('../assets/logo13.png'),
        require('../assets/logo14.png'),
        require('../assets/logo15.jpg'),
        require('../assets/logo16.jpeg'),
        require('../assets/logo17.jpeg'),
        require('../assets/logo18.jpg')
      ],
      isIntersecting: false
    }
  },
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].intersectionRatio >= 0.1
    }
  }
}
</script>
