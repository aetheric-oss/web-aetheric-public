<template>
    <div class="container-fluid bg-gradient-img2">
        <div class="container-xl pt-5 pb-5 px-1 px-sm-3 px-xxl-5 text-light">
            <div class="row justify-content-center">
                <div class="col-6 text-center pb-5 pt-5">
                    <img
                        src="/img/logo-aetheric.webp"
                        alt="Aetheric Logo white"
                        style="max-width: 400px; width: 100%"
                    /><br />
                    <br />
                    <h5>
                        An open source AAM ecosystem for flight planning and
                        VTOL asset management, tailored for U-space.
                    </h5>
                </div>
            </div>
            <div class="row pb-5 pt-5">
                <div class="col-12 col-sm-6 col-md-4">
                    <h4>Address & contact</h4>
                    Lepelaar 6 A<br />
                    1628 CZ Hoorn<br />
                    Netherlands, Europe<br />

                    <br />
                    <a href="mailto:info@aetheric.nl">info@aetheric.nl</a>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <h4>About us</h4>
                    <div class="vstack" gap-1>
                        <router-link class="nav-link" to="/features">Features</router-link>
                        <router-link class="nav-link" to="/industries">Industries</router-link>
                        <router-link class="nav-link" to="/docs">Docs</router-link>
                        <router-link class="nav-link" to="/about-us">About us</router-link>
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <h4>Find us</h4>
                    <a href="https://github.com/aetheric-oss" target="_blank"
                        >Visit our Github</a
                    ><br />
                </div>
            </div>
        </div>
    </div>
    <footer
        class="container-fluid py-2 bg-dark text-light"
    >
        <div class="container-xl">
            <div class="row">
                <div class="col-12">
                    © Copyright 2023 - 2024 • Aetheric • kvk 93258798
                </div>
            </div>
        </div>
    </footer>
</template>
