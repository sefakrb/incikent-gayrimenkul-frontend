<template>
  <v-card
    height="100%"
    :img="require('../assets/images/city-view-1.jpg')"
    class="overflow-hidden"
    tile
  >
    <v-card
      height="40%"
      style="
        background-color: transparent;
        font-size: 3.1rem;
        color: #fff5ee;
        padding-bottom: 1%;
      "
      flat
      class="centerize align-end font-weight-bold"
      >Yeni Ev mi Arıyorsunuz ?</v-card
    >
    <v-card
      style="background-color: transparent"
      class="centerize"
      width="100%"
      flat
    >
      <div style="width: 40%">
        <v-divider></v-divider>
      </div>
    </v-card>

    <v-card style="background-color: transparent" class="centerize mt-5" flat
      ><v-btn color="#0009" to="/advertisement" outlined
        >İLANLARI GÖRMEK İÇİN TIKLAYINIZ</v-btn
      ></v-card
    >
  </v-card>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
