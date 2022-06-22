<template>
    <v-card-title
        v-bind="container"
        style="height: 48px;"
    >
    <CustomIcon v-if="!$isEmptySlot('icon-content')"
        v-bind="iconWrapper"
    >
        <slot name='icon-content'></slot>
    </CustomIcon>
    <div
        v-bind="titleWrapper"
    >
        <slot name='title-content'></slot>
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
        container: {
            type: Object
        },
        iconWrapper: {
            type: Object
        },
        titleWrapper: {
            type:Object
        },
    }
}
</script>