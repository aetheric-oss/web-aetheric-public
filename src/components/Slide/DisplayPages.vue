<template>
    <div
        id="flight-types"
        class="container-fluid px-2 px-sm-3 px-xxl-5 text-center"
    >
        <h2>Discover our ecosystem</h2>
        <div class="row row-cols-1 row-cols-lg-4">
            <div
                v-for="(item, index) in flight_types.items"
                class="col mb-2 mb-lg-0"
            >
                <div class="card rounded h-100">
                    <div class="card-header bg-light d-flex align-items-center">
                        <img
                            class="card-img"
                            :src="'/img/' + item.icon"
                            alt=""
                        />
                        <div class="flex-grow-1 text-end">
                            <span class="tag">{{ item.tag }}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title" v-html="item.title"></h3>
                        {{ item.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #flight-types {
        .card-img {
            width: 40px;
            height: 40px;
        }
    }
</style>

<script setup>
    const flight_types = await queryContent("flight_types").findOne();
</script>
