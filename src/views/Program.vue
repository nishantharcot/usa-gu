<template>
  <v-row class="justify-center">
    <v-col cols="10">
      <v-card>
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title class="mx-auto">{{ course.title }}</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <v-tab v-for="item in sideBarHeadings" :key="item">{{ item }}</v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  The objective of Level 3 Certificate in Business Studies
                  qualification is to provide learners with an in depth
                  understanding of the operations and structure of businesses.
                  Successful completion of this qualification will equip
                  learners with some of the underpinning knowledge and skills
                  required to succeed in employment or further studies.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  This qualification enables learners to develop the knowledge,
                  understanding and skills in business including the sources
                  which will develop while studying the business course,easily
                  understand the business system.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="columnFlex">
                  <p>The programme is available in 2 duration modes:</p>
                  <p>6 Month</p>
                  <p>9 Month</p>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="columnFlex">
                  <p>The programme is available in 2 delivery modes:</p>
                  <ul>
                    <li>Online</li>
                    <li>In Class</li>
                  </ul>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="columnFlex">
                  <p>In order to apply you should have either:</p>
                  <ul>
                    <li>
                      This qualification is designed for learners aged 16 and
                      above.
                    </li>
                    <li>
                      5 or more GCSEs and above or other related level 2
                      subjects or other equivalent international qualifications
                    </li>
                  </ul>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="columnFlex">
                  <p>Assessment is via assignment submission</p>
                  <p>No Exams</p>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="columnFlex">
                  <p>
                    This programme is accredited by Ofqual Awarding body (Othm)
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <div class="columnFlex">
                  <p>Single Payment £950</p>
                  <p>Registration fees £ 180</p>
                  <h4 class="mb-5">Monthly Payment breakdown</h4>
                  <p>Admininstration charges £ 50</p>
                  <p>Intial Deposit ( including registration) £ 230</p>
                  <p>6 Monthly instalments £ 165</p>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    sideBarHeadings: [
      'Overview',
      'Description',
      'Duration',
      'Course Delivery',
      'Entry Requirements',
      'Assessment',
      'Accreditation',
      'Fees'
    ]
  }),
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.flexClass {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
