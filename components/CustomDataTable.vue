<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="d-flex flex-column"
        style="height:1px"
        v-bind="table"
        :custom-sort="customSort"
        fixed-header
        disable-pagination
    >
    <!--
        <template #header="{ props: {headers} }">
            <tr>
                <th v-for="header in headers" :key="header.value" 
                    class="px-4"
                    :style="{
                        'width':header.width+'px', 
                        'min-width':header.width+'px', 
                        'border-bottom':'thin solid rgba(0, 0, 0, 0.12)',
                        'height': '32px',
                        'text-align': header.align == 'start' ? 'left': 'center',
                    }"
                >
                    {{ header.text }}
                    <v-icon 
                        small
                        class="d-flex"
                        style="position:absolute; right:auto; width:18px"
                    >
                        mdi-arrow-up
                    </v-icon>
                </th>
            </tr>
        </template>
    -->
        <template #body="{items}">
            <tbody>
                <tr v-for="item in items" :key="item.audio_time">
                    <td v-for="header in headers" :key="header.name">
                        <v-tooltip v-if="header.value == 'scores'"
                            right
                        >   
                            <template #activator="{on, attrs}">
                                <span
                                    v-bind="[attrs]"
                                    v-on="on"
                                >
                                    ...
                                </span>
                            </template>
                            <span style="white-space: pre;">{{tableValue(item, header.value)}}</span>
                        </v-tooltip>

                        <v-tooltip v-else
                            right
                            disabled
                        >
                            <template #activator="{on, attrs}">
                                <span 
                                    v-bind="[attrs]"
                                    v-on="on"
                                ></span>
                            </template>
                            <span style="white-space: pre;">{{header.value == 'audio_time' ? $formatTime(item[header.value]) : item[header.value]}}</span>
                        </v-tooltip>
                        <span v-if="header.value != 'scores'" ref="cells">{{header.value == 'audio_time' ? $formatTime(item[header.value]) : item[header.value]}}</span>
                    </td>
                </tr>
            </tbody>
        </template>
        <span id="ruler">asdlkjhasd</span>
    </v-data-table>
</template>

<script>

import {formatTime} from '~/plugins/formatTime.js'

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
    },

    methods: {
        tableValue(i, h) {
            return `Current Score: ${i[h].curr_score}\nResponse Confidence: ${i[h].response_confidence}\nSTT Confidence: ${i[h].stt_confidence}\n`                      
        },

        customSort(items, index, isDesc) {
            items.sort((a,b) => {
                if (index[0] === 'index') {
                    let aa = a.split('');
                    let bb = a.split('');
                    if (aa[0] - bb[0] != 0) {
                        return isDesc ? bb[0] - aa[0] : aa[0] - bb[0];
                    } 
                    else {
                        return isDesc ? bb[1] - aa[1] : aa[1] - bb[1];
                    }
                }
                else if (index[0] === 'call_stats_category') {
                    const idFilter = ['Correct', 'Incorrect', 'None', 'N/a']
                    return isDesc ? idFilter.indexOf(b) - idFilter.indexOf(a) : idFilter.indexOf(a) - idFilter.indexOf(b);
                }
            })

            return items;
        },
    },

    mounted: function() {
        for(let i of this.$refs.cells) {
            if (i.getClientRects().length > 1) {
                i.innerText ='...'
                
            }
            console.log(i.innerText, i.offsetHeight, i)
        }
    }
}
</script>

<style scoped lang="scss">
    tr td:not(:first-child) {
        text-align: center;
        padding-right: 32.2px !important;
    }
    .v-data-table-header__icon {
        font-size: 10px !important;
    }
</style>

