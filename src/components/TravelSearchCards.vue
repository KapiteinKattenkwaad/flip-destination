<script setup lang="ts">
import type { Destination } from './../types/Destination';
import { computed } from 'vue';
import TravelSearchCard from './TravelSearchCard.vue';

const { destinations, loading, error } = defineProps<{
    destinations: Destination[];
    loading: boolean;
    error: string | null;
}>();

const sortedDestinations = computed(() => {
    return [...destinations].sort((a, b) => a.id - b.id);
});

console.log({ destinations })


</script>

<template>
    <p v-if="loading">Loading...</p>

    <p v-if="error">Uh oh, there was an error: {{ error }}</p>

    <p v-if="destinations.length < 1">
        We couldn't find any images that matched your search term.
    </p>

    <div v-else>
        <ul class="row gx-3 gy-2 align-items-center justify-content-center">
            <li class="col-auto" v-for="desti in sortedDestinations" :key="desti.id">
                <TravelSearchCard :destination="desti" />
            </li>
        </ul>
    </div>
</template>

<style scoped>

li {
    list-style: none;
}

</style>