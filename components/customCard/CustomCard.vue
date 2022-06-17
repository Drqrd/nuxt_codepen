<template>
    <v-card
        elevation="4"
        height="100%"
        v-bind="card"
    >
        <CustomCardTitle v-if="!$isEmptySlot('title-value') || !$isEmptySlot('title-icon')"
            :wrapper="titleWrapper"
            :icon="icon"
            :content="titleContent"
        >
            <template #value><slot name ='title-value'></slot></template>
            <template #icon><slot name='title-icon'></slot></template>
        </CustomCardTitle>
        
        <v-divider v-if="!$isEmptySlot('title-value') || !$isEmptySlot('title-icon')" 
            v-bind="divider"
        />

        <CustomCardText
            :wrapper="textWrapper"
            :content="textContent"
        >
            <template #content><slot name='text-content'></slot></template>
        </CustomCardText>

        <CustomTooltip v-if="!$isEmptySlot('tooltip-content')"
            :icon-value="tooltipIconValue"
            :icon="tooltipIcon"

            :wrapper="tooltipWrapper"
            :content="tooltipContent"
        >
            <template #icon v-if="!$isEmptySlot('tooltip-icon')"><slot name='tooltip-icon'></slot></template>
            <template #icon v-else>{{tooltipIconValue}}</template>
            <template #content><slot name='tooltip-content'></slot></template>
        </CustomTooltip>
    </v-card>   
</template>

<script>
import CustomCardTitle from "~/components/customCard/CustomCardTitle.vue"
import CustomCardText from "~/components/customCard/CustomCardText.vue"
import CustomTooltip from "~/components/tooltips/CustomTooltip.vue"

export default {
    name: 'CustomCard',
    
    components: {
        CustomCardTitle,
        CustomCardText,
        CustomTooltip
    },

    props: {
        card: {
            type: Object,
        },
        titleWrapper: {
            type: Object,
        },
        icon: {
            type: Object,
            default: () => {
                return {
                    'size': 'x-large',
                    'style': 'position: absolute; left: 0px',
                    'class': 'pl-4 blue--text'
                }
            }
        },
        titleContent: {
            type: Object,
        },
        divider: {
            type: Object,
            default: () => {
                return {
                    'class':'mx-2'
                }
            }
        },
        textValue: {
            type: Array,
            default: null,
        },
        textWrapper: {
            type: Object,
        },
        textContent: {
            type: Object,
        },
        tooltipWrapper: {
            type: Object,
        },
        tooltipIconValue: {
            type: String,
            default:'mdi-help-circle'
        },
        tooltipIcon: {
            type: Object,
            default: () => {
                return {
                    'size': 'x-small',
                    'color': 'blue',
                    'style': 'position: absolute; top:0px; right: 0px',
                    'class': 'pt-4 pr-4'
                }
            }
        },
        tooltipContent: {
            type: Object,
        }
    },
}
</script>
