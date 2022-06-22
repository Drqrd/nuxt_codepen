<template>
    <v-card-text 
        v-bind="container"
    >
        <slot name='content'></slot>
    </v-card-text>
</template>

<script>
export default {
    name: 'CustomCardText',
    props: {
        container: {
            type: Object
        },
    }
}
</script>