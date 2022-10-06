<template>
  <v-row class="centerize ma-0 pa-0">
    <v-col class="ma-0 pa-0" cols="12">
      <v-card class="ma-0 pa-0">
        <v-data-table
          :headers="headers"
          :items="advertisements"
          :items-per-page="5"
          hide-default-header
        >
          <template v-slot:header="{ props: { headers } }">
            <thead>
              <tr>
                <th
                  v-for="h in headers"
                  :key="h.class"
                  :id="h.class"
                  :class="h.class"
                >
                  <span>{{ h.text }}</span>
                </th>
              </tr>
            </thead>
          </template>

          <template v-slot:[`item.image`]="{ item }">
            <v-img class="imageSize" :src="baseUrl + '/' + item.imageId">
            </v-img
          ></template>
          <template v-slot:[`item.meter`]="{ item }">
            {{ item.meter }}</template
          >
          <template class="header-style" v-slot:[`item.link`]="{ item }">
            <div class="centerize">
              <v-btn
                small
                outlined
                color="yellow"
                :href="item.link"
                target="_blank"
                >Detay</v-btn
              >
            </div></template
          >
          <template v-slot:[`item.infoActions`]="{ item }">
            <v-icon small class="mr-2" @click="editAdvertisement(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteAdvertisement(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import advertisementService from "~/services/advertisement.service"

export default {
  data() {
    return {
      headers: [
        {
          text: "Id",
          align: "start",
          value: "id",
        },
        { text: "Resim", value: "image" },
        { text: "İlan Başlığı", value: "title" },
        { text: "Fiyat", value: "price" },
        { text: "Bölge", value: "region" },
        { text: "Oda", value: "room" },
        { text: "Metrekare", value: "meter" },
        {
          text: "İlan Detayları",
          value: "link",
        },
        { text: "Eylemler", value: "infoActions" },
      ],
      advertisements: [],
      baseUrl: process.env.BACKEND_URL,
    }
  },

  async created() {
    this.advertisements = await advertisementService.getAdvertisements()
  },

  methods: {
    editAdvertisement(advertisement) {
      this.$emit("edit", advertisement)
    },
    deleteAdvertisement(advertisement) {},
  },
}
</script>

<style scoped>
.imageSize {
  max-width: 300px;
  max-height: 300px;
}
.centerize {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.header-style {
  border: 2px solid red;
}
</style>
