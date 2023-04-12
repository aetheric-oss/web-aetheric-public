<template>
    <div id="discover" class="container-fluid px-2 px-sm-3 px-xxl-5 text-light discover d-flex">
        <div class="d-flex order-1 order-xl-0 col-12 col-xl-7 position-relative">
            <div ref="carousel" v-on:wheel="scrollCarousel" class="carousel d-none d-xl-flex position-absolute w-100">
                <div class="col-12 col-xl-4 px-1 px-xxl-2">
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-pink">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard rural-living mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#rural-living">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Rural living </h3>
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-indigo">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-purple">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard agriculture mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#agriculture">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Agriculture &amp; Livestock </h3>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 px-1 px-xxl-2">
                    <div class="card discovercard mb-2 mb-xxl-3 bg-image p-2 rounded text-center" data-bs-toggle="offcanvas"
                        data-bs-target="#parcel-delivery-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Parcel Delivery</h3>
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-yellow">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard humanitarian mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#humanitarian">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Humanitarian</h3>
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-salmon">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard infrastructure mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#infrastructure">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Infrastructure </h3>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 px-1 px-xxl-2">
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-magenta">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard supply mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#supply-chain">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Supply Chain </h3>
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-blue">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-orange">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard medical mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#medical-support">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Medical Support</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex order-0 order-xl-1 px-xl-2 py-3 py-sm-3 py-xxl-5 h-100 col-12 col-xl-5 position-relative">
            <div class="ms-xl-2 ms-xxl-5 mb-xxl-5">
                <h2>{{ discover.title }}</h2>
                <p>{{ discover.introduction }}</p>
                <button v-for="(item, index) in discover.items" type="button" class="btn btn-info me-1 mb-0"
                    data-bs-toggle="offcanvas" :data-bs-target="'#' + item.id">{{ item.title }}</button>
            </div>
            <div v-for="(item, index) in discover.items" class="offcanvas offcanvas-end" data-bs-backdrop="false"
                data-bs-scroll="true" :id="item.id" tabindex="-1" :aria-labelledby="item.id + '-info-header'">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" :id="item.id + '-info-header'">{{ item.title }}</h2>
                </div>
                <div class="offcanvas-body">
                    <div class="fs-5 fw-semibold">{{ item.subtitle }}</div>
                    <div v-html="item.content"></div>
                    <SlideDiscoverInfoBox />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#discover {
    background-color: var(--bs-body-color);
    color: var(--bs-body-bg);
    overflow-x: hidden;

    >div:nth-child(1) {
        overflow: hidden;
    }

    .carousel {
        margin-top: -400px;
    }

    .carousel>div:nth-child(1) {
        margin-top: -250px;
    }

    .carousel>div:nth-child(3) {
        margin-top: -350px;
    }

    .offcanvas {
        --bs-offcanvas-bg: var(--bs-black);
        --bs-offcanvas-color: var(--bs-white);
        position: fixed;
    }

    @media (min-width: 768px) {
        .offcanvas {
            --bs-offcanvas-border-width: 0;
            position: absolute;
        }
    }

    .offcanvas.show,
    .offcanvas.showing {
        width: 100%;
    }

    .offcanvas .offcanvas-header {
        padding-bottom: 0;
    }

    .offcanvas .offcanvas-body {
        padding-top: 0;
    }

    .discovercard {
        height: 400px !important;
    }

    .discovercard.bg-image {
        cursor: zoom-in;
    }

    .discovercard.tourism {
        background-image: url('/img/flyarrow-tourism.png')
    }

    .discovercard.agriculture {
        background-image: url('/img/flyarrow-agriculture.jpg')
    }

    .discovercard.farming {
        background-image: url('/img/flyarrow-farming.jpg')
    }

    .discovercard.infrastructure {
        background-image: url('/img/flyarrow-infrastructure.jpg')
    }

    .discovercard.humanitarian {
        background-image: url('/img/flyarrow-humanitarian.jpg')
    }

    .discovercard.supply {
        background-image: url('/img/flyarrow-supply.jpeg')
    }

    .discovercard.medical {
        background-image: url('/img/flyarrow-medicine.jpg')
    }
}
</style>

<script setup lang="ts">
const discover = await queryContent('discover').findOne();

const carousel = ref(null);
const scrollDirection = ref(null);
const curEntry = ref(null);
const observerCanTrigger = ref(true);
const intervalId = ref(null);
const curMarginTop = ref(0);
const newMarginTop = ref(0);
const scrollSpeed = 3;


function animateMarginChange() {
    let margin = curMarginTop.value;
    clearInterval(intervalId.value);
    if (curMarginTop.value > newMarginTop.value) {
        intervalId.value = setInterval(marginDown, 1);
    } else {
        intervalId.value = setInterval(marginUp, 1);
    }

    function marginUp() {
        if (margin == newMarginTop.value) {
            clearInterval(intervalId.value);
        } else {
            if (newMarginTop.value - margin >= scrollSpeed) {
                margin += scrollSpeed;
            } else {
                margin += (newMarginTop.value - margin);
            }
            carousel.value.style.marginTop = margin + 'px';
        }
    }

    function marginDown() {
        if (margin == newMarginTop.value) {
            clearInterval(intervalId.value);
        } else {
            if (margin - newMarginTop.value >= scrollSpeed) {
                margin -= scrollSpeed;
            } else {
                margin -= (margin - newMarginTop.value);
            }
            carousel.value.style.marginTop = margin + 'px';
        }
    }
}

// callback is called on intersection change
function onIntersection(entries, opts) {
    // make sure we can't trigger ourselves
    if (observerCanTrigger.value) {
        curMarginTop.value = parseInt(getComputedStyle(carousel.value).marginTop) || 0;
        let targetMarginTop = curMarginTop.value;
        let difference = newMarginTop.value - curMarginTop.value;

        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.85) {
                clearInterval(intervalId.value);
                observerCanTrigger.value = false;
                if (entry.target.parentNode.lastElementChild === entry.target && scrollDirection.value == 'down') {
                    let cols = entry.target.offsetParent.children;
                    for (let col of cols) {
                        col.appendChild(col.firstElementChild);
                        targetMarginTop = curMarginTop.value + col.firstElementChild.scrollHeight;
                    }
                }
                if (entry.target.parentNode.firstElementChild === entry.target && scrollDirection.value == 'up') {
                    let cols = entry.target.offsetParent.children;
                    for (let col of cols) {
                        col.insertBefore(col.lastElementChild, col.firstElementChild);
                        targetMarginTop = curMarginTop.value - col.firstElementChild.scrollHeight;
                    }
                }
                carousel.value.style.marginTop = targetMarginTop + 'px';
                curMarginTop.value = parseInt(getComputedStyle(carousel.value).marginTop) || 0;
                newMarginTop.value = difference + targetMarginTop;
            }
        })
        observerCanTrigger.value = true;
        // Continue animation if needed
        animateMarginChange();
    }
}

function scrollCarousel(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        scrollDirection.value = 'up';
    } else {
        scrollDirection.value = 'down';
    }

    curMarginTop.value = parseInt(getComputedStyle(carousel.value).marginTop) || 0;
    newMarginTop.value = curMarginTop.value - parseInt(e.deltaY); // Chrome returns a float here -.-

    // Animate margin change
    animateMarginChange();
}

onMounted(() => {
    curMarginTop.value = parseInt(getComputedStyle(carousel.value).marginTop) || 0;
    newMarginTop.value = parseInt(getComputedStyle(carousel.value).marginTop) || 0;

    // define an observer instance
    let observer = new IntersectionObserver(onIntersection, {
        root: document.querySelector('.discover > div:nth-child(1)'),
        threshold: [0.9], // percentage of target's visible area. Triggers "onIntersection"
        rootMargin: '19px',
    })

    // Use the observer to observe an element
    carousel.value.querySelectorAll('.discovercard').forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });
})
</script>
