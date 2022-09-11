<template>
  <v-app dark>
    <v-card flat tile class="ma-0 pa-0">
      <v-app-bar class="ma-0 pa-0" color="black">
        <v-row>
          <v-col cols="1">
            <v-app-bar-nav-icon
              style="color: white"
              @click="drawer = true"
            ></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="10">
            <div style="width: 100%" class="ma-0 pa-0 d-flex justify-center">
              <v-img
                max-width="140px"
                :src="
                  require('../assets/images/incikent-gayrimenkul-logo-reshaped.png')
                "
              >
              </v-img>
            </div>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-navigation-drawer
        dark
        v-model="drawer"
        height="100vh"
        absolute
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="yellow--text text--accent-4"
          >
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Ana Sayfa</v-list-item-title>
            </v-list-item>

            <v-list-item to="/advertisement">
              <v-list-item-icon>
                <v-icon>mdi-bulletin-board</v-icon>
              </v-list-item-icon>
              <v-list-item-title>İlanlar</v-list-item-title>
            </v-list-item>

            <v-list-item to="/communication">
              <v-list-item-icon>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-title>İletişim</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer color="black" app>
      <span style="color: white">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      drawer: false,
      group: null,
    }
  },
}
</script>

<style>
html {
  overflow: auto;
}
</style>
