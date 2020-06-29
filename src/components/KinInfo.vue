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
          v-model="surname"
          outlined
          label="Surname"
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
        <v-text-field
          v-model="relationship"
          outlined
          label="Relationship"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="phoneno"
          outlined
          label="Phone Number"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="mobileno"
          outlined
          label="Mobile Number"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="postcode"
          outlined
          label="Post code"
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
          label="Address"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: 'KinInfo'
}
</script>

<style></style>
