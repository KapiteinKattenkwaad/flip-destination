<script setup lang="ts">
import type { Destination } from '../types/Destination';
import { computed } from 'vue';

const { destination } = defineProps<{
    destination: Destination;
}>();

const aspectRatio = computed(() => `${destination.width / destination.height}`);
</script>

<template>
    <a :href="destination.url" target="_blank">
        <article class="card text-bg-dark mb-3">
            <img :src=destination?.src.medium class="card-img" :alt=destination.alt :style="{ aspectRatio }">
            <div class="c-card-overlay card-img-overlay">
                <h5 v-if="destination.photographer" class="card-title">
                    <a :href="destination.photographer_url" target="_blank">
                        {{ destination.photographer }}
                    </a>
                </h5>
                <p class="card-text">
                    {{ destination.alt }}
                </p>
            </div>
        </article>
    </a>
</template>

<style scoped>
a {
    color: white;
}

.c-card-overlay {
    text-align: right;
    top: unset;
}

.card-img {
    max-width: 40vw;
}
</style>