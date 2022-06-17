<template>
    <v-data-table 
        v-bind="table"
    >
    <slot></slot>
    {{$log(table.headerData)}}
    </v-data-table>
</template>

<script>
export default {
    name: 'CustomDataTable',
    props: {
        table: {
            type: Object
        }
    },
    methods: {
        getHeaders() {
            
        }
    }
}
</script>