<template>
    <div
        class="container-fluid px-2 px-sm-3 px-xxl-5 pt-3 pt-lg-5 pb-0 text-light bg-top-point"
    >
        <div class="container container-md-fluid">
        <div class="row mx-xl-2">
            <div class="col-12 col-sm-9 col-md-7 col-xl-6">
                <h1>The future of AAM is automated</h1>
                <p class="fs-3">
                    Simplify the process of managing and monetizing your assets.
                    We handle scheduling, routing, airspace management, and
                    compliance so you can easily connect communities and reach
                    more customers.
                </p>
                <nuxt-link
                    class="btn btn-primary mb-3 mt-1 me-1"
                    to="/1On1"
                    role="button"
                >
                    Schedule 1-on-1
                </nuxt-link>
                <nuxt-link
                    class="btn btn-outline-primary mb-3 mt-1"
                    href="/features/"
                    role="button"
                >
                    Features
                </nuxt-link>
            </div>
            <div class="col-12 col-sm-3 col-md-5 col-xl-6">
                <img src="/img/drone.png" width="650px" height="auto" alt="" />
            </div>
        </div>

        <div class="pt-md-5 pb-0 col-12 px-md-5 position-relative">
            <img
                class="w-100"
                src="/img/display-hangar.webp"
                alt="Aetheric software"
            />
        </div>
        </div>
    </div>
</template>

<style lang="scss">
    #banner {
        margin-bottom: 30vw;
        background-position: right center;
        background: var(--arrow-bg-gradient-bottom-left-md),
            var(--arrow-bg-gradient-top-left-md),
            var(--arrow-bg-gradient-top-right-md),
            url("/img/drone.png") var(--bs-primary) no-repeat 160% 15% / 65%;

        img {
            margin-bottom: -35%;
        }

        @media (min-width: 576px) {
            background: var(--arrow-bg-gradient-bottom-left-md),
                var(--arrow-bg-gradient-top-left-md),
                var(--arrow-bg-gradient-top-right-md),
                url("/img/drone.png") var(--bs-primary) no-repeat 180% 15% / 65%;
        }

        @media (min-width: 768px) {
            background: var(--arrow-bg-gradient-bottom-left-md),
                var(--arrow-bg-gradient-top-left-md),
                var(--arrow-bg-gradient-top-right-md),
                url("/img/drone.png") var(--bs-primary) no-repeat 150% 20% / 65%;
        }

        @media (min-width: 992px) {
        }

        @media (min-width: 1200px) {
            background: var(--arrow-bg-gradient-bottom-left-xl),
                var(--arrow-bg-gradient-top-left-md),
                var(--arrow-bg-gradient-top-right-xl),
                url("/img/drone.png") var(--bs-primary) no-repeat 90% 20% / 35%;
        }

        @media (min-width: 1400px) {
            margin-bottom: 15vw;
            background: var(--arrow-bg-gradient-bottom-left-xl),
                var(--arrow-bg-gradient-top-left-md),
                var(--arrow-bg-gradient-top-right-xl),
                url("/img/drone.png") var(--bs-primary) no-repeat 90% 20% / 35%;
        }
    }
</style>
