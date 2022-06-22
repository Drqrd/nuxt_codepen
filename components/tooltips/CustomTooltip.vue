<template>
    <v-tooltip    
        v-bind="container"
    >
        <template #activator="{on, attrs}">
            <v-icon
                v-bind="[iconWrapper,attrs]"
                v-on="on"
            >
                <slot name='icon-content'></slot>
            </v-icon>
        </template>
        <span v-bind="tooltipWrapper">
            <slot name='content'></slot>
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
        iconWrapper: {
            type: Object,
        },
        tooltipWrapper: {
            type: Object
        }
    }
}
</script>