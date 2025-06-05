<script setup lang="ts">

</script>

<template>
    <header class="d-flex align-items-center text-center">
        <div class="row w-100">
            <h1 class="col">
                Country Photo Search
            </h1>
            <h2 class="col">
                <span class="c-flip">
                    FLIP
                </span>
            </h2>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--blue);
    color: var(--white);
    min-height: 180px;
}

.c-flip {
    display: inline-block;
    cursor: pointer;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform .5s ease-in;

    &:hover {
        transform: rotateX(180deg);
    }
}
</style>