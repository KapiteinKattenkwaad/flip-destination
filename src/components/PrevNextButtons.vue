<script setup lang="ts">
import { useDestination } from '../composables/useDestination';
import { ref } from "vue"

const { placeholder, search } = defineProps<{
    placeholder: string;
    search: string;
}>();

const { fetchDestinations } = useDestination();

const newPageNumber = ref(1)

const fetchPrevious: () => void = () => {
    newPageNumber.value--
    fetchDestinations(placeholder ?? search, newPageNumber.value)
}

const fetchNext: () => void = () => {
    newPageNumber.value++
    fetchDestinations(placeholder ?? search, newPageNumber.value)
}
</script>

<template>
    <div class="d-flex justify-content-center row gx-3 py-3" >
        <button @click="fetchPrevious" :disabled="newPageNumber.value < 2" type="button"
            class="btn btn-primary">Prev</button>


        <button @click="fetchNext" type="button" class="btn btn-primary">
            Next
        </button>
    </div>
</template>

<style scoped>
button {
    width: auto;
    margin-inline: 1rem;
}
</style>