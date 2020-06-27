<template>
  <div>
    <StartScreen pageHeading="Contact Us" caption="CONTACT" />
    <v-container>
      <ContactInfo />
      <v-row>
        <v-col cols="12" md="6"></v-col>
        <v-col cols="12" md="6">
          <v-form>
            <v-text-field label="Name" type="text" v-model="name">
            </v-text-field>
            <v-text-field label="Email" type="email" v-model="email">
            </v-text-field>
            <v-text-field label="Subject" type="text" v-model="subject">
            </v-text-field>
            <v-textarea label="Message"></v-textarea>
            <v-btn color="primary" x-large>
              Send Message
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import ContactInfo from '@/components/ContactInfo.vue'
export default {
  components: {
    StartScreen,
    ContactInfo
  },
  data() {
    return {
      name: '',
      email: '',
      subject: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#screen1 {
  background-image: url('../assets/contact.jpeg');
  // background-position: top;
}
</style>
