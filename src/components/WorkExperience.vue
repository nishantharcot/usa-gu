<template>
  <v-container>
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
    <v-row>
      <v-col cols="12">
        <p>Work Experience (in years)</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12">
        <p>Do you have any criminal background history</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_icon"
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12">
        <p>Are you a person with disability?</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          item-value="text"
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WorkExperience',
  data: () => ({
    dropdown_font: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    dropdown_icon: ['Yes', 'No'],
    dropdown_edit: ['Yes', 'No']
  })
}
</script>

<style></style>
