
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2 px-sm-3 px-xxl-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="logo">logo</div>
            </a>
            <button class="navbar-toggler order-0 order-sm-2 ms-0 ms-md-3" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-3 order-lg-1" id="navbarNav">
                <ul class="navbar-nav">
                    <li><a href="#" class="nav-link px-2">Features</a></li>
                    <li><a href="#" class="nav-link px-2">Pricing</a></li>
                    <li><a href="#" class="nav-link px-2">Industries</a></li>
                </ul>
            </div>
            <div class="d-flex flex-grow-1 order-1 order-lg-2 justify-content-center justify-content-md-end">
                <!--<button type="button" class="btn btn-outline-light me-2">Login</button>-->
                <button type="button" class="btn btn-info">Request a meeting</button>
            </div>
        </div>
    </nav>

    <header class="container-fluid px-2 px-sm-3 px-xxl-5 py-2">
        <div class="d-flex justify-content-center flex-wrap text-center">
            <p><i><strong>FlyArrow.io</strong></i> is a project of the <strong>ARROW DAO</strong>, a non-profit
                decentralized organization building community owned aerial solutions.</p>
            <div class="px-1"><a href="https://www.arrowair.com" target="_blank">Visit the DAO website</a></div>
        </div>
    </header>

    <div id="banner" class="container-fluid px-2 px-sm-3 px-xxl-5 pt-3 pt-lg-5 pb-0 bg-main text-light">
        <div class="row mx-xl-2">
            <div class="col-8 col-sm-9 col-md-7 col-xl-6">
                <h1>Managed airspace for an open VTOL marketplace</h1>
            </div>
        </div>
        <div class="row mx-xl-2">
            <div class="col-12 col-sm-7 col-xl-9">
                <p class="fs-3">Unlock the potential of your VTOL assets with FlyArrow.io's community-grown vertiport
                    network. With our dynamic scheduling, automated air traffic control, and digital compliance mechanisms,
                    you can easily connect urban and rural populations and simplify the process of managing your assets.</p>
            </div>
            <div class="col-12 col-sm-7 col-xl-9">
                <button type="button" class="col me-2 my-1 btn btn-secondary">Request a meeting</button>
                <button type="button" class="col my-1 btn btn-info">View features</button>
            </div>
        </div>
        <div class="m-auto pt-3 pb-0 col-12 col-xl-9 col-xxl-6 position-relative">
            <img class="w-100" src="/img/flyarrow-software.png" alt="FlyArrow software">
        </div>
    </div>

    <div id="flight-types" class="container-fluid container-xl px-2 px-sm-3 px-xxl-5 pb-3 pb-lg-5">
        <div class="row row-cols-1 row-cols-lg-3">
            <div class="col mb-2 mb-lg-0">
                <div class="card rounded h-100">
                    <div class="card-header bg-light d-flex align-items-center">
                        <img class="card-img" src="/img/Icon-vtolcargo.svg" alt="">
                        <div class="flex-grow-1 text-end">
                            <span class="tag">
                                Logistics
                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title"> Cargo <span>flights</span></h3>
                        <p>Revolutionize your middle-mile logistics with FlyArrow.io - easily schedule on-demand deliveries
                            to public and private vertiports, register and manage cargo aircraft, and enjoy cargo deliveries
                            measured in minutes with automated job assignments and scheduling.</p>
                    </div>
                </div>
            </div>
            <div class="col mb-2 mb-lg-0">
                <div class="card rounded h-100">
                    <div class="card-header bg-light d-flex align-items-center">
                        <img class="card-img" src="/img/Icon-vtolperson.svg" alt="">
                        <div class="flex-grow-1 text-end">
                            <span class="tag">
                                Lifestyle
                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Rideshare <span>network</span></h3>
                        <p>Join the next great leap in human mobility with FlyArrow.io's vertiport network - an economic
                            gateway connecting urban and rural populations via air taxis for rapid and reliable
                            transportation. Be an early adopter and book your air taxi with FlyArrow.io.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card rounded h-100">
                    <div class="card-header bg-light d-flex align-items-center">
                        <img class="card-img" src="/img/Icon-padlock.svg" alt="">
                        <div class="flex-grow-1 text-end">
                            <span class="tag">
                                Assets
                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Hangar <span>asset manager</span></h3>
                        <p>Easily manage your assets with FlyArrow.io's one-stop-shop 'Hangar'. Register, group, delegate,
                            and maintain with ease. Analyze asset performance and manage vertipads, aircraft, and pricing
                            models with our simple user interface.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="discover" class="container-fluid px-2 px-sm-3 px-xxl-5 text-light discover d-flex">
        <!--<div class="container-fluid discover text-light d-flex flex-wrap h-100 p-0 px-1 px-sm-3 px-xl-4 px-xxl-5">-->
        <div class="d-flex order-1 order-xl-0 col-12 col-xl-7 position-relative">
            <div class="carousel d-none d-xl-flex position-absolute w-100">
                <div class="col-12 col-xl-4 px-1 px-xxl-2">
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-pink">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard tourism mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#tourism-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Tourism </h3>
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
                        data-bs-toggle="offcanvas" data-bs-target="#agriculture-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Agriculture </h3>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 px-1 px-xxl-2">
                    <div class="card discovercard farming mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#farming-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Farming</h3>
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-yellow">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard humanitarian mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#humanitarian-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Humanitarian</h3>
                        </div>
                    </div>
                    <div class="card discovercard mb-2 mb-xxl-3 p-2 rounded text-center bg-salmon">
                        <div class="card-body mt-4">
                        </div>
                    </div>
                    <div class="card discovercard infrastructure mb-2 mb-xxl-3 bg-image p-2 rounded text-center"
                        data-bs-toggle="offcanvas" data-bs-target="#infrastructure-info">
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
                        data-bs-toggle="offcanvas" data-bs-target="#supply-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Supply </h3>
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
                        data-bs-toggle="offcanvas" data-bs-target="#medical-info">
                        <div class="card-body mt-4">
                            <h3 class="card-title"> Medical </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex order-0 order-xl-1 px-xl-2 py-3 py-sm-3 py-xxl-5 h-100 col-12 col-xl-5 position-relative">
            <div class="ms-xl-2 ms-xxl-5 mb-xxl-5">
                <h2>Discover our solutions for various industries</h2>
                <p>Discover endless possibilities for monetization with FlyArrow.io. <strong>Save time and
                        resources</strong> by avoiding the complexity of developing your own VTOL system, <strong>expand
                        your business model</strong> to include the VTOL supply chain, and streamline your cargo
                    distribution for a <strong>future-forward, efficient</strong> solution.</p>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#tourism-info">Tourism</button>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#farming-info">Farming</button>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#supply-info">Supply</button>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#humanitarian-info">Humanitarian</button>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#agriculture-info">Agriculture</button>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#medical-info">Medical</button>
                <button type="button" class="btn btn-info me-1 mb-0" data-bs-toggle="offcanvas"
                    data-bs-target="#infrastructure-info">Infrastructure</button>
            </div>

            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="farming-info"
                tabindex="-1" aria-labelledby="farming-info-header">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="farming-info-header">Farming</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Farming can be challenging enough without having to overcome bad infrastructure and dependance on
                        transportation. Say goodbye to conventional road transport and HELLO to using or owning your own
                        flight assets.</p>
                    <ul>
                        <li>Transport cargo fast to new locations</li>
                        <li>Get better cattle insemination quality through fast and on demand delivery methods</li>
                    </ul>
                    <div class="infobox">
                        <img src="/img/Icon-padlock.svg" alt="Information" width="25px" height="25px">
                        <h4>Need help setting up ARROW for your farm business?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="humanitarian-info"
                tabindex="-1" aria-labelledby="humanitarian-info-header">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="humanitarian-info-header">Humanitarian</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Monetize with expanding on efficient air infrastructure in areas where regular infrastructure is slow
                        and expensive to maintain. Get ahead by deploying your own fleet and/or vertiports.</p>
                    <ul>
                        <li>Deploy your fleet really quickly and start monetizing this month</li>
                        <li>Reach your target audience through a free for them to use application</li>
                    </ul>
                    <div class="infobox">
                        <h4>Need help setting up ARROW for your aircraft or vertiport(s)?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="tourism-info"
                tabindex="-1" aria-labelledby="tourism-info-header">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="tourism-info-header">Tourism</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Monetize with expanding on efficient air infrastructure in area's where regular infrastructure is
                        slow and expensive to maintain. Get ahead by deploying your own fleet and/or vertiports.</p>
                    <ul>
                        <li>Deploy your fleet really quickly and start monetizing this month</li>
                        <li>Reach your target audience through a free for them to use application</li>
                    </ul>
                    <div class="infobox">
                        <h4>Need help setting up ARROW for your aircraft or vertiport(s)?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="agriculture-info"
                tabindex="-1" aria-labelledby="agriculture-info-header">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="agriculture-info-header">Agriculture</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Monetize with expanding on efficient air infrastructure in area's where regular infrastructure is
                        slow and expensive to maintain. Get ahead by deploying your own fleet and/or vertiports.</p>
                    <ul>
                        <li>Deploy your fleet really quickly and start monetizing this month</li>
                        <li>Reach your target audience through a free for them to use application</li>
                    </ul>
                    <div class="infobox">
                        <h4>Need help setting up ARROW for your aircraft or vertiport(s)?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="supply-info"
                tabindex="-1" aria-labelledby="supply-info-header">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="supply-info-header">Supply</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Monetize with expanding on efficient air infrastructure in area's where regular infrastructure is
                        slow and expensive to maintain. Get ahead by deploying your own fleet and/or vertiports.</p>
                    <ul>
                        <li>Deploy your fleet really quickly and start monetizing this month</li>
                        <li>Reach your target audience through a free for them to use application</li>
                    </ul>
                    <div class="infobox">
                        <h4>Need help setting up ARROW for your aircraft or vertiport(s)?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="infrastructure-info"
                tabindex="-1" aria-labelledby="infrastructure-info-header">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="infrastructure-info-header">Infrastructure</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Monetize with expanding on efficient air infrastructure in area's where regular infrastructure is
                        slow and expensive to maintain. Get ahead by deploying your own fleet and/or vertiports.</p>
                    <ul>
                        <li>Deploy your fleet really quickly and start monetizing this month</li>
                        <li>Reach your target audience through a free for them to use application</li>
                    </ul>
                    <div class="infobox">
                        <h4>Need help setting up ARROW for your aircraft or vertiport(s)?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" id="medical-info"
                tabindex="-1" aria-labelledby="medical-info-header" aria-hidden="true">
                <div class="offcanvas-header d-block">
                    <button type="button" class="btn btn-link ps-0" data-bs-dismiss="offcanvas"
                        aria-label="Close">Back</button>
                    <h2 class="offcanvas-title" id="medical-info-header">Medical</h2>
                </div>
                <div class="offcanvas-body">
                    <p>Monetize with expanding on efficient air infrastructure in area's where regular infrastructure is
                        slow and expensive to maintain. Get ahead by deploying your own fleet and/or vertiports.</p>
                    <ul>
                        <li>Deploy your fleet really quickly and start monetizing this month</li>
                        <li>Reach your target audience through a free for them to use application</li>
                    </ul>
                    <div class="infobox">
                        <h4>Need help setting up ARROW for your aircraft or vertiport(s)?</h4>
                        <p>We are happy to show you the possibilities, create a strategy and connect you to partners to make
                            the onboarding process smooth for you. <a href="#" target="_blank">Book a call with us</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container p-5 pb-2 pb-lg-5">
        <div class="row text-center">
            <h2>Dynamic, rapid, point-to-point transit that flies above and beyond the competition</h2>
        </div>
    </div>

    <div id="infrastructure" class="container-fluid overflow-hidden user-select-none clearfix">
        <div class="row float-start flex-lg-nowrap">
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded bg-white">
                    <div class="card-body">
                        <h2 class="card-title"> How does this work? </h2>
                        <div class="card-text">We have a smart database structure, an ultra flexible server infrastructure,
                            and a handful of
                            solid data suppliers to get the right information to our frontend systems. Let's dive into these
                            elements.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            Database
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">1. Core network</h3>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus
                            efficitur, porta lacus ac,
                            pharetra nisl. Nulla non justo nec nibh rutrum ultrices sagittis in est.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            Database
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">2. Data &#38; service supplier</h3>
                        <div class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus efficitur, porta lacus
                            ac,
                            pharetra nisl. Nulla non justo nec nibh rutrum ultrices sagittis in est.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            Database
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">3. Cargo &#38; passenger flights scheduler</h3>
                        <div class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus efficitur, porta lacus
                            ac,
                            pharetra nisl. Nulla non justo nec nibh rutrum ultrices sagittis in est.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            Servers
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">4. Scalable data use</h3>
                        <div class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus efficitur, porta lacus
                            ac,
                            pharetra nisl. Nulla non justo nec nibh rutrum ultrices sagittis in est.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg mb-2 mb-lg-0">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            Applications
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">5. Flight booking application</h3>
                        <div class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus efficitur, porta lacus
                            ac,
                            pharetra nisl. Nulla non justo nec nibh rutrum ultrices sagittis in est.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="card rounded">
                    <div class="card-header bg-light">
                        <span class="tag">
                            Applications
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">6. Asset manager</h3>
                        <div class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus efficitur, porta lacus
                            ac,
                            pharetra nisl. Nulla non justo nec nibh rutrum ultrices sagittis in est.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="conops" class="container p-5 conops">
        <div class="row text-center">
            <div>
                <p>Want a more extensive read on our software structure?</p>
                <a href="#" class="btn btn-secondary">Download the CONOPS</a>
            </div>
        </div>
    </div>

    <div id="team" class="container-fluid py-5 about text-bg-primary">
        <div class="container px-4">
            <div class="row d-flex align-items-center">
                <div class="col-12 col-md-5 col-xl-3 p-2">
                    <img class="rounded-circle img-teamlead w-100" src="/img/photo-dummy.jpg" alt="FlyArrow team lead">
                </div>
                <div class="col-12 col-md-7 col-xl-9 ">
                    <p class="fs-6 fs-md-4 fw-semibold">
                        "VTOL cargo and passenger networks are the next economic gateway.
                        We'll be
                        able to forge new connections to rural communities without the financial and environmental costs of
                        traditional ground and fixed-wing infrastructure. The impact this will have on commuting, supply
                        chains, and humanitarian response can't be overstated."
                        <span class="fs-6 fw-normal fst-italic">- A.M. Smith, software and systems engineer for
                            FlyArrow.io</span>
                    </p>
                    <p>
                        FlyArrow.io is the innovative software development project of ARROW, a non-profit DAO dedicated to
                        promoting planet-friendly air-mobility as a fundamental human right.
                    </p>
                    <div class="btn btn-info ">Visit ARROW DAO</div>
                </div>
            </div>
        </div>
    </div>

    <div id="application" class="container-fluid container-xl px-2 px-sm-3 px-xxl-5 py-5 application">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Two applications, various ways to use it</h2>
                <p>
                    Our two applications let you operate, manage and use VTOL aircraft and vertiports for a variety of
                    vertiports.
                </p>
            </div>
        </div>
        <div class="row pt-0 pt-md-5 logistics">
            <div class="col-12 col-md-6 py-3 py-md-2">
                <h3>Cargo and freight air transportation</h3>
                <p>
                    Our network provides smooth software to automate flight-plans for in-house freight or public
                    exploitation.
                </p>
                <ul>
                    <li>Let users schedule cargo flights, both small and large orders</li>
                    <li>Decide on repurpose of deadhead flights for your private flights</li>
                    <li>Use our extensive schedular to make entire AI Generated flight plans</li>
                    <li>Automate your regular cargo shipment with our enterprise subscription</li>
                </ul>
            </div>
            <div class="col-12 col-md-6 rounded bg-image align-self-center">
            </div>
        </div>
        <div class="row pt-0 pt-md-5 lifestyle">
            <div class="col-12 col-md-6 py-3 py-md-2">
                <h3>Rideshare</h3>
                <p>
                    Midrange passenger travel of the future will be VTOL. Our network provides A/B travel exploitation and
                    is prepared to have on-demand flight.
                </p>
                <ul>
                    <li>One end-user app thats included in all our subscription models</li>
                    <li>Restrict vehicles and vertiports to only be used by certain users</li>
                    <li>Manage your vertiports and vehicles and dispatch them on the network</li>
                    <li>Automate flight sales and get paid per month</li>
                </ul>
            </div>
            <div class="col-12 col-md-6 rounded bg-image align-self-center">
            </div>
        </div>
        <div class="row pt-0 pt-md-5 assets">
            <div class="col-12 col-md-6 py-3 py-md-2">
                <h3>Manage your assets</h3>
                <p>
                    We have an extensive management system where you can manage any of your aircraft, vertiports and user
                    (restrictions).
                </p>
                <ul>
                    <li>Let our system do calculate the most efficient and safe flight plans</li>
                    <li>Setup user roles and restrictions</li>
                    <li>Manage your vertiports, including use rights </li>
                    <li>Manage your Vtol fleet and set rules on how they can be used</li>
                </ul>
            </div>
            <div class="col-12 col-md-6 rounded bg-image align-self-center">
            </div>
        </div>
    </div>

    <div id="faq" class="container-fluid py-5 faq bg-primary text-light">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center pb-3">
                    <h2> Frequently asked questions</h2>
                </div>
            </div>
            <div class="row" id="accordion-faq">
                <div class="col-6">
                    <div class="accordion accordion-flush">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-1">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="faq-content-1">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="faq-content-1" class="accordion-collapse collapse" aria-labelledby="faq-heading-1"
                                data-bs-parent="#accordion-faq">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                    body.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq-content-2" aria-expanded="false" aria-controls="faq-content-2">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="faq-content-2" class="accordion-collapse collapse" aria-labelledby="faq-heading-2"
                                data-bs-parent="#accordion-faq">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                    body. Let's imagine this being filled with some actual content.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq-content-3" aria-expanded="false" aria-controls="faq-content-3">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="faq-content-3" class="accordion-collapse collapse" aria-labelledby="faq-heading-3"
                                data-bs-parent="#accordion-faq">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                    body. Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of how this
                                    would look in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="accordion accordion-flush">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq-content-4" aria-expanded="false" aria-controls="faq-content-4">
                                    Accordion Item #4
                                </button>
                            </h2>
                            <div id="faq-content-4" class="accordion-collapse collapse" aria-labelledby="faq-heading-4"
                                data-bs-parent="#accordion-faq">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                    body.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-5">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq-content-5" aria-expanded="false" aria-controls="faq-content-5">
                                    Accordion Item #5
                                </button>
                            </h2>
                            <div id="faq-content-5" class="accordion-collapse collapse" aria-labelledby="faq-heading-5"
                                data-bs-parent="#accordion-faq">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                    body. Let's imagine this being filled with some actual content.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-6">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq-content-6" aria-expanded="false" aria-controls="faq-content-6">
                                    Accordion Item #6
                                </button>
                            </h2>
                            <div id="faq-content-6" class="accordion-collapse collapse" aria-labelledby="faq-heading-6"
                                data-bs-parent="#accordion-faq">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                    body. Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of how this
                                    would look in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="explore" class="container-fluid container-xl px-2 px-sm-3 px-xxl-5 py-5">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Let's explore what FlyArrow.io can do for you</h2>
                <p>You have made it this far and we are excited to get acquainted with you and your goals.</p>
            </div>
        </div>
    </div>

    <div id="cta" class="container-fluid container-xl px-2 px-sm-3 px-xxl-5 pb-5 text-light">
        <div class="d-flex flex-row bg-image rounded">
            <div class="col-6 contact-img align-self-center">
                <img class="img-fluid" src="/img/Untitled-2.png" alt="contact image">
            </div>
            <div class="col-6 py-5 mb-5">
                <h3> Plan a conversation with us</h3>
                <p>Let's explore your curiosity in our services and get you more familiar with what FlyArrow.io can do to
                    benefit your goals. </p>
                <div class="btn btn-secondary">Request a meeting</div>
            </div>
        </div>
    </div>
</template>
