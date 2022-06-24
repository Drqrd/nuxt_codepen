<template>
    <CustomCard
    >
    <template #text-content>
        <v-row class="flex-grow-1">
            <v-col class="d-flex justify-center">
                <v-icon
                    style="font-size:56px;"

                    
                >
                    mdi-hospital
                </v-icon>
            </v-col>
            <v-col class="d-flex justify-center">
                <div class="flex-grow-1">

                </div>
            </v-col>
        </v-row>
        <v-row class="flex-grow-1">
            <v-col class="d-flex justify-center">

            </v-col>
            <v-col class="d-flex justify-center">

            </v-col>
        </v-row>
    </template>
    </CustomCard>
</template>

<script>
export default {
    name: 'AnimationExample',
    data: () => {
        return {
            iconWrapper: {
                'size': '40px',
                'position' : 'relative',
                'width' : '40px'
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '~/assets/animations.scss';
@import '~vuetify/src/styles/styles.sass';

.icon:hover {
    transform: rotate(360deg) 1s !important;
}

div:hover {
    background-color: map-get($amber, 'base');
}
</style>