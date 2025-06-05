<script setup lang="ts">
import type { Destination } from './../types/Destination';
import { computed } from 'vue';

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
        <li v-for="desti in sortedDestinations" :key="desti.id">
            {{ desti.id }} ({{ desti.alt }})
        </li>
    </div>

    <article class="card text-bg-dark">
        <img src="..." class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>

    </article>
</template>

<style scoped></style>