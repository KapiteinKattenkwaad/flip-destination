<script setup lang="ts">
import type { Destination } from '../types/Destination';

const { destination } = defineProps<{
    destination: Destination;
}>();


</script>

<template>


    <article class="card text-bg-dark mb-3">
        <img :src=destination?.src.medium class="card-img" :alt=destination.alt>
        <div class="card-img-overlay">
            <h5 v-if="destination.photographer" class="card-title">
                <a :href="destination.photographer_url" target="_blank">
                    {{ destination.photographer }}
                </a>
            </h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>

    </article>
</template>

<style scoped>

a {
    color: white;
}

</style>