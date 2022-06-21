<template>
    <CustomCard
        :card="{
            'class':'d-flex flex-column'
        }" 
        :title-wrapper="{
            'class':'d-flex text-subtitle-2'
        }"
        :title-content="{
            'class':'text-center flex-grow-1'
        }"
        :icon="{
            'position': 'relative',
            'class':'blue--text'
        }"
        :text-wrapper="{
            'class':'d-flex flex-wrap flex-grow-1'
        }"
    >
        <template #title-value>Active Trainees</template>
        <template #title-icon>mdi-headset</template>
        <template #text-content>
            <div class="text-container--name"><div class="text">Total</div></div>
            <div class="text-container--number"><div class="text">17</div></div>
            <div class="text-container--name"><div class="text">With<br>Pending<br>Scenarios</div></div>
            <div class="text-container--number"><div class="text">15</div></div>
        </template>
    </CustomCard>
</template>

<script>

import CustomCard from '~/components/customCard/CustomCard.vue'

export default {
    name: 'ActiveTrainees',
    components: {
        CustomCard
    }
}
</script>

<style scoped>
.text-container--name {
    width: 50%;
    font-size: small;
    display: flex;
}

.text-container--number {
    width: 50%;
    font-size:larger;
    text-align: center;
    display: flex;
}

.text {
    width: 100%;
    
    margin:auto;
}
</style>