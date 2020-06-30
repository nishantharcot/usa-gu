<template>
  <v-row class="d-flex justify-space-around align-stretch theme--dark mt-10">
    <v-col
      cols="12"
      md="2"
      sm="12"
      v-for="item in collegeStatistics"
      :key="item.title"
    >
      <div class="d-flex flex-column">
        <h3 class="text-center">{{ item.title }}</h3>
        <hr
          role="separator"
          aria-orientation="horizontal"
          class="v-divider lineAdjust"
        />
        <h4 class="text-center pt-2">{{ item.label }}</h4>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    collegeStatistics: [
      {
        title: 'Address',
        label: '198 West 21th Street, Suite 721 New York NY 10016'
      },
      {
        title: 'Contact Number',
        label: '+1235 2355 98'
      },
      {
        title: 'Email Address',
        label: 'info@abguniversity.org'
      },
      {
        title: 'Website',
        label: 'abguniversity.com'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
hr {
  width: 20%;
  margin: 0 auto;
  border-top: 5px solid #b22234;
}
</style>
