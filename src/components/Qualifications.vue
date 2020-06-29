<template>
  <v-card-text>
    <v-row>
      <v-col cols="12" md="3">
        Institute
        <v-text-field class="mt-7"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        Qualification / Subject
        <v-text-field class="mt-7"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
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
      <v-col cols="12" md="3">
        Grade
        <v-text-field class="mt-7"></v-text-field>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: 'Qualifications'
}
</script>

<style></style>
