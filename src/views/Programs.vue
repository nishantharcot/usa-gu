<template>
  <div>
    <StartScreen pageHeading="OUR PROGRAMS" caption="PROGRAMS" />
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" md="4">
          <v-img src="../assets/programs.jpeg" height="725"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h4 class="text-h4">
            <strong>
              Online Degree Programs
            </strong>
          </h4>
          <p class="mt-10">
            USAG University is a modern university that combines practical
            methods and innovative approaches to the American and European
            system of education. The school came into existence as a result of a
            merger of what were the USAG University and the European USAG
            University, both of which have had a long tradition of providing
            interactive online education.
          </p>
          <p class="mt-5">
            The mission of USAG University is to provide high-quality MBA, MSc,
            DBA and Ph.D. programs in multiple languages. Based on modern and
            efficient methods of education, which enable graduates to apply the
            acquired knowledge immediately into their professional life.
          </p>
          <p class="mt-5">
            Thanks to having interactive online education, Global Tamil
            University can truly be international. Students from all over the
            world are welcome to enroll in our programs! Moreover, the faculty
            is also an international one with lecturers coming from and living
            in the U.S., Europe, Australia and Asia. Come and join our
            international community!
          </p>
          <h4 class="text-h4">
            <strong>
              How is studying at USAG University going to enrich me?
            </strong>
          </h4>
          <div class="d-flex flex-column mt-10">
            <span
              >Skills and knowledge immediately applicable into practice
            </span>
            <span>New information and know-how from the important fields </span>
            <span>Way-out from the personal and professional stagnation </span>
            <span>Competitive advantage over others </span>
            <span>The chance for career advancement </span>
            <span>Prerequisite for higher evaluation at work </span>
            <span>Modern way of education </span>
            <span>Quality education </span>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10 mb-5 justify-center">
        <v-col cols="12">
          <CourseBanner courseName="DIPLOMA" />
          <h2 class="display my-4">Diploma</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in diplomaPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <CourseBanner courseName="UNDERGRADUATE PROGRAMS" />
          <h2 class="display my-4">Bachelor of Arts</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in bachelorOfArtsPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="display my-4">Bachelor of Science</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in bachelorOfSciencePrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <CourseBanner courseName="POSTGRADUATE PROGRAMS" />
          <h2 class="display my-4">Matser of Arts (MA)</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in masterOfArtsPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is overview of the course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="display my-4">Matser of Science (MSc)</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in masterOfSciencePrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="display my-4">Matser of Business Administartion (MBA)</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in masterOfBusinessAdministrationPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="display my-4">Matser of Commerce (MCom)</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in masterOfCommercePrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <CourseBanner courseName="DOCTORATE PROGRAMS" />
          <h2 class="display my-4">PhD</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in phdPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="display my-4">DBA</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in dbaPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="display my-4">DPE</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in dpePrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>This is the overview of course {{ course.title }}</p>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <v-btn color="primary">Learn More</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Program from './Program.vue'
import StartScreen from '@/components/StartScreen.vue'
import CourseBanner from '@/components/CourseBanner.vue'

export default {
  data: () => ({
    diplomaPrograms: [
      {
        title: 'Diploma in Business Management',
        overview: ''
      },
      {
        title: 'Diploma in Accounting and Finance Management',
        overview: ''
      },
      {
        title: 'Diploma in Education and Training Management',
        overview: ''
      },
      {
        title: 'Diploma in Health and Social Care Management',
        overview: ''
      },
      {
        title: 'Diploma in Human Resource Management',
        overview: ''
      },
      {
        title: 'Diploma in Logistics and Supply Chain Management',
        overview: ''
      },
      {
        title: 'Diploma in Travel and Tourism Management',
        overview: ''
      },
      {
        title: 'Diploma in Hospitality and Management',
        overview: ''
      },
      {
        title: 'Diploma in Information and Technology Management',
        overview: ''
      },
      {
        title: 'Diploma in Creative Media and Management',
        overview: ''
      }
    ],
    bachelorOfArtsPrograms: [
      {
        title: 'BA (Hons) Business Management',
        overview: ''
      },
      {
        title: 'BA (Hons) Media Management',
        overview: ''
      },
      {
        title: 'BA (Hons) Travel and Tourism',
        overview: ''
      },
      {
        title: 'BA (Hons) Hosplitality Management',
        overview: ''
      },
      {
        title: 'BA (Hons) HealthCare Management',
        overview: ''
      },
      {
        title: 'BA (Hons) Human Resource Management',
        overview: ''
      },
      {
        title: 'BA (Hons) Community Social Work',
        overview: ''
      }
    ],
    bachelorOfSciencePrograms: [
      {
        title: 'BSc (Hons) Computing',
        overview: ''
      },
      {
        title: 'BSc (Hons) Accounting and Finance',
        overview: ''
      }
    ],
    masterOfArtsPrograms: [
      {
        title: 'MA in Tamil Education',
        overview: ''
      },
      {
        title: 'MA in Tamil History',
        overview: ''
      },
      {
        title: 'MA in Tamil Music',
        overview: ''
      },
      {
        title: 'MA in Bharatanatyam',
        overview: ''
      },
      {
        title: 'MA in Yoga ',
        overview: ''
      }
    ],
    masterOfSciencePrograms: [
      {
        title: 'MSc Project Management',
        overview: ''
      },
      {
        title: 'MSc Media Management',
        overview: ''
      },
      {
        title: 'MSc in Strategic IT Management',
        overview: ''
      },
      {
        title: 'MSc in International Tourism Management',
        overview: ''
      },
      {
        title: 'MSc in International Hospitality Management',
        overview: ''
      }
    ],
    masterOfBusinessAdministrationPrograms: [
      {
        title: 'Master of Business Administraton',
        overview: ''
      }
    ],
    masterOfCommercePrograms: [
      {
        title: 'Master of Commerce',
        overview: ''
      }
    ],
    phdPrograms: [
      {
        title: 'Ph.D Tamil',
        overview: ''
      },
      {
        title: 'Ph.D Tamil Management',
        overview: ''
      },
      {
        title: 'Ph.D Project Management',
        overview: ''
      }
    ],
    dbaPrograms: [
      {
        title: 'Doctor of Business Administration',
        overview: ''
      }
    ],
    dpePrograms: [
      {
        title: 'Doctor of Professional Enterpreneurship',
        overview: ''
      }
    ]
  }),
  components: {
    Program,
    StartScreen,
    CourseBanner
  }
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', serif !important;
}
.screen1 {
  background-image: url('../assets/marketing.jpg');
}

#programHeading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
}
#screen3 {
  min-height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #536dfe;
}
</style>
