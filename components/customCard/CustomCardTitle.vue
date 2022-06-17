<template>
    <v-card-title
        v-bind="wrapper"
        style="height: 48px;"
    >
    <CustomIcon v-if="!$isEmptySlot('icon')"
        v-bind="icon"
    >
        <slot name='icon'></slot>
    </CustomIcon>
    <div
        v-bind="content"
    >
        <slot name='value'></slot>
    </div>
    </v-card-title>
</template>

<script>

import CustomIcon from '~/components/CustomIcon.vue'

export default {
    name: 'CustomCardTitle',

    components: {
        CustomIcon,
    },

    props: {
        wrapper: {
            type: Object
        },
        icon: {
            type: Object
        },
        content: {
            type:Object
        },
    }
}
</script>