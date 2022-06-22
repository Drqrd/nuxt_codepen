<template>
  <v-app class="overflow-hidden">
    <v-app-bar
      color="#1c4e9e"
      elevation="0"
      dark
      flat
      app
      dense
      hide-on-scroll
      scroll-target="#scroll-target"
    >
    </v-app-bar>
    <v-main id="scroll-target" class="overflow-auto" style="height:100vh; scrollbar-width:auto">
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
* {
  background-color: darkgray;
}
</style>