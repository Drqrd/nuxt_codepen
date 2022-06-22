<template>
    <CustomCard
        :title-container="{
            'class': 'd-flex justify-center'
        }"
    >

        <template #title-content>{{(obj['caller_profile'] || '')}}</template>
        <template #title-icon-content>mdi-account</template>

        <template #text-content>
            <v-row v-for="item in [
                $formatDate(obj.date_simulated),
                $formatPercentage(obj.call_score),
                'This is a test string to play with white space and word break',
                1,2,3,4,5,6,
            ]" :key="item"

            class="ma-auto"
            >
                <v-col class="align-center">{{item}}</v-col>
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