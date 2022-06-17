<template>
    <CustomCard
        :card="{
            'class': 'd-flex flex-column'
        }"
        :icon="{
            'position': 'relative',
            'class': 'blue--text'
        }"
        :title-content="{
            'class': 'flex-grow-1 ml-2'
        }"

        :text-wrapper="{
            'class':'flex-grow-1'
        }"

        :tooltip-wrapper="{
            'left': true
        }"
    >
        <template #title-value>Evaluation</template>
        <template #title-icon>mdi-file-table-box</template>
        <template #text-content>
            <CustomDataTable 
                :table="{
                    'headerData': obj.scores.map( (score) => Object.entries(score).filter( (entry) => headerFilter.includes(entry[0])))
                }"
            >
            </CustomDataTable>
        </template>
        <template #tooltip-content>This is a Data Table</template>
    </CustomCard>
</template>

<script>

import CustomCard from '~/components/customCard/CustomCard'
import CustomDataTable from '~/components/CustomDataTable'

export default {
    name: 'DataTable',

    components: {
        CustomCard,
        CustomDataTable
    },

    props: {
        obj: {
            type: Object,
            default: null
        },
        headerFilter: {
            type: Array,
            default: () => {
                return ['Index','Audio Time','Section','Score','Feedback','Input','Output']
            }
        } 
    },
}
</script>

