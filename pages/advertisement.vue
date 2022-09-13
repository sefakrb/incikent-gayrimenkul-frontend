<template>
  <v-row class="ma-0 pa-0" style="height: 100%">
    <v-col cols="5">
      <v-card class="fixCredit" flat>
        <div class="centerize">
          <v-img
            max-width="20vw"
            contain
            :src="require('../assets/images/house2.svg')"
          ></v-img>
        </div>
        <v-row class="mt-10 centerize">
          <v-col class="centerize flex-column" cols="10">
            <v-text-field
              color="yellow"
              label="Tutar"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="yellow"
              label="Vade"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="yellow"
              label="Field"
              outlined
              dense
            ></v-text-field>
            <v-btn small color="yellow" outlined>hesapla</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="7" class="centerize flex-column">
      <v-card
        width="80%"
        v-for="advertisement in advertisements"
        :key="advertisement"
        elevation="12"
        class="cardSize"
      >
        <v-img
          min-height="25vh"
          max-height="25vh"
          :src="require('../assets/images/' + advertisement.image)"
        ></v-img>
        <v-card-title class="centerize">
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
    </v-col>
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
.centerize {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.fixCredit {
  position: fixed;
  top: 25vh;
  bottom: 0;
  right: 0;
  left: 3%;
  width: 30%;
}
</style>
