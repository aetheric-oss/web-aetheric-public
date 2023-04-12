
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2 px-sm-3 px-xxl-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="logo">logo</div>
            </a>
            <div class="d-flex flex-grow-1 order-1 order-lg-2 justify-content-center justify-content-md-end">
                <ContentInterestFormLink class="btn btn-info">Request a meeting</ContentInterestFormLink>
            </div>
        </div>
    </nav>

    <header class="container-fluid px-2 px-sm-3 px-xxl-5 py-2">
        <div class="d-flex justify-content-center flex-wrap text-center">
            <p><i><strong>FlyArrow.io</strong></i> is a project of the <strong>Arrow DAO</strong>, a global
                organization building community owned aerial solutions.</p>
            <div class="px-1"><a href="https://www.arrowair.com" target="_blank">Visit the DAO website</a></div>
        </div>
    </header>

    <SlideBanner />

    <SlideFlightTypes class="mb-3 mb-lg-5" />

    <SlideDiscover class="mb-3 mb-lg-5" />

    <SlideInfrastructure class="mb-3 mb-lg-5" />

<!--
    <SlideConops class="mb-3 mb-lg-5" />
        -->

    <SlideTeam />

    <SlideFaq class="mb-3 mb-lg-5" />

    <SlideExplore class="mb-3 mb-lg-5" />

    <SlideCTA class="mb-3 mb-lg-5" />
</template>
