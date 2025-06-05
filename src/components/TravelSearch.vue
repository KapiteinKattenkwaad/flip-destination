<script setup lang="ts">
import { useDestination } from '../composables/useDestination';
import TravelSearchBar from './TravelSearchBar.vue';
import TravelSearchCards from './TravelSearchCards.vue';
import PrevNextButtons from './PrevNextButtons.vue';

import { ref, computed } from 'vue';

const { destinations, loading, error, fetchDestinations } = useDestination();
const search = ref('');
const PLACEHOLDER = 'Dallas';

const destinationsArray = computed(() => destinations.value);

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

const onSearchInput = (value: string) => {
    search.value = value;

    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
        if (search.value.length >= 3) {
            fetchDestinations(search.value);
        }
    }, 500);
};

fetchDestinations(PLACEHOLDER);
</script>

<template>
    <main>
        <TravelSearchBar :search @search-input="onSearchInput" />
        <TravelSearchCards :destinations="destinationsArray" :loading :error />
        <PrevNextButtons :placeholder="PLACEHOLDER" :search />
    </main>
</template>

<style scoped>
    main {
        background-color: var(--background);
    }
</style>