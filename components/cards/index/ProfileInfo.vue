<template>
    <CustomCard
        :card="{
            'class': 'd-flex flex-column fill-height',
        }"

        :title-container="{
            'class': 'd-flex justify-center'
        }"

        :text-container="{
            'class': 'd-flex flex-column align-center flex-grow-1',
        }" 
        
        :tooltip-container="{
            'left': true,
        }"
    >

        <template #title-content>{{(obj['caller_profile'] || '')}}</template>
        <template #title-icon-content>mdi-account</template>

        <template #text-content>
            <v-row v-for="item in [
                $formatDate(obj.date_simulated),
                $formatPercentage(obj.call_score),
                'This is a test string to play with white space and word break',
            ]" :key="item"

            class="ma-auto"
            >
                <v-col>{{item}}</v-col>
            </v-row>
        </template>
        
        <template #tooltip-content>Client Information</template>
    </CustomCard>
</template>

<script>
import CustomCard from "~/components/customCard/CustomCard.vue"

export default {
    name: 'ProfileInfo',
    components: {
        CustomCard,
    },

    props: {
        obj: {
            type: Object,
            default: null,
        },
    },
}
</script>