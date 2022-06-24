<template>
    <v-data-table
        :custom-sort="customSort"
        v-bind="table"
        class="d-flex flex-column overflow-auto"
        fixed-header
        disable-pagination
    >
        <template #body="{items}">
            <tbody class="overflow-y-scroll scroll-bar-auto" style="height:1px">
                <tr v-for="item in items" :key="item.audio_time">
                    <td v-for="header in headers" :key="header">
                        <v-tooltip v-if="checkTruncate(item[header])"
                            right
                        >
                            <template #activator="{on, attrs}">
                                <button
                                    v-bind="[attrs]"
                                    v-on="on"
                                >
                                    ...
                                </button>
                            </template>
                            <span>{{header == 'audio_time' ? $formatTime(item[header]) : item[header]}}</span>
                        </v-tooltip>
                        <span v-else>{{header == 'audio_time' ? $formatTime(item[header]) : item[header]}}</span>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-data-table>
</template>

<script>

export default {
    name: 'CustomDataTable',
    components: {
    },

    props: {
        table: {
            type: Object,
        },
        items: {
            type: Array,
        },
        headers: {
            type: Array,
        },
        sortFunc: {
            type: Function
        },
        maxWidth: {
            type: Number,
            default: 50
        }
    },
    data: () => {
        return {
            tableCellId : 1
        }
    },

    methods: {
        checkTruncate(val) {
            const o = document.createElement('span');
            o.innerText = val;

            return o.innerHTML.length > 25;
        },

        customSort(items, index, isDesc) {
        return items.sort((a,b) => {
            return a - b;
        })
      }  
    },

}
</script>

