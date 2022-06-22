<template>
  <v-app>
    <v-app-bar
      color="#1c4e9e"
      elevation="0"
      dark
      flat
      app
      dense
      style="position:relative"
    >
    </v-app-bar>
    <v-main class="overflow-auto" style="height:95vh; scrollbar-width:auto">
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
* {
  background-color: darkgray;
}
</style>