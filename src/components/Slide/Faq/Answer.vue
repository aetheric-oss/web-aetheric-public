<template>
    <ContentRenderer :value="parsedMarkdown" />
</template>

<script setup>
import markdownParser from '@nuxt/content/transformers/markdown';

const props = defineProps({
    id: Number,
    answer: String
});

const parsedMarkdown = await markdownParser.parse(props.id, props.answer);
</script>
