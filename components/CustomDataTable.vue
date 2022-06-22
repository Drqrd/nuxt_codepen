<template>
    <v-data-table 
        v-bind="table"
    >
        <template #body="{items}">
        <tbody class="overflow-y-scroll scroll-bar-auto">
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
                        <span>{{item[header]}}</span>
                    </v-tooltip>
                    <span v-else>{{item[header]}}</span>
                </td>
            </tr>
        </tbody>
        </template>
    </v-data-table>
</template>

<script>
import CustomTextTooltip from '~/components/tooltips/CustomTextTooltip.vue'

export default {
    name: 'CustomDataTable',
    components: {
        CustomTextTooltip
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
        maxWidth: {
            type: Number,
            default: 50
        }
    },

    methods: {
        checkTruncate(val) {
            const o = document.createElement('span');
            o.innerText = val;
            console.log(o.innerHTML + ", " + o.innerHTML.length)

            return o.innerHTML.length > 25;
        }
    },

}
</script>

