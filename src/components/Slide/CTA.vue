<template>
    <div
        id="cta"
        class="container-fluid container-xl px-2 px-sm-3 px-xxl-5 text-light"
    >
        <div class="d-flex flex-row bg-image rounded">
            <div class="col-6 contact-img align-self-center">
                <img
                    class="img-fluid"
                    src="/img/Untitled-2.png"
                    alt="contact image"
                />
            </div>
            <div class="col-6 py-5 mb-5">
                <h3>Start a conversation with us</h3>
                <p>
                    Let's explore your use case and how we can help you reach
                    your goals
                </p>
                <div class="btn btn-secondary">Request a meeting</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #cta {
        .bg-image {
            background-color: rgb(var(--bs-primary-rgb));
            background: var(--arrow-bg-gradient-bottom-left-md),
                var(--arrow-bg-gradient-top-right-md), var(--bs-primary);
            max-height: 400px;
        }

        @media (min-width: 992px) {
            .bg-image {
                margin-top: 8vw;
            }

            .contact-img {
                margin-top: -20%;
            }
        }

        @media (min-width: 1200px) {
            .bg-image {
                background: var(--arrow-bg-gradient-bottom-left-xl),
                    var(--arrow-bg-gradient-top-right-xl), var(--bs-primary);
            }
        }
    }
</style>
