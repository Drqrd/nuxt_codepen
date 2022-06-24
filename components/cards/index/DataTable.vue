<template>
    <CustomCard
        :title-icon-wrapper="{
            'position': 'relative',
            'class': 'blue--text'
        }"
        :title-wrapper="{
            'class': 'flex-grow-1 ml-2'
        }"
        :tooltip-container="{
            'left': true
        }"
    >
        <template #title-content>Evaluation</template>
        <template #title-icon-content>mdi-file-table-box</template>
        <template #text-content>
            <CustomDataTable
                :table="{
                    'dense': true,
                    'hide-default-footer': true,
                    'class': 'elevation-1',
                    'style': 'flex-grow: 1',
                    
                }"
                :headers="$data.headers"
                :items="tableData"
                
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
    },

    data: () => {
        return {
            'maxWidth': 100,
            'headers': [
                { 'text': 'Index',               'value': 'index',               'width': 85,  'align': 'start',  'sortable': true, 'sort-icon':'mdi-sort-up' },
                { 'text': 'Audio Time',          'value': 'audio_time',          'width': 113, 'align': 'center', 'sortable': true },
                { 'text': 'Section',             'value': 'section',             'width': 100, 'align': 'center', 'sortable': true },
                { 'text': 'Scores',              'value': 'scores',              'width': 100, 'align': 'center', 'sortable': true },
                { 'text': 'Call Stats Category', 'value': 'call_stats_category', 'width': 165, 'align': 'center', 'sortable': true },
                { 'text': 'Input',               'value': 'input',               'width': 120, 'align': 'center', 'sortable': true },
                { 'text': 'Output',              'value': 'output',              'width': 100, 'align': 'center', 'sortable': true },
            ],
            'headerFilter': [
                'index', 'audio_time', 'section', 'scores', 'call_stats_category', 'input', 'output'
            ]
        }
    },

    computed: {
        /*
        headers() {
            const headerTitles = this.headerFilter.map((header) => 
                header.split('_')
                .map((wordInHeader) => wordInHeader[0].toUpperCase() + wordInHeader.substring(1,wordInHeader.length))
                .join(' ')
            );

            return headerTitles.map( (title) => {
                const o = {
                    'text': title,
                    'value': title.toLowerCase().replaceAll(' ', '_'),
                    'width': `${this.$data.maxWidth}px`,
                    'align': title == 'index' ? 'start' : 'center',
                    'sortable': true
                };
                return o;
            })
        },
        */

        tableData() {
            return this.obj.scores
            .map( (score) => Object.entries(score)
            .filter( (entry) => this.$data.headerFilter.includes(entry[0])))
            .map( (items) => items.reduce((a,v) => ({...a, [v[0]] : v[1]}),{}))
        }
    },
}
</script>

<style scoped lang="scss">
.icon-absolute {
    background-color: red;
}
</style>