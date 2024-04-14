<template>
    <a href="/">
        {{ text }}
    </a>
</template>
<script setup>
    const props = defineProps({
        text: String,
    });
</script>
