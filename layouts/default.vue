<template>
  <v-app class="d-flex">
    <v-app-bar
      color="#1c4e9e"
      elevation="0"
      dark
      flat
      app
    >
    </v-app-bar>
    <v-main class="overflow-hidden" style="height:100vh">
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
* {
  background-color: darkgray
}
</style>