<template>
    <v-tooltip    
        v-bind="container"
    >
        <template #activator="{on, attrs}">
            <p
                v-bind="[textWrapper,attrs]"
                v-on="on"
            >
                <slot name='text-content' v-if="textContent == ''"></slot>
                <span v-else>{{textContent}}</span>
            </p>
        </template>
        <span v-bind="tooltipWrapper">
            <slot name='tooltip-content' v-if="tooltipContent == ''"></slot>
            <span v-else>{{tooltipContent}}</span>
        </span>
    </v-tooltip>
</template>

<script>
export default {
    name: 'CustomTooltip',

    props: {
        container: {
            type: Object
        },
        textWrapper: {
            type: Object,
        },
        tooltipWrapper: {
            type: Object
        },
        textContent: {
            type: String,
            default: ''
        },
        tooltipContent: {
            type: String,
            default: ''
        },
    }
}
</script>