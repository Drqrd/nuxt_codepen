<template>
    <v-tooltip    
        v-bind="wrapper"
    >
        <template #activator="{on, attrs}">
            <v-icon
                v-bind="[icon,attrs]"
                v-on="on"
            >
                <slot name='icon'></slot>
            </v-icon>
        </template>
        <span>
            <slot name='content'></slot>
        </span>
    </v-tooltip>
</template>

<script>

import CustomIcon from '~/components/CustomIcon.vue'

export default {
    name: 'CustomTooltip',

    components: {
        CustomIcon, 
    },

    props: {
        wrapper: {
            type: Object
        },
        icon: {
            type: Object,
        },
        content: {
            type: Object
        }
    }
}
</script>