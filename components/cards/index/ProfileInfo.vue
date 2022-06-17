<template>
    <CustomCard
        :card="{
            'class': 'd-flex flex-column'
        }"

        :title-wrapper="{
            'class': 'd-flex justify-center'
        }"

        :text-wrapper="{
            'class': 'd-flex flex-column align-center flex-grow-1'
        }" 
        :text-content="{
            'class': 'my-auto'
        }"
        
        :tooltip-wrapper="{
            'left': true,
        }"
    >

        <template #title-value>{{(obj['caller_profile'] || '')}}</template>
        <template #title-icon>mdi-account</template>

        <template #text-content>
            <div v-for="item in [
                $formatDate(obj.date_simulated),
                $formatPercentage(obj.call_score)
            ]" :key="item"
                class="ma-auto"
            >
                {{item}}
            </div>
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