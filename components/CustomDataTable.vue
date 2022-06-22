<template>
    <v-data-table 
        v-bind="table"
    >
    </v-data-table>
</template>

<script>
export default {
    name: 'CustomDataTable',
    props: {
        table: {
            type: Object
        },
    },
}
</script>

