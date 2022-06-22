<template>
    <v-card
        elevation="4"
        height="100%"
        v-bind="card"
    >
        <CustomCardTitle v-if="!$isEmptySlot('title-content') || !$isEmptySlot('title-icon-content')"
            :container="titleContainer"
            :icon-wrapper="titleIconWrapper"
            :title-wrapper="titleWrapper"
        >
            <template #icon-content><slot name='title-icon-content'></slot></template>
            <template #title-content><slot name ='title-content'></slot></template>
        </CustomCardTitle>
        
        <v-divider v-if="!$isEmptySlot('title-content') || !$isEmptySlot('title-icon-content')" 
            v-bind="divider"
        />

        <CustomCardText
            :container="textContainer"
        >
            <template #content><slot name='text-content'></slot></template>
        </CustomCardText>

        <CustomTooltip v-if="!$isEmptySlot('tooltip-content')"
            :container="tooltipContainer"
            :icon-wrapper="tooltipIconWrapper"
            :tooltip-wrapper="tooltipWrapper"
        >
            <template #icon-content v-if="!$isEmptySlot('tooltip-icon-content')"><slot name='tooltip-icon-content'></slot></template>
            <template #icon-content v-else>{{tooltipIconContent}}</template>
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
        titleContainer: {
            type: Object,
        },
        titleIconWrapper: {
            type: Object,
            default: () => {
                return {
                    'size': 'x-large',
                    'style': 'position: absolute; left: 0px',
                    'class': 'pl-4 blue--text'
                }
            }
        },
        titleWrapper: {
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
        textContainer: {
            type: Object,
        },
        tooltipContainer: {
            type: Object,
        },
        tooltipIconWrapper: {
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
        tooltipWrapper: {
            type: Object,
        },



        tooltipIconContent: {
            type: String,
            default:'mdi-help-circle'
        },
    },
}
</script>
