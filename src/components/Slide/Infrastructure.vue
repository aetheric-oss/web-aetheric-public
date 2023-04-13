<template>
    <div ref="slider" id="infrastructure" class="container-fluid overflow-hidden user-select-none clearfix px-5"
        v-on:mousemove="move" v-on:mousedown="startDragging" v-on:mouseup="stopDragging" v-on:mouseleave="stopDragging">
        <div class="container pb-5">
            <div class="row text-center">
                <h2>{{ infrastructure.banner.title }}</h2>
            </div>
        </div>
        <div class="row float-start flex-lg-nowrap">
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded bg-white">
                    <div class="card-body">
                        <h2 class="card-title">{{ infrastructure.title }}</h2>
                        <div class="card-text">{{ infrastructure.subtitle }}</div>
                    </div>
                </div>
            </div>
            <div v-for="(item, index) in infrastructure.items" class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            {{ item.tag }}
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{{ index + 1 }}. {{ item.title }}</h3>
                        <div class="card-text" v-html="item.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#infrastructure {
    .card {
        min-width: 26vw;
    }
}
</style>

<script setup lang="ts">
const infrastructure = await queryContent('infrastructure').findOne();

const slider = ref(null);
const mouseDown = ref(false);
const startX = ref(null);
const scrollLeft = ref(null);

function startDragging(e) {
    mouseDown.value = true;
    startX.value = e.pageX - slider.value.offsetLeft;
    scrollLeft.value = slider.value.scrollLeft;
};
function stopDragging(e) {
    mouseDown.value = false;
};
function move(e) {
    e.preventDefault();
    if (!mouseDown.value) {
        return;
    }
    const x = e.pageX - slider.value.offsetLeft;
    const scroll = x - startX.value;
    slider.value.scrollLeft = scrollLeft.value - scroll;
}
</script>
