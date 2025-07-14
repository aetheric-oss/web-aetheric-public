<script setup>
import { Icon } from "@iconify/vue";
</script>

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
                        An open source AAM ecosystem for flight planning and VTOL asset management, tailored for
                        U-space.
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

                    <a id="footer-mailus" href="mailto:info@aetheric.nl"
                        ><Icon style="font-size: 20px" icon="ph:envelope-simple-bold"></Icon> info@aetheric.nl</a
                    >
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
                    <br />
                    <div id="footer-icon-bar">
                        <a href="https://github.com/aetheric-oss" target="_blank">
                            <Icon class="footer-icon" icon="hugeicons:github-01" />
                        </a>
                        <a href="https://www.linkedin.com/company/aetheric-bv" target="_blank">
                            <Icon class="footer-icon" icon="hugeicons:linkedin-02" />
                        </a>
                        <a href="https://bsky.app/profile/aetheric-oss.bsky.social" target="_blank">
                            <Icon class="footer-icon" icon="hugeicons:bluesky" />
                        </a>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </div>
    <footer class="container-fluid py-2 bg-dark text-light">
        <div class="container-xl">
            <div class="row">
                <div class="col-12">© Copyright 2023 - 2025 • Aetheric BV • KVK 93258798</div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.row {
    text-align: center;
    justify-items: center;
}

#footer-mailus {
    display: inline;
    text-decoration: none;
    text-transform: none;
    justify-items: center;
    align-items: center;
}

#footer-icon-bar .footer-icon {
    font-size: 42px;
    color: #fff;
    margin-left: 10px;
}
</style>
