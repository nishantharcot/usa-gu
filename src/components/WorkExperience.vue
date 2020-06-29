<template>
  <div class="work-experience">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4">
          Name and Address of Employer
          <v-text-field class="mt-7"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          Job Title
          <v-text-field class="mt-7"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          Period
          <div class="d-flex align-center justify-center" width="100%">
            <div class="from">
              From:
              <v-text-field></v-text-field>
            </div>
            <div class="to ml-4">
              To:
              <v-text-field></v-text-field>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            WorkExperience
          </v-list-item-content>
          <v-list-item-content>
            <v-checkbox class="ml-5" v-model="checkbox1"></v-checkbox>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            Do you have any criminal background history
          </v-list-item-content>
          <v-list-item-content>
            <v-checkbox class="ml-5" v-model="checkbox1"></v-checkbox>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            I accept terms and conditions
          </v-list-item-content>
          <v-list-item-content>
            <v-checkbox class="ml-5" v-model="checkbox1"></v-checkbox>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  data() {
    return {
      checkbox1: true,
    }
  }
}
</script>

<style></style>
