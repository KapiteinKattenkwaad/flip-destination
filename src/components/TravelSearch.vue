<script setup lang="ts">
import { useDestination } from '../composables/useDestination';
import TravelSearchBar from './TravelSearchBar.vue';
import TravelSearchCards from './TravelSearchCards.vue';

import { ref } from 'vue';

const { destinations, loading, error, fetchDestinations } = useDestination();
const search = ref('');
const PLACEHOLDER = 'Dallas';

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

const onSearchInput = (value: string) => {
    search.value = value;

    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
        if (search.value.length >= 3) {
            console.log(search.value)
            fetchDestinations(search.value);
        }
    }, 500);
};

fetchDestinations(PLACEHOLDER)


</script>

<template>
    <TravelSearchBar :search="search" @search-input="onSearchInput" />
    <TravelSearchCards />
</template>

<style scoped></style>