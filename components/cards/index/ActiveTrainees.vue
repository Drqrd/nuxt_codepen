<template>
    <CustomCard
        :card="{
            'class':'d-flex flex-column'
        }" 
        :title-container="{
            'class':'d-flex text-subtitle-2'
        }"
        :title-wrapper="{
            'class':'text-center flex-grow-1'
        }"
        :title-icon-wrapper="{
            'position': 'relative',
            'class':'blue--text'
        }"
        :text-container="{
            'class':'d-flex flex-column flex-grow-1 pa-8'
        }"
        :tooltip-container="{
            'right': true
        }"
    >
        <template #title-content>Active Trainees</template>
        <template #title-icon-content>mdi-headset</template>
        <template #text-content>
            <v-row>
                <v-col class="text-container__name">
                    Total
                </v-col>
                <v-spacer/>
                <v-col class="text-container__number">
                    17
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-container__name">
                    With Pending Scenarios
                </v-col>
                <v-spacer/>
                <v-col class="text-container__number">
                    15
                </v-col>
            </v-row>
        </template>
        <template #tooltip-content>Active Trainees</template>
    </CustomCard>
</template>

<script>

import CustomCard from '~/components/customCard/CustomCard.vue'

export default {
    name: 'ActiveTrainees',
    components: {
        CustomCard
    }
}
</script>

<style scoped lang="scss">

.row {
    align-items: center;
}

.text-container{
    &__name {
        font-size: small;
        line-height: normal;
    }
    &__number {
        font-size:x-large;
        color:black;
    }
}
</style>