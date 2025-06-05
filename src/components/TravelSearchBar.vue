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
    <form class="mb-4 text-center">
        <label for="exampleInputEmail1" class="visually-hidden">Search for your ideal travel destination:</label>
        <input type="text" id="exampleInputEmail1" aria-describedby="search your travel destination"
            :value="props.search" @input="onInput" placeholder="e.g.: Dallas">
    </form>
</template>

<style scoped>
     input {
        height: 35px;
        min-width: 30vw;
        max-width: 300px;
        border-radius: 5px;
        border: 1px solid var(--borderGrey);
        margin-top: calc(-55px / 2);
    }
</style>