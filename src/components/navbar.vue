<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark sticky-top px-2 px-sm-3 px-xxl-5"
    >
        <div class="container">
            <a class="navbar-brand" href="/">
                <img
                    src="/img/logo.png"
                    height="60px"
                    width="auto"
                    alt="Logo"
                />
            </a>
            <div
                class="d-flex flex-grow-1 order-1 order-lg-2 justify-content-center justify-content-md-end"
            >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse text-center"
                    id="navbarNav"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                aria-current="page"
                                to="/"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/features"
                                >Features</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/industries"
                                >Industries</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/docs"
                                >Docs</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about-us"
                                >About us</router-link
                            >
                        </li>
                    </ul>
                </div>
                <router-link
                    to="/1On1"
                    class="btn btn-primary"
                    style="margin-right: 20px"
                    >Get a 1-on-1</router-link
                >
                <router-link to="/contact" class="btn btn-outline-primary"> Get in touch </router-link>
            </div>
        </div>
    </nav>
</template>
