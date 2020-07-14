<template>
  <div class="about">
    <StartScreen pageHeading="ABOUT US" caption="ABOUT" />
    <v-container>
      <v-row class="justify-center text-center">
        <v-col class="mt-15" cols="12" md="8">
          <p class="text-h6">
            USAG University’s formula has proven a great success over the years.
            It is efficient, student-oriented, and can be transmitted from any
            computer terminal anywhere in the world. That is why this formula is
            now being championed by numerous online educational institutions
            around the world.
          </p>
        </v-col>
      </v-row>
      <v-row class="justify-center text-center">
        <v-col
          class="mt-10"
          v-for="item in screen1Data"
          :key="item.text"
          cols="12"
          md="4"
        >
          <v-card height="100%" flat>
            <v-list-item>
              <v-list-item-content class="mx-auto text-center">
                <v-icon size="60" color="primary">
                  {{ item.icon }}
                </v-icon>
                <p class="text-h5 mt-3">
                  {{ item.number }}
                </p>
                <p class="text-h5 mt-3">
                  {{ item.title }}
                </p>
                <p class="mt-3">
                  {{ item.description }}
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- For full width, must change later -->
    <v-container v-if="$vuetify.breakpoint.smAndDown">
      <v-row class="justify-center text-center secondary white--text">
        <v-col cols="10">
          <h4 class="text-h4 mb-4">
            USAG University- Online and distance Learning
          </h4>
          <p class="text-body-1">
            Online and distance learning is the future of education. Even though
            we live in a global village the concept of a global university – not
            rooted in a particular country – such as USAG University – is
            occasionally misunderstood by the dinosaurs of brick and mortar
            education especially in countries where online education is still a
            novelty.
          </p>
          <p class="text-body-1">
            USAG University’s formula has proven a great success over the years.
            It is efficient, student-oriented, and can be transmitted from any
            computer terminal anywhere in the world. That is why this formula is
            now being championed by numerous online educational institutions
            around the world.
          </p>
          <v-btn color="primary" x-large to="/apply">
            Apply Now
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else class="justify-center text-center secondary white--text">
      <v-col cols="10">
        <h4 class="text-h4 mb-4">
          USAG University- Online and distance Learning
        </h4>
        <p class="text-body-1">
          Online and distance learning is the future of education. Even though
          we live in a global village the concept of a global university – not
          rooted in a particular country – such as USAG University – is
          occasionally misunderstood by the dinosaurs of brick and mortar
          education especially in countries where online education is still a
          novelty.
        </p>
        <p class="text-body-1">
          USAG University’s formula has proven a great success over the years.
          It is efficient, student-oriented, and can be transmitted from any
          computer terminal anywhere in the world. That is why this formula is
          now being championed by numerous online educational institutions
          around the world.
        </p>
        <v-btn color="primary" x-large to="/apply">
          Apply Now
        </v-btn>
      </v-col>
    </v-row>
    <!-- For full width, must change later -->
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" md="4">
          <v-img src="../assets/about-screen3.jpg" height="500" contain></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h4 class="text-h4">
            <strong>
              Why Distance Learning?
            </strong>
          </h4>
          <p class="mt-10">
            Very few people can afford to give up work to start studying, and
            with university fees at an all-time high, learning via traditional
            methods is beyond reach for many.
          </p>
          <p class="mt-5">
            This exciting alternative in higher education holds for you the
            promise of professional and personal growth without any limits or
            boundaries.
          </p>
          <h4 class="text-h4">
            <strong>
              USAG University
            </strong>
          </h4>
          <p class="mt-10">
            USAG University, the international distance learning centre, which
            was subsequently incorporated as an independent Online and Distance
            Learning University in Delaware, America.
          </p>
          <p class="mt-5">
            USAG University is a private international institution. USAG
            University Online is specialized in Distance Learning education our
            international learning arm is London College of Media
            (www.usagumedia.com).
          </p>
          <p class="mt-5">
            Distance learning is rapidly becoming the preferred alternative, and
            USAG University has quickly become established as one of the
            pioneers in the field.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="$vuetify.breakpoint.smAndDown">
      <v-row class="mt-10 secondary white--text">
        <v-col cols="12" md="8" class="order-2">
          <h4 class="text-h4">
            <strong>
              Faculty
            </strong>
          </h4>
          <p class="mt-10">
            The University‘s academic staff are highly qualified and
            experienced. They are accustomed to working with executives,
            managers and consultants employed in both the private and public
            sectors.
          </p>
          <p class="mt-5">
            This exciting alternative in higher education holds for you the
            promise of professional and personal growth without any limits or
            boundaries.
          </p>
          <h4 class="text-h4">
            <strong>
              Affiliates
            </strong>
          </h4>
          <p class="mt-10">
            Affiliates are at the centre of our educational formula. Most of the
            degree programs offered are taught by our affiliates. To give but
            one example, as soon as an enquiry is received at the university it
            is passed on to the relevant affiliate in the applicant’s country.
            Affiliates’ study programs are based on the university’s recommended
            curricula. Affiliates operate under the auspices of their region’s
            head office.
          </p>
          <p class="mt-5">
            USAG University is a private international institution. USAG
            University Online is specialized in Distance Learning education our
            international learning arm is London College of Media
            (www.londoncollegeofmedia.com).
          </p>
          <p class="mt-5">
            USAG University Online is licensed by E-Learning International LLC
            (California).
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img src="../assets/oldman-replace.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else class="mt-10 secondary white--text justify-center">
      <v-col cols="12" md="7" class="mt-10">
        <h4 class="text-h4">
          <strong>
            Faculty
          </strong>
        </h4>
        <p class="mt-10">
          The University‘s academic staff are highly qualified and experienced.
          They are accustomed to working with executives, managers and
          consultants employed in both the private and public sectors.
        </p>
        <p class="mt-5">
          This exciting alternative in higher education holds for you the
          promise of professional and personal growth without any limits or
          boundaries.
        </p>
        <h4 class="text-h4">
          <strong>
            Affiliates
          </strong>
        </h4>
        <p class="mt-10">
          Affiliates are at the centre of our educational formula. Most of the
          degree programs offered are taught by our affiliates. To give but one
          example, as soon as an enquiry is received at the university it is
          passed on to the relevant affiliate in the applicant’s country.
          Affiliates’ study programs are based on the university’s recommended
          curricula. Affiliates operate under the auspices of their region’s
          head office.
        </p>
        <p class="mt-5">
          USAG University is a private international institution. USAG
          University Online is specialized in Distance Learning education our
          international learning arm is London College of Media
          (www.londoncollegeofmedia.com).
        </p>
        <p class="mt-5">
          USAG University Online is licensed by E-Learning International LLC
          (California).
        </p>
      </v-col>
      <v-col cols="12" md="4" class="mt-10">
        <v-img src="../assets/oldman-replace.jpg" height="500" contain></v-img>
      </v-col>
    </v-row>

    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" md="4">
          <v-img src="../assets/about-screen5.jpg" height="750"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h4 class="text-h4">
            <strong>
              Modules
            </strong>
          </h4>
          <p class="mt-10">
            All of our distance learning courses have been designed to the most
            exacting standards, in accordance with the most stringent criteria,
            in order to provide outstanding education at an affordable price
            while ensuring that individual needs are met and that your distance
            learning experience is both enjoyable and beneficial. Our modules
            are your own personal tutor at home.
          </p>
          <p class="mt-5">
            USAG University’s unique, style of distance learning is called
            directed coursework study . This means that you study on your own,
            either at home or wherever suits you with regular ongoing support
            from your designated supervisor.
          </p>
          <p class="mt-5">
            You will be taught through printed modules – study materials,
            specially written textbooks or workbooks, audio CDs and video DVDs.
          </p>
          <p class="mt-5">
            When your program starts, you’ll receive your modules by post.
            /courier .Effective 1st of January 2020, the USAG University modules
            have been available to students in e-format and may be sent to you
            as PDF attachments to your emails.
          </p>
          <p class="mt-5">
            You will purchase the modules at $50.00 per module and they are
            yours to keep and to refer to whenever you wish.
          </p>
          <p class="mt-5">
            All modules will direct you to the relevant websites where
            additional resources will be available. Sometime there will be books
            you have to buy yourself or borrow from a local library. If required
            we are happy to do this on your behalf. You’ll get a study timetable
            that will help you plan your reading, and assignments due dates.
          </p>
          <p class="mt-5">
            With our unique, world-leading style of distance learning, USAG
            University enables you to study from home, work or even on the move,
            at a time that suits you. With a wide choice of qualifications, at
            undergraduate and postgraduate level, USAG University offers the
            choice and flexibility you need.
          </p>
          <p class="mt-5">
            “The level of support is fantastic and the modules are brilliant.
            It’s such a wonderful learning experience”
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="$vuetify.breakpoint.smAndDown">
      <v-row class="mt-10 secondary white--text">
        <v-col cols="12" md="8" class="order-2">
          <h4 class="text-h4">
            <strong>
              Will You Need A Computer?
            </strong>
          </h4>
          <p class="mt-10">
            You’ll need a computer for regular and reliable access to the
            internet so that you can have easy communication with your personal
            supervisor. Having an email is essential as it is your means of
            communicating with your supervisor and so that we can send you
            important information relevant to your studies.
          </p>
          <h4 class="text-h4">
            <strong>
              Assignments & Examinations
            </strong>
          </h4>
          <p class="mt-10">
            An assignment is a piece of written work or answers to a set of
            questions, covering material from your module. Completing
            assignments helps you to consolidate and use what you have learned.
            All assignments are sent directly to your tutor for appraisal and
            grading.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img src="../assets/about-screen6.jpg" height="500"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else class="mt-10 secondary white--text justify-center">
      <v-col cols="12" md="7" class="mt-10">
        <h4 class="text-h4">
          <strong>
            Will You Need A Computer?
          </strong>
        </h4>
        <p class="mt-10">
          You’ll need a computer for regular and reliable access to the internet
          so that you can have easy communication with your personal supervisor.
          Having an email is essential as it is your means of communicating with
          your supervisor and so that we can send you important information
          relevant to your studies.
        </p>
        <h4 class="text-h4">
          <strong>
            Assignments & Examinations
          </strong>
        </h4>
        <p class="mt-10">
          An assignment is a piece of written work or answers to a set of
          questions, covering material from your module. Completing assignments
          helps you to consolidate and use what you have learned. All
          assignments are sent directly to your tutor for appraisal and grading.
        </p>
      </v-col>
      <v-col cols="12" md="4" class="mt-10">
        <v-img src="../assets/about-screen6.jpg" height="400"></v-img>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" md="4">
          <v-img src="../assets/president-new.jpg"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h4 class="text-h4">
            <strong>
              President's Message
            </strong>
          </h4>
          <p class="mt-10">
            USAG University is a high quality progressive modern e learning
            university. Our aim is to create a friendly environment for people
            who decide to work hard on their professional and personal
            development. Nothing makes us happier and more satisfied than our
            students, lecturers, and employees being proud to be a part of USAG
            University.
          </p>
          <p class="mt-5">
            I am very honored to be the President of USAG University. The
            University as it is today is the result of the dedication that
            called for lots of energy, diligence, and enthusiasm of students and
            graduates; excellent support, care, and effort of staff and
            employees; passion and active involvement of many of our lecturers,
            partners, and other coworkers.
          </p>
          <p class="mt-5">
            Currently students from all over the world study in our interactive
            online diploma and degree programs provided in the English and Tamil
            languages. In the upcoming years, our plan is to expand and launch
            new specializations and languages of instruction to make it possible
            to study in a university of high quality at a reasonable price for
            anyone who wants to learn, develop and work on their future.
          </p>
          <p class="mt-5">
            We know that to achieve our goals, visions, and plans, we need to
            work hard, and we need to continually look for new methods and
            solutions, we need to follow current trends in education and
            information technology and not be afraid to take risks. That is why
            we support creative minds, ideas and commitment to others, and
            invest our profits to the development of new systems and study
            materials.
          </p>
          <p class="mt-5">
            Take the opportunity to explore what USAG University has to offer
            and what makes it unique. Do not hesitate to contact us with any
            questions - we will be happy to answer all your inquiries!
          </p>
          <p class="mt-5">
            I believe you will find the story of USAG University inspiring and
            become a part of it - because thanks to YOU we have the chance to
            grow and continue to make a difference!
          </p>
          <div class="d-flex flex-column">
            <span>
              <strong>
                Sincerely,
              </strong>
            </span>
            <span>
              <strong>
                Dr Larry Adams
              </strong>
            </span>
            <span>
              <strong>
                President of USAG University
              </strong>
            </span>
          </div>
        </v-col>
      </v-row>
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
        <v-col cols="6" md="4" v-for="(item, i) in accreditionData" :key="i">
          <v-img class="mx-auto" :src="item" width="200" height="100" contain>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
export default {
  data: () => ({
    screen1Data: [
      {
        icon: 'fas fa-hand-holding-usd',
        number: '$1.5K',
        title: 'Low Fee',
        description:
          'Pay fee in easy (Interest free) instalments. You can choose from UK online education payments options.'
      },
      {
        icon: 'fas fa-globe',
        number: '50+',
        title: 'Online and flexible',
        description:
          "Study anytime, anywhere - You don't have to attend a College campus, so you can study from anywhere in the world. You can download & submit assignments - 100% online."
      },
      {
        icon: 'fas fa-certificate',
        number: '15+',
        title: 'UK Diploma Online Professional Education',
        description:
          'Assignments based - no exams for UK diploma All modules are assessed via submission of assignments - there are no exams.'
      },
      {
        icon: 'fas fa-certificate',
        number: '50+',
        title: 'UK Accredited Diploma',
        description:
          'USAG Universities Bachelor and Master Affordable, Accredited and 100% Online Education'
      },
      {
        icon: 'fas fa-award',
        number: '270+',
        title: 'Athletic Championships',
        description: 'USAG University 270+ Athletic Championships'
      },
      {
        icon: 'fas fa-users',
        number: '500+',
        title: 'Thousand Alumni',
        description: 'USAG University 500+ Thousand Alumni'
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
      require('../assets/logo16.jpg'),
      require('../assets/logo17.jpeg')
    ]
  }),
  components: {
    StartScreen
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/about-2.jpg');
}
</style>
