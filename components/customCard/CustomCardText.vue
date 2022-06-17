<template>
    <v-card-text 
            v-bind="wrapper"
        >
        <slot name='content'
            v-bind="content">
        </slot>
    </v-card-text>
</template>

<script>
export default {
    name: 'CustomCardText',
    props: {
        wrapper: {
            type: Object
        },
        content: {
            type: Object
        },
        
    }
}
</script>