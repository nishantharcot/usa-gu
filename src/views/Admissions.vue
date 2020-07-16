<template>
  <div>
    <StartScreen pageHeading="ADMISSION AND FEES" caption="ADMISSIONS" />
    <v-container class="pt-0 mt-0" v-if="$vuetify.breakpoint.smAndDown">
      <v-row>
        <v-col
          class="pa-0"
          cols="12"
          md="3"
          v-for="item in screen2Data"
          :key="item.title"
        >
          <v-card
            class="d-flex flex-colum cardClass mb-0 text-center"
            :color="item.id % 2 === 0 ? 'primary' : 'secondary'"
            dark
            tile
          >
            <v-card-title class="justify-center pb-0 font-weight-bold">
              {{ item.heading }}
            </v-card-title>
            <v-card-title
              class="justify-center pt-0 text-subtitle-1 font-weight-bold"
            >
              {{ item.heading2 }}
            </v-card-title>
            <h2 class="display-1">
              {{ item.cost }}
            </h2>
            <p class="screen2Text px-3">
              {{ item.description }}
            </p>
            <v-card-actions class="justify-center">
              <v-btn
                x-large
                :color="item.id % 2 === 0 ? 'secondary' : 'primary'"
                to="/application"
              >
                Apply Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <p class="mt-5 pl-3">
          Application Fees – $100.00 USD. No application will be considered
          unless accompanied by the application fee.
        </p>
      </v-row>
    </v-container>
    <!-- Use v-row for full width -->
    <v-container class="mt-10" v-else>
      <v-row>
        <v-col
          class="pa-0"
          cols="12"
          md="3"
          v-for="item in screen2Data"
          :key="item.title"
        >
          <v-card
            class="d-flex flex-colum cardClass mb-0 text-center"
            :color="item.id % 2 === 0 ? 'primary' : 'secondary'"
            dark
            tile
            height="100%"
          >
            <v-card-title class="justify-center pb-0 font-weight-bold">
              {{ item.heading }}
            </v-card-title>
            <v-card-title
              class="justify-center pt-0 text-subtitle-1 font-weight-bold"
            >
              {{ item.heading2 }}
            </v-card-title>
            <h2 class="display-1">
              {{ item.cost }}
            </h2>
            <p class="screen2Text px-3">
              {{ item.description }}
            </p>
            <v-card-actions class="justify-center">
              <v-btn
                x-large
                :color="item.id % 2 === 0 ? 'secondary' : 'primary'"
                to="/application"
              >
                Apply Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <p class="mt-5">
          Application Fees – $100.00 USD. No application will be considered
          unless accompanied by the application fee.
        </p>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col class="order-2" cols="12" md="8">
          <h1 class="display-1">
            Installment schemes and Scholarships (Terms & Conditions apply)
            Proceed are available as follows:
          </h1>
          <p class="mt-5">
            <strong>
              Programmme fee deposit & supervisor’s professional fees
            </strong>
            - Payable on acceptance of offer of a place & on appointment of
            supervisor
          </p>
          <p class="mt-10">
            <strong>
              First Installment
            </strong>
            - Payable three months after registration
          </p>
          <p class="mt-10">
            <strong>
              Second Installment
            </strong>
            - Payable six months after registration
          </p>
          <p class="mt-10">
            <strong>
              Third Installment
            </strong>
            - Payable nine months after registration
          </p>
        </v-col>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="4"
        >
          <v-img
            src="../assets/admission-new-1.jpeg"
            height="400"
            contain
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="4"
        >
          <v-img src="../assets/admission-new-2.jpg"></v-img>
        </v-col>
        <v-col class="order-2" cols="12" md="8">
          <h1 class="display-1">
            <strong>
              Graduation
            </strong>
            Fee
          </h1>
          <p class="mt-5">
            $150.00 (payable on the issuance & notarization of degree &
            transcripts)
          </p>
          <h1 class="display-1">
            <strong>
              USAG University
            </strong>
            Studentship Award
          </h1>
          <p class="mt-5">
            The USAG University offers a $1000 scholarship, off the total
            program fee to financially deserving, and academically qualified
            students from a number of national and international students:
          </p>
          <p class="mt-5">
            Applications for USAG University bursaries should be made upon
            receipt of an offer from the university. No award of a bursary will
            be considered until then.
          </p>
          <p class="mt-5">
            Students who pay the reduced fees are liable for their supervisor’s
            professional fees if said supervisor is chosen by the student and is
            not a member of the University’s Adjunct Faculty.
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col class="order-2" cols="12" md="8">
          <h1 class="display-1">
            <strong>
              Advanced Payment
            </strong>
            Discount
          </h1>
          <p class="mt-5">
            USAG University offers a 20% discount off the total
            tuition/programme fees for students who choose to pay in full at the
            time of registration.
          </p>
          <h1 class="display-1">
            <strong>
              Second Degree
            </strong>
            Fees
          </h1>
          <p class="mt-5">
            Graduates of USAG University who register for a second degree at the
            University will benefit from the University’s 25% discount if
            programme fees are paid in full at the time of registration.
          </p>
        </v-col>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="4"
        >
          <v-img src="../assets/advanced-payment.jpg"></v-img>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="4"
        >
          <v-img src="../assets/withdrawal.jpg"></v-img>
        </v-col>
        <v-col class="order-2" cols="12" md="8">
          <h1 class="display-1">
            <strong>
              Withdrawal and Tuition Fee
            </strong>
            Refund Policy
          </h1>
          <p class="mt-5">
            A student who withdraws for legitimate reasons will be eligible for
            a refund of tuition fees already paid in accordance with the
            following schedule:
          </p>
          <p class="mt-5">
            During the first week of enrollment 40%
          </p>
          <p class="mt-5">
            During the second, third and fourth week of enrollment 25%
          </p>
          <p class="mt-5">
            After the fourth week of enrollment 0%
          </p>
          <p class="mt-5">
            Application fee non-refundable
          </p>
        </v-col>
      </v-row>
      <v-row class="secondary justify-center mt-10">
        <v-col cols="2"></v-col>
        <v-col cols="8" class="d-flex flex-column justify-center align-center">
          <h1 class="display-2 white--text text-center">
            Our
            <strong>
              Achievements
            </strong>
          </h1>
          <p class="white--text text-center mt-5">
            USAG University: Experience the benefits of a global education
            community and interact with students in countries around the world.
          </p>
          <hr />
        </v-col>
        <v-col cols="2"></v-col>
        <v-col v-for="item in achievements" :key="item.title" cols="12" md="3">
          <div class="d-flex flex-row justify-center">
            <v-icon color="white" class="mt-3" size="50">
              {{ item.icon }}
            </v-icon>
            <div class="d-flex flex-column pl-3 mt-1">
              <h2 class="white--text">
                {{ item.value }}
              </h2>
              <p class="white--text">
                {{ item.title }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
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
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
export default {
  components: {
    StartScreen
  },
  data() {
    return {
      screen2Data: [
        {
          id: 1,
          heading: 'Diploma',
          heading2: 'and all Diploma Programs',
          icon: 'fas fa-user-check',
          cost: '$4000*',
          description:
            '$4000.00* for the full diploma programme regardless of duration (programme fees $3000.00 USD plus $1000.00 USD supervisor’s professional fees)',
          title: 'Certified teachers',
          content: ''
        },
        {
          id: 2,
          heading: 'PG',
          heading2: 'and all PG Diploma Programs',
          cost: '$6000*',
          description:
            '$6000.00* for the full diploma programme regardless of duration (programme fees $4500.00 USD plus $1500.00 USD supervisor’s professional fees)',
          icon: 'fas fa-book-reader',
          title: 'Special Education',
          content: ''
        },
        {
          id: 3,
          heading: 'MBA, MSC, MA',
          heading2: 'and all Masters Programs',
          cost: '$8000*',
          description:
            '$8000.00* for the full degree programme regardless of duration (programme fees $5500.00 USD plus $2500.00 USD supervisor’s professional fees)',
          icon: 'fas fa-book-open',
          title: 'E-Library',
          content: ''
        },
        {
          id: 4,
          heading: 'PHD, DBA',
          heading2: 'and all Doctorate Programs',
          cost: '$10000*',
          description:
            '$10000.00* for the full diploma programme regardless of duration (programme fees $6500.00 USD plus $3500.00 USD supervisor’s professional fees)',
          icon: 'fas fa-futbol',
          title: 'Online Memberships',
          content: ''
        }
      ],
      achievements: [
        {
          icon: 'fas fa-trophy',
          value: '160',
          title: 'OUR AWARDS'
        },
        {
          icon: 'fas fa-user-graduate',
          value: '200',
          title: 'GRADUATES'
        },
        {
          icon: 'fas fa-chalkboard-teacher',
          value: '160',
          title: 'PROFESSORS'
        },
        {
          icon: 'fas fa-user-graduate',
          value: '200',
          title: 'OUR FACULTY'
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cardClass {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

hr {
  width: 10%;
  margin: 0 auto;
  border-top: 3px solid white;
}

.v-card__text,
.v-card__title {
  word-break: normal;
}

.screen1 {
  background-image: url('../assets/admission-banner.jpg');
  background-position: top;
}
</style>
