<script setup lang="ts">
const props = defineProps<{
    search: string
}>();

const emit = defineEmits<{
    'search-input': [value: string]
}>();

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('search-input', target.value);
};
</script>

<template>
    <form class="mb-3">
        <label for="exampleInputEmail1" class="visually-hidden">Search for your ideal travel destination:</label>
        <input type="text" id="exampleInputEmail1" aria-describedby="search your travel destination"
            :value="props.search" @input="onInput" placeholder="e.g.: Dallas">
    </form>
</template>

<style scoped></style>