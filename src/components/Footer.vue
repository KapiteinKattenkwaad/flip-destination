<script setup lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="d-flex align-items-center text-center">
        <div class="row w-100">
            <h4 class="col">
                Solution by Max
            </h4>
            <h4 class="col">
                © {{ currentYear }}
            </h4>
        </div>
    </footer>
</template>

<style scoped>

footer {
    background-color: var(--blue);
    color: var(--white);
    min-height: 180px;
}

</style>