<template>
    <div
        class="container-fluid px-2 px-sm-3 px-xxl-5 pt-3 pt-lg-5 pb-0 text-light bg-gradient"
    >
        <div class="row mx-xl-2">
            <div class="col-8 col-sm-9 col-md-7 col-xl-6">
                <h1>The future of AAM is</h1>
                <p class="fs-3">
                    Simplify the process of managing and monetizing your assets.
                    We handle scheduling, routing, airspace management, and compliance so you can easily connect communities and reach more customers.
                </p>
                <div class="col-12 col-sm-7 col-xl-9">
                    <ContentInterestFormLink
                        class="col me-2 my-1 btn btn-secondary"
                        >Request a meeting</ContentInterestFormLink
                    >
                </div>
            </div>
            <div class="col-4 col-sm-3 col-md-5 col-xl-6">
                <img src="/img/drone.png" width="650px" height="auto" alt="" />
            </div>
        </div>

        <div
            class="m-auto pt-3 pb-0 col-12 col-xl-9 col-xxl-6 position-relative"
        >
            <img
                class="w-100"
                src="/img/flyarrow-software.png"
                alt="FlyArrow software"
            />
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
