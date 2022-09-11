<template>
  <v-row class="d-flex justify-center ma-0 pa-0 bg">
    <v-card
      :width="cardWidth"
      v-for="advertisement in advertisements"
      :key="advertisement"
      elevation="24"
      class="cardSize"
    >
      <v-img
        min-height="25vh"
        max-height="25vh"
        :src="require('../assets/images/' + advertisement.image)"
      ></v-img>
      <v-card-title class="d-flex justify-center">
        {{ advertisement.title }}
      </v-card-title>
      <v-card-text class="textType">
        Tarih: {{ advertisement.date }}
      </v-card-text>
      <v-card-text class="textType">
        Bölge: {{ advertisement.region }}
      </v-card-text>
      <v-card-text class="textType font-weight-bold">
        {{ advertisement.price }} ₺
      </v-card-text>
      <div class="ma-0 pa-0 d-flex justify-end">
        <v-btn
          small
          color="yellow"
          outlined
          class="mr-1 mb-1"
          :href="advertisement.link"
          target="_blank"
          >ilan detayları</v-btn
        >
      </div>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      advertisements: [
        {
          image: 'ilan1.jpg',
          title: "GENERAL ZEKİ DOĞAN'DA ARA KAT MANZARALI 2+1 KİRALIK DAİRE!!!",
          price: 12,
          date: '09-09-2022',
          region: 'ankara/mamak',
          link: 'https://www.sahibinden.com/ilan/emlak-konut-kiralik-general-zeki-dogan-da-ara-kat-manzarali-2-plus1-kiralik-daire-1049736416/detay',
        },
        {
          image: 'ilan2.jpg',
          title: 'LİDERKENT SİTESİNDE BORÇSUZ MANZARALI 2+1 DAİRE!!!',
          price: 10,
          date: '09-09-2022',
          region: 'ankara/mamak',
          link: 'https://www.sahibinden.com/ilan/emlak-konut-satilik-liderkent-sitesinde-borcsuz-manzarali-2-plus1-daire-1050095915/detay',
        },
        {
          image: 'ilan3.jpg',
          title: "ZİRVEKENT ÇOK KATLI TOKİ'DE 2+1 BORÇSUZ SATILIK DAİRE!!!",
          price: 9,
          date: '09-09-2022',
          region: 'istanbul/sisli',
          link: 'https://www.sahibinden.com/ilan/emlak-konut-satilik-zirvekent-cok-katli-toki-de-2-plus1-borcsuz-satilik-daire-1041475674/detay',
        },
        {
          image: 'ilan4.jpg',
          title: "MUTLU'DA ARA KAT SIFIR ANKARA MANZARALI 3+1 SATILIK DAİRE!!!",
          price: 9,
          date: '09-09-2022',
          region: 'istanbul/sisli',
          link: 'https://www.sahibinden.com/ilan/emlak-konut-satilik-mutlu-da-ara-kat-sifir-ankara-manzarali-3-plus1-satilik-daire-1043095994/detay',
        },
        {
          image: 'ilan5.jpg',
          title: "GENERAL ZEKİ DOĞAN MAHALLES'İNDE 3+1 SATILIK DAİRE!!!",
          price: 9,
          date: '09-09-2022',
          region: 'istanbul/sisli',
          link: 'https://www.sahibinden.com/ilan/emlak-konut-satilik-general-zeki-dogan-mahallesi-nde-3-plus1-satilik-daire-1036393908/detay',
        },
      ],
    }
  },

  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '80vw'
        case 'sm':
          return '40vw'
        default:
          return '30vw'
      }
    },
  },
}
</script>

<style scoped>
.cardSize {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5%;
}
.textType {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background: url('../assets/images/deneme5.jpg') no-repeat center center;
  background-size: cover;
}
</style>
