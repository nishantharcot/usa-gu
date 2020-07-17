<template>
  <div class="application-form">
    <div class="align-center justify-center d-flex pa-4">
      <span class="text-h4 pa-4 ma-4 font-weight-bold">
        Application Form
      </span>
    </div>
    <v-row>
      <v-col cols="12" md="6" class="mx-auto">
        <v-card class="mx-auto mb-4">
          <v-card-title class="title font-weight-bold justify-space-between">
            <span>{{ currentTitle }}</span>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <PersonalInfo />
            </v-window-item>
            <v-window-item :value="2">
              <KinInfo />
            </v-window-item>

            <v-window-item :value="3">
              <Qualifications />
            </v-window-item>

            <v-window-item :value="4">
              <WorkExperience />
            </v-window-item>

            <v-window-item :value="5">
              <div class="pa-4 text-center">
                <v-img
                  eager
                  class="mb-4"
                  contain
                  height="128"
                  src="../assets/USA-GU2.png"
                ></v-img>
                <h3 class="title font-weight-light mb-2">Welcome to USA-GU</h3>
                <span class="caption grey--text"
                  >Thanks for filling the form</span
                >
              </div>
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn :disabled="step === 1" text @click="step--">
              Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="step === 5"
              color="primary"
              depressed
              @click="step++"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center" justify="center">
      <v-col class="text-center">
        <v-btn
          x-large
          color="primary"
          href="/USAG-UNIVERSITY-application-form.pdf"
        >
          Download Application Form
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PersonalInfo from '@/components/PersonalInfo.vue'
import KinInfo from '@/components/KinInfo.vue'
import Qualifications from '@/components/Qualifications.vue'
import WorkExperience from '@/components/WorkExperience.vue'

export default {
  name: 'Application',
  components: {
    PersonalInfo,
    KinInfo,
    Qualifications,
    WorkExperience
  },
  data: () => ({
    step: 1
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Personal Info'
        case 2:
          return 'Next of kin Info'
        case 3:
          return 'Qualifications'
        case 4:
          return 'Work Experience'
        default:
          return 'Form Filled Successfully'
      }
    }
  }
}
</script>

<style></style>
