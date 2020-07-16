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
            Thanks to having interactive online education, USAG University can
            truly be international. Students from all over the world are welcome
            to enroll in our programs! Moreover, the faculty is also an
            international one with lecturers coming from and living in the U.S.,
            Europe, Australia and Asia. Come and join our international
            community!
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
          <CourseBanner courseName="DIPLOMA PROGRAMS" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <CourseBanner courseName="PG DIPLOMA PROGRAMS" />
          <h2 class="display my-4">PG Diploma programs</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="course in pgDiplomaPrograms"
              :key="course.title"
            >
              <v-expansion-panel-header>{{
                course.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-if="$vuetify.breakpoint.smAndDown">
                  <h3 class="display mb-3">Overview</h3>
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
                  <p>
                    The objective of {{ course.title }} is to provide learners
                    with an in depth understanding of the operations and
                    structure of businesses. Successful completion of this
                    qualification will equip learners with some of the
                    underpinning knowledge and skills required to succeed in
                    employment or further studies.
                  </p>
                  <div>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Learn More
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card flat>
                          <v-card-title>
                            Overview
                          </v-card-title>
                          <v-card-text>
                            The objective of {{ course.title }}
                            is to provide learners with an in depth
                            understanding of the operations and structure of
                            businesses. Successful completion of this
                            qualification will equip learners with some of the
                            underpinning knowledge and skills required to
                            succeed in employment or further studies.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Description
                          </v-card-title>
                          <v-card-text>
                            This qualification enables learners to develop the
                            knowledge, understanding and skills in business
                            including the sources which will develop while
                            studying the business course,easily understand the
                            business system.
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Duration
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 duration modes:
                              </p>
                              <p>6 Month</p>
                              <p>9 Month</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Course Delivery
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                The programme is available in 2 delivery modes:
                              </p>
                              <ul>
                                <li>Online</li>
                                <li>In Class</li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Entry Requirements
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                In order to apply you should have either:
                              </p>
                              <ul>
                                <li>
                                  This qualification is designed for learners
                                  aged 16 and above.
                                </li>
                                <li>
                                  5 or more GCSEs and above or other related
                                  level 2 subjects or other equivalent
                                  international qualifications
                                </li>
                              </ul>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Assessment
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Assessment is via assignment submission</p>
                              <p>No Exams</p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Accreditation
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>
                                This programme is accredited by Ofqual Awarding
                                body (Othm)
                              </p>
                            </div>
                          </v-card-text>
                        </v-card>
                        <v-card flat>
                          <v-card-title>
                            Fees
                          </v-card-title>
                          <v-card-text>
                            <div class="columnFlex">
                              <p>Single Payment £950</p>
                              <p>Registration fees £ 180</p>
                              <h4 class="mb-5">
                                Monthly Payment breakdown
                              </h4>
                              <p>Admininstration charges £ 50</p>
                              <p>
                                Intial Deposit ( including registration) £ 230
                              </p>
                              <p>6 Monthly instalments £ 165</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                  <Program :course="course" />
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
    dialog: false,
    sideBarHeadings: [
      'Overview',
      'Description',
      'Duration',
      'Course Delivery',
      'Entry Requirements',
      'Assessment',
      'Accreditation',
      'Fees'
    ],
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
      },
      {
        title: 'Diploma in Chaplaincy',
        overview: ''
      }
    ],
    pgDiplomaPrograms: [
      {
        title: 'Postgraduate Diploma in Business Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Accounting and Finance Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Education and Training Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Health and Social Care Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Logistics and Supply Chain Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Travel and Tourism Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Hospitality and Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Information and Technology Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Creative Media and Management',
        overview: ''
      },
      {
        title: 'Postgraduate Diploma in Chaplaincy',
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
        title: 'MA in Agriculture',
        overview: ''
      },
      {
        title: 'MA in Communications and Media',
        overview: ''
      },
      {
        title: 'MA in Computer Science and Information Technology',
        overview: ''
      },
      {
        title: 'MA in Hospitality and Event Management',
        overview: ''
      },
      {
        title: 'MA in Chaplaincy',
        overview: ''
      },
      {
        title: 'MA in Pastoral Care and Chaplaincy',
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
.screen1 {
  background-image: url('../assets/marketing.jpg');
}
</style>
