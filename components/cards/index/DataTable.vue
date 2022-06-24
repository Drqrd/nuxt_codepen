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
                    'headers': headers,
                    'items': tableData,
                    'dense': true,
                    'hide-default-footer': true,
                    'class': 'align-center text-truncate text-overflow-ellipsis elevation-1',
                    'style': 'height:1px flex-grow: 1',
                    
                }"
                :data="tableData"
                :headers="headerFilter"
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
                return ['index','audio_time','section','score','call_stats_category','input','output']
            }
        },
    },

    data: () => {
        return {
            'maxWidth': 100
        }
    },

    computed: {
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

        tableData() {
            return this.obj.scores
            .map( (score) => Object.entries(score)
            .filter( (entry) => this.headerFilter.includes(entry[0])))
            .map( (items) => items.reduce((a,v) => ({...a, [v[0]] : v[1]}),{}))
        }
    },
}
</script>