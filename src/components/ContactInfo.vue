<template>
  <v-row id="screen4" class="theme--dark">
    <v-col
      cols="12"
      md="2"
      sm="12"
      v-for="item in collegeStatistics"
      :key="item.title"
    >
      <div class="screen4Card">
        <h2 class="centerClass">{{ item.title }}</h2>
        <hr
          role="separator"
          aria-orientation="horizontal"
          class="v-divider lineAdjust"
        />
        <h4 class="centerClass pt-2">{{ item.label }}</h4>
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
        label: 'info@yoursite.com'
      },
      {
        title: 'Website',
        label: 'yoursite.com'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#screen4 {
  // height: 40vh;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  // background-color: #1a237e;
  // color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', serif !important;
}

.screen4Card {
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: baseline;
}

.centerClass {
  text-align: center;
}

hr {
  width: 20%;
  margin: 0 auto;
  border-top: 5px solid #b22234;
}
</style>
