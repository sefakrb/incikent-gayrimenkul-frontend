<template>
  <div style="height: 100%">
    <v-row class="ma-0 pa-0" style="height: 100%">
      <v-col class="centerize" cols="12" md="7">
        <v-img
          max-width="80%"
          :src="require('../assets/images/contact2.svg')"
        ></v-img>
      </v-col>

      <v-col cols="12" md="5" class="centerize flex-column">
        <v-card
          class="cardSize"
          v-for="data in datas"
          :key="data"
          :width="cardWidth"
          flat
        >
          <v-card-title class="centerize font-weight-bold text-h6">{{
            data.title
          }}</v-card-title>
          <v-divider style="margin: 10%" class="mt-0 mb-0"></v-divider>
          <v-card-text class="centerize font-weight-bold"
            ><v-icon :color="data.color" class="mr-2">{{ data.icon }}</v-icon
            >{{ data.text }}</v-card-text
          ></v-card
        >
      </v-col>
    </v-row>

    <v-divider style="margin: 3%" class="mt-0"></v-divider>

    <v-row style="height: 50%" class="ma-0 pa-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24481.558687027842!2d32.901655927766384!3d39.91465583079152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x780c8fba97a4a583!2s%C4%B0ncikent%20Gayrimenkul!5e0!3m2!1str!2str!4v1662935321355!5m2!1str!2str"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          title: 'Telefon',
          icon: 'mdi-phone',
          pink: 'green',
          text: '0545 840 1819',
        },
        {
          title: 'Instagram',
          icon: 'mdi-instagram',
          color: 'pink',
          text: '@incikentgayrimenkul',
        },
        {
          title: 'Adres',
          icon: 'mdi-map-marker',
          pink: 'blue',
          text: 'General Zeki Doğan, İncikent Emlak, Natoyolu Caddesı 56/A, 06630 Mamak/Ankara',
        },
      ],
    }
  },
  computed: {
    cardWidth() {
      console.log(this.$vuetify.breakpoint.name)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100vw'
        case 'sm':
          return '100vw'
        default:
          return '100vw'
      }
    },
  },
}
</script>

<style scoped>
.cardSize {
  margin: 2%;
}
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
