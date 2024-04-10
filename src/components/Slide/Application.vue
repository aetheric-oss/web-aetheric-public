<template>
    <div
        id="application"
        class="container-fluid container-xl px-2 px-sm-3 px-xxl-5 application"
    >
        <div class="row">
            <div class="col-12 text-center">
                <h2>Two applications, various ways to use it</h2>
                <p>
                    Our two applications let you operate, manage and use VTOL
                    aircraft and vertiports for a variety of vertiports.
                </p>
            </div>
        </div>
        <div class="row pt-0 pt-md-5 logistics">
            <div class="col-12 col-md-6 py-3 py-md-2">
                <h3>Cargo and freight air transportation</h3>
                <p>
                    Our network provides smooth software to automate
                    flight-plans for in-house freight or public exploitation.
                </p>
                <ul>
                    <li>
                        Let users schedule cargo flights, both small and large orders
                    </li>
                    <li>
                        Decide on repurpose of deadhead flights for your private flights
                    </li>
                    <li>
                        Use our extensive schedular to make entire AI Generated flight plans
                    </li>
                    <li>
                        Automate your regular cargo shipment with our enterprise subscription
                    </li>
                </ul>
            </div>
            <div
                class="col-12 col-md-6 rounded bg-image align-self-center"
            ></div>
        </div>
        <div class="row pt-0 pt-md-5 lifestyle">
            <div class="col-12 col-md-6 py-3 py-md-2">
                <h3>Rideshare</h3>
                <p>
                    Midrange passenger travel of the future will be VTOL. Our
                    network provides A/B travel exploitation and is prepared to
                    have on-demand flight.
                </p>
                <ul>
                    <li>
                        One end-user app thats included in all our subscription models
                    </li>
                    <li>
                        Restrict vehicles and vertiports to only be used by certain users
                    </li>
                    <li>
                        Manage your vertiports and vehicles and dispatch them on the network
                    </li>
                    <li>Automate flight sales and get paid per month</li>
                </ul>
            </div>
            <div
                class="col-12 col-md-6 rounded bg-image align-self-center"
            ></div>
        </div>
        <div class="row pt-0 pt-md-5 assets">
            <div class="col-12 col-md-6 py-3 py-md-2">
                <h3>Manage your assets</h3>
                <p>
                    We have an extensive management system where you can manage
                    any of your aircraft, vertiports and user (restrictions).
                </p>
                <ul>
                    <li>
                        Let our system do calculate the most efficient and safe
                        flight plans
                    </li>
                    <li>Setup user roles and restrictions</li>
                    <li>Manage your vertiports, including use rights</li>
                    <li>
                        Manage your Vtol fleet and set rules on how they can be
                        used
                    </li>
                </ul>
            </div>
            <div
                class="col-12 col-md-6 rounded bg-image align-self-center"
            ></div>
        </div>
    </div>
</template>

<style lang="scss">
    #application {
        .bg-image {
            min-height: 15vw;
        }

        .lifestyle .bg-image {
            background-image: url("/img/flyarrow-lifestyle.jpg");
        }

        .assets .bg-image {
            background-image: url("/img/flyarrow-assets.jpg");
        }

        .logistics .bg-image {
            background-image: url("/img/flyarrow-logistics.jpg");
        }
    }
</style>
