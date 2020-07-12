<template>
  <!-- Sizes your content based upon application components -->
  <!-- Provides the application the proper gutter -->
  <div>
    <StartScreen
      pageHeading="AWARD VERIFICATION"
      caption="AWARD VERIFICATION"
    />
    <v-container>
      <!-- If using vue-router -->
      <v-row class="test" justify="center" align="center">
        <v-col cols="12" md="5">
          <v-card>
            <v-card-text class="pb-0">
              <v-text-field
                v-model="cno"
                name="name"
                label="Certification Number"
                solo
              ></v-text-field>
              <span class="pt-0 mt-0 mb-0 pb-0">
                Date of Birth
              </span>
              <v-row>
                <v-col class="pa-1">
                  <v-select
                    value=""
                    :items="[
                      '01',
                      '02',
                      '03',
                      '04',
                      '05',
                      '06',
                      '07',
                      '08',
                      '09',
                      '10',
                      '11',
                      '12',
                      '13',
                      '14',
                      '15',
                      '16',
                      '17',
                      '18',
                      '19',
                      '20',
                      '21',
                      '22',
                      '23',
                      '24',
                      '25',
                      '26',
                      '27',
                      '28',
                      '29',
                      '30',
                      '31'
                    ]"
                    solo
                    dense
                    label="Date"
                  ></v-select>
                </v-col>
                <v-col class="pa-1">
                  <v-select
                    value=""
                    :items="[
                      '01',
                      '02',
                      '03',
                      '04',
                      '05',
                      '06',
                      '07',
                      '08',
                      '09',
                      '10',
                      '11',
                      '12'
                    ]"
                    solo
                    dense
                    label="Month"
                  ></v-select>
                </v-col>
                <v-col class="pa-1">
                  <v-select
                    value=""
                    :items="[
                      '1950',
                      '1951',
                      '1952',
                      '1953',
                      '1954',
                      '1955',
                      '1956',
                      '1957',
                      '1958',
                      '1959',
                      '1960',
                      '1961',
                      '1962',
                      '1963',
                      '1964',
                      '1965',
                      '1966',
                      '1967',
                      '1968',
                      '1969',
                      '1970',
                      '1971',
                      '1972',
                      '1976',
                      '1977',
                      '1978',
                      '1979',
                      '1980',
                      '1981',
                      '1982',
                      '1983',
                      '1984',
                      '1985',
                      '1986',
                      '1987',
                      '1988',
                      '1989',
                      '1990',
                      '1991',
                      '1992',
                      '1993',
                      '1994',
                      '1995',
                      '1996',
                      '1997',
                      '1998',
                      '1999',
                      '2000',
                      '2001',
                      '2002',
                      '2003',
                      '2004',
                      '2005',
                      '2006',
                      '2007',
                      '2008',
                      '2009',
                      '2010',
                      '2011',
                      '2012',
                      '2013',
                      '2014',
                      '2015',
                      '2016',
                      '2017',
                      '2018',
                      '2019'
                    ]"
                    solo
                    dense
                    label="Year"
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center mt-0 pt-0">
              <v-btn class="mt-0 mb-4" color="primary" @click="validateCno()">
                Get Result
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <p>
            USAG Universities' qualifications will help to build your career.
            E-commerce, Public Relations and many more. To find out more about
            our individual module awards email::: info@usagu.org
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-4 test" justify="center">
        <v-col cols="12" md="10">
          <v-simple-table v-if="show" height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Centre No</th>
                  <th class="text-left">Centre Name</th>
                  <th class="text-left">Country</th>
                  <th class="text-left">Candidate Name</th>
                  <th class="text-left">Candidate DOB</th>
                  <th class="text-left">Course Title</th>
                  <th class="text-left">Level</th>
                  <th class="text-left">Award Date</th>
                  <th class="text-left">Certificate Number</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(student, index) in students" :key="index">
                  <td>
                    {{ student.center }}
                  </td>
                  <td>
                    {{ student.centerName }}
                  </td>
                  <td>
                    {{ student.country }}
                  </td>
                  <td>
                    {{ student.name }}
                  </td>
                  <td>
                    {{ student.dob }}
                  </td>
                  <td>
                    {{ student.title }}
                  </td>
                  <td>
                    {{ student.level }}
                  </td>
                  <td>
                    {{ student.date }}
                  </td>
                  <td>
                    {{ student.certificate }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
export default {
  name: 'Awards',
  components: {
    StartScreen
  },
  data() {
    return {
      menu2: false,
      date: '',
      cno: '',
      students: [
        {
          center: '001',
          centerName: 'Pearson Vue',
          country: 'England',
          name: 'Sandeep',
          dob: '03-01-2000',
          title: 'Media',
          level: 'Level 3',
          date: '25-12-2019',
          certificate: 'GTU1234567890'
        }
      ],
      show: false
    }
  },
  methods: {
    validateCno() {
      if (this.cno === 'GTU1234567890') {
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/photo-gallery-3.jpg');
}
</style>
