<template>
  <div class="ma-0 pa-0">
    <v-row style="height: 50vh" class="ma-0 pa-0">
      <v-col class="ma-0 pa-0" cols="5">
        <v-card flat class="ma-0 pa-0">
          <v-card-title class="font-weight-bold"
            >İletişim Bilgilerimiz</v-card-title
          >
          <v-divider></v-divider>

          <v-card-text class="font-weight-bold"
            ><v-icon color="blue" class="mr-2">mdi-map-marker</v-icon>General
            Zeki Doğan, İncikent Emlak, Natoyolu Caddesı 56/A, 06630
            Mamak/Ankara</v-card-text
          >
          <v-card-text class="font-weight-bold"
            ><v-icon color="green" class="mr-2">mdi-phone</v-icon>0545 840 18
            19</v-card-text
          >
          <v-card-text class="font-weight-bold"
            ><v-icon color="pink" class="mr-2">mdi-instagram</v-icon
            >@sefakrb</v-card-text
          >
          <v-card-text class="font-weight-bold"
            ><v-icon color="red" class="mr-2">mdi-mail</v-icon
            >incikentgayrimenkul@gmail.com</v-card-text
          >
        </v-card>
      </v-col>
      <v-col class="ma-0 pa-0" cols="7">
        <v-img
          height="52vh"
          :src="require('../assets/images/ofis1.jpg')"
        ></v-img>
      </v-col>
    </v-row>
    <v-divider class="ma-5"></v-divider>

    <v-row class="ma-0 pa-0" style="height: 50vh">
      <v-col style="height: 100%" class="ma-0 pa-0" cols="12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24481.558687027842!2d32.901655927766384!3d39.91465583079152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x780c8fba97a4a583!2s%C4%B0ncikent%20Gayrimenkul!5e0!3m2!1str!2str!4v1662935321355!5m2!1str!2str"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> </v-col
    ></v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
