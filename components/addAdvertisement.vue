<template>
  <v-form style="height: 100%" ref="form">
    <v-card class="pb-10" height="100%">
      <v-row>
        <v-col cols="11">
          <v-card-title class="justify-center text-h4 font-weight-medium"
            >İLAN EKLE</v-card-title
          ></v-col
        >
        <v-col class="centerize pb-3" cols="1">
          <v-icon>mdi-close</v-icon>
        </v-col>
      </v-row>

      <v-row class="fill-height centerize">
        <v-col class="ma-0 pa-0" cols="10">
          <v-file-input
            v-model="image"
            v-if="!editedAdvertisement.link"
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
          <v-row v-if="editedAdvertisement.link">
            <v-col class="centerize" cols="12">
              <v-img class="imageSize" :src="image"> </v-img
            ></v-col>
            <v-col class="centerize" cols="12">
              <v-icon small>mdi-pencil</v-icon>
              <v-icon small>mdi-delete</v-icon>
            </v-col>
          </v-row>
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
            :rules="linkRule"
            v-model="link"
            outlined
            dense
            label="link"
          ></v-text-field>
        </v-col>

        <v-col class="centerize" cols="10">
          <v-btn
            :disabled="enableSave"
            outlined
            small
            @click="saveAdvertisement"
            >{{ this.editedAdvertisement.link ? "Düzenle" : "Kaydet" }}</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import advertisementService from "../services/advertisement.service"
import imageService from "../services/image.service"

export default {
  props: {
    editedAdvertisement: {
      imageUrl: String,
      title: String,
      price: Number,
      region: String,
      meter: Number,
      room: String,
      link: String,
    },

    resetDialog: { type: Boolean },
  },

  data() {
    return {
      image: null,
      title: "",
      price: null,
      region: "",
      meter: null,
      room: "",
      link: "",
      rules: [(v) => !!v || "gerekli"],
      imageRules: [(value) => !!value || "gerekli"],
      linkRule: [this.isValidUrl || "geçerli url adresi girin"],
    }
  },

  created() {},

  mounted() {
    if (this.editedAdvertisement.link) {
      this.image = this.editedAdvertisement.imageUrl
      this.title = this.editedAdvertisement.title
      this.price = this.editedAdvertisement.price
      this.region = this.editedAdvertisement.region
      this.meter = this.editedAdvertisement.meter
      this.room = this.editedAdvertisement.room
      this.link = this.editedAdvertisement.link
    }
  },

  methods: {
    async saveAdvertisement() {
      if (this.editedAdvertisement.link) {
        this.updateAdvertisement()
        return
      }
      console.log("save adv.")

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

      this.resetForm()
    },

    async updateAdvertisement() {
      console.log("edit adv.")
    },

    isValidUrl(urlString) {
      let urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ) // validate fragment locator
      return !!urlPattern.test(urlString)
    },

    resetForm() {
      this.$refs.form.reset()
    },
  },

  watch: {
    image: {
      handler(n, o) {},
    },

    resetDialog: {
      handler(n, o) {
        if (n) {
          this.resetForm()
        }
      },
    },

    editedAdvertisement: {
      handler(n, o) {
        console.log(n, o)
        if (n) {
          this.image = n.imageUrl
          this.title = n.title
          this.price = n.price
          this.region = n.region
          this.meter = n.meter
          this.room = n.room
          this.link = n.link
        }
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

.imageSize {
  max-width: 300px;
  max-height: 300px;
}
</style>
