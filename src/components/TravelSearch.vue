<script setup lang="ts">
import { useDestination } from '../composables/useDestination';
import TravelSearchBar from './TravelSearchBar.vue';
import TravelSearchCards from './TravelSearchCards.vue';

import { ref } from 'vue';

const { destinations, loading, error, fetchDestinations } = useDestination();
const search = ref('');
const PLACEHOLDER = 'Dallas';

fetchDestinations(PLACEHOLDER)

console.log({ destinations })
</script>

<template>
    <TravelSearchBar />
    <TravelSearchCards />
</template>

<style scoped></style>