<template>
  <v-card-text>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="firstname"
          outlined
          label="First name"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="lastname"
          outlined
          label="Last name"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="email"
          outlined
          label="Email"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date of birth"
              outlined
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="nino"
          outlined
          label="Course"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          outlined
          :items="years"
          label="Course Start Year"
          solo
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="nino"
          outlined
          label="NI Number"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select :items="gender" outlined label="Gender"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="telno"
          outlined
          label="Home telephone"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="phone"
          outlined
          label="Mobile Number"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="placeofbirth"
          outlined
          label="Place of birth"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="nationality"
          outlined
          label="Nationality"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          outlined
          rows="1"
          row-height="15"
          label="Full Address"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: 'PeronalInfo',
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    years: [
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
      '2028',
      '2029',
      '2030'
    ],
    gender: ['Male', 'Female', 'Others']
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>

<style></style>
