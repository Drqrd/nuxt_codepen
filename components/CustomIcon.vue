<template>
    <v-icon
        v-bind="icon"
    >
        <slot></slot>
    </v-icon>
</template>

<script>
export default {
    name: 'CustomIcon',
    props: {
        icon: {
            type: Object
        }
    }
}
</script>