<template>
  <v-card height="100%">
    <v-row class="fill-height centerize">
      <v-col class="ma-0 pa-0" cols="10">
        <v-file-input
          v-model="image"
          outlined
          dense
          label="Image"
          prepend-icon="mdi-camera"
          :rules="imageRules"
          accept=".png,.jpeg,.jpg"
          ><template v-slot:selection="{ text }">
            <v-chip small label color="primary">
              {{ text }}
            </v-chip>
          </template></v-file-input
        >
      </v-col>

      <v-col cols="10">
        <v-text-field
          :rules="rules"
          v-model="title"
          outlined
          dense
          label="title"
        ></v-text-field>
      </v-col>

      <v-col style="padding-right: 1%" cols="5">
        <v-text-field-money
          v-model="price"
          outlined
          dense
          label="price"
          v-bind:properties="{
            // prefix: 'Faiz Oranı',
            readonly: false,
            disabled: false,
            outlined: true,
            dense: true,
            clearable: true,
            placeholder: ' ',
            rules: rules,
          }"
          v-bind:options="{
            locale: 'pt-BR',
            length: 11,
            precision: 0,
            empty: null,
          }"
        ></v-text-field-money>
      </v-col>

      <v-col style="padding-left: 1%" cols="5">
        <v-text-field
          :rules="rules"
          v-model="region"
          outlined
          dense
          label="region"
        ></v-text-field>
      </v-col>

      <v-col style="padding-right: 1%" cols="5">
        <v-text-field
          :rules="rules"
          v-model="meter"
          type="number"
          class="inputNumber"
          outlined
          dense
          label="meter"
        ></v-text-field>
      </v-col>

      <v-col style="padding-left: 1%" cols="5">
        <v-text-field
          :rules="rules"
          v-model="room"
          outlined
          dense
          label="room"
        ></v-text-field>
      </v-col>

      <v-col cols="10">
        <v-text-field
          :rules="rules"
          v-model="link"
          outlined
          dense
          label="link"
        ></v-text-field>
      </v-col>

      <v-col class="centerize" cols="10">
        <v-btn :disabled="enableSave" outlined small @click="saveAdvertisement"
          >kaydet</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import advertisementService from "../services/advertisement.service"
import imageService from "../services/image.service"

export default {
  data() {
    return {
      image: null,
      title: "",
      price: null,
      region: "",
      meter: null,
      room: "",
      link: "",
      rules: [(v) => !!v || "required"],
      imageRules: [(value) => !!value || "required"],
    }
  },

  methods: {
    async saveAdvertisement() {
      let formData = new FormData()
      formData.append("image", this.image)

      const resim = await imageService.createImage(formData)
      console.log("resim kaydedildi: ", resim)

      const ilan = await advertisementService.createAdvertisement({
        title: this.title,
        price: parseInt(this.price),
        region: this.region,
        meter: parseInt(this.meter),
        room: this.room,
        link: this.link,
        imageId: resim.imageId,
      })
      console.log("ilan kaydedildi: ", ilan)
    },
  },

  watch: {
    image: {
      handler(n, o) {
        // console.log(n, o)
        // let formData = new FormData()
        // formData.append("image", this.image)
        // console.log(this.image)
        // console.log(formData.get("image"))
      },
    },
  },

  computed: {
    enableSave() {
      if (
        !this.image ||
        !this.title ||
        !this.price ||
        !this.region ||
        !this.meter ||
        !this.room ||
        !this.link
      ) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
.row,
.col {
  margin: 0;
  padding: 0;
}

.centerize {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
