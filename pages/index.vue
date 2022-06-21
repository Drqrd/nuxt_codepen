<template>
  <v-container fluid class="d-flex flex-column" style="height: 100%">
    <v-row class="fill-height mt-0 mx-0">
      <v-col xl="3" lg="3">
        <ProfileInfo :obj="example"/>
      </v-col>
      <v-col class="d-flex flex-column">
        <v-row>
          <v-col>
            <CustomCard/> 
          </v-col>
        </v-row>
        <v-row class="fill-height d-flex flex-row">
          <v-col xl="3" lg="3">
            <ActiveTrainees/>
          </v-col>
          <v-col>
            <CustomCard/>
          </v-col>
        </v-row>
      </v-col>  
    </v-row>
    <v-row class="mb-0 mx-0" style="min-height:50%">
      <v-col xl="8" lg="8">
        <DataTable :obj="example"/>
      </v-col>
      <v-col>
        <CustomCard/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomCard from "~/components/customCard/CustomCard.vue"
import ProfileInfo from "~/components/cards/index/ProfileInfo.vue"
import DataTable from "~/components/cards/index/DataTable.vue"
import ActiveTrainees from "~/components/cards/index/ActiveTrainees.vue"

import example from "~/assets/example.js"

export default {
  name: 'IndexPage',

  components: {
    CustomCard,
    ProfileInfo,
    DataTable,
    ActiveTrainees
  },

    data() {
    return {
      example: example,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      largerViewportDimension: 'width'
    }
  },

  mounted() {
    window.addEventListener('resize', this.getWindowDimensions)
  },

  unmounted() {
    window.removeEventListener('resize', this.getWindowDimensions)
  },

  methods: {

//-------------------------------------------------- Object Property Manipulation --------------------------------------------------//

    // Returns a specific property of an object. If it doesn't exist, returns null.
    getProperty(object, property) {
      for(let p in object) {
        if (p == property) {
          return object[p];
        }
      }
      return null;
    },

//-------------------------------------------------- Object Manipulation --------------------------------------------------//

    // Iterates through the properties of an object and returns a string with property values seperated by delineator.
    stringifyObject(object, delineator) {
      return Object.keys(object).reduce((prev,key) => prev + delineator + String(object[key]));
    },
//-------------------------------------------------- Window --------------------------------------------------//

    // Updates variables related to window dimensions on resizing.
    getWindowDimensions() {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
      this.largerViewportDimension = this.windowWidth > this.windowHeight ? 'width' : 'height'
    },
  }
}
</script>