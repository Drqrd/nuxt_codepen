<template>
    <v-card-text
        class="d-flex flex-column flex-grow-1 overflow-auto"
        style="height:1px"
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