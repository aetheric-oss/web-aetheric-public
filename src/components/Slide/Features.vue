<template>
    <div class="container pt-5 pb-2">
        <p class="fw-bold">Meet all our features</p>
    </div>
    <div class="container pb-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
            <div v-for="(item, index) in features.items"
                class="col d-flex align-self-stretch"
            >
            <div class="bg-light rounded p-3">
                <h5 class="my-0">{{ item.title }}</h5>
                <p class="fs-5">
                    {{ item.content }}
                </p>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const features = await queryContent("en/features").findOne();
</script>
