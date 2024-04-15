<template>
    <div
        class="container-fluid px-2 px-sm-3 px-xxl-5 pt-3 pb-3 bg-gradient-img text-center text-light"
    >
        <h1>Docs</h1>
        <h5>Let's get to the tech side of Aetheric.</h5>
        <br />
        <br />
        <br />
    </div>

    <SlideInfrastructure class="pb-3 pt-3 pt-lg-5 pb-lg-5" />
    <SlideFaq class="" />

    <div class="container-fluid">
        <div class="container pt-5 text-center">
            <h2>
                Use our hosted services or a private solution
            </h2>
            <p class="m-auto" style="max-width: 600px">
                We offer a range of services to help you get started with Aetheric.
                One of the options is to use our primary network (<b>Realm</b>), where we take care of
                the infrastructure and maintenance. Another option is to deploy a
                private solution for your fleets with our support.
            </p>
            <br>
            <div class="d-flex flex-wrap justify-content-center gap-2">
                <div class="tag fs-6">Microservices</div>
                <div class="tag fs-6">Scalable</div>
                <div class="tag fs-6">High Safety Protocol</div>
                <div class="tag fs-6">API Connection</div>
            </div>
            <br>
            <img
                src="/img/aetheric-interfaces.png"
                alt="Aetheric tech structure"
                style="max-width: 65%; height: auto"
            />
        </div>
    </div>
    <div class="container py-5 gap-2 d-flex flex-wrap flex-lg-nowrap">
        <div class="p-4 bg-light rounded">
            <h3>Embracing the power of open source</h3>
            <p>
                Embracing open-source code for transparency, public audit,
                collaboration, and innovation.
            </p>
            <p>We offer benefits to early adopters and new partners.</p>
            <a
                class="btn btn-outline-primary mb-3 mt-1"
                href="https://github.com/aetheric-oss"
                target="_blank"
                role="button"
                >View our Github</a
            >
        </div>
        <BlockGetInTouch />
    </div>
</template>
