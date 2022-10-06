<template>
  <v-row class="centerize ma-0 pa-0" style="margin-top: 5% !important">
    <v-col class="ma-0 pa-0 d-flex justify-end" cols="10">
      <v-btn @click="dialogBoolean = true" outlined color="yellow">
        Ekle
      </v-btn>
    </v-col>
    <v-col class="ma-0 pa-0" style="margin-top: 2% !important" cols="10">
      <AllAdvertisements @edit="editAdvertisement"></AllAdvertisements>
    </v-col>

    <v-dialog width="60%" v-model="dialogBoolean">
      <AddAdvertisement
        :editedAdvertisement="editedAdvertisement"
        :resetDialog="dialogBoolean"
      ></AddAdvertisement>
    </v-dialog>
  </v-row>
</template>

<script>
import AddAdvertisement from "~/components/addAdvertisement.vue"
import AllAdvertisements from "~/components/allAdvertisements.vue"
export default {
  components: { AddAdvertisement, AllAdvertisements },
  data() {
    return {
      dialogBoolean: false,
      editedAdvertisement: {},
    }
  },

  methods: {
    editAdvertisement(advertisement) {
      this.editedAdvertisement = advertisement
      this.dialogBoolean = true
    },
  },

  watch: {
    dialogBoolean: {
      handler(n, o) {
        if (!n) {
          this.editedAdvertisement = {}
        }
      },
    },
  },
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
