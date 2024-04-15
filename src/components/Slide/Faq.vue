<template>
    <div
        id="faq"
        class="container-fluid py-3 py-lg-5 faq bg-dark text-light bg-print"
    >
        <div class="container">
            <div class="row">
                <div class="col-12 text-center pb-3">
                    <h2>Frequently asked questions</h2>
                </div>
            </div>
            <div class="row accordion accordion-flush" id="accordion-faq">
                <div class="col-12 col-md-6">
                    <template v-for="(item, index) in faq.items">
                        <div v-if="index % 2 === 0" class="accordion-item">
                            <h2
                                class="accordion-header"
                                :id="'faq-heading-' + index"
                            >
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    :data-bs-target="'#faq-content-' + index"
                                    aria-expanded="false"
                                    :aria-controls="'faq-content-' + index"
                                >
                                    {{ item.question }}
                                </button>
                            </h2>
                            <div
                                :id="'faq-content-' + index"
                                class="accordion-collapse collapse"
                                :aria-labelledby="'faq-heading-' + index"
                                data-bs-parent="#accordion-faq"
                            >
                                <SlideFaqAnswer
                                    class="accordion-body"
                                    :answer="item.answer"
                                    :id="index"
                                />
                            </div>
                        </div>
                    </template>
                </div>
                <div class="col-12 col-md-6">
                    <template v-for="(item, index) in faq.items">
                        <div v-if="index % 2 !== 0" class="accordion-item">
                            <h2
                                class="accordion-header"
                                :id="'faq-heading-' + index"
                            >
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    :data-bs-target="'#faq-content-' + index"
                                    aria-expanded="false"
                                    :aria-controls="'faq-content-' + index"
                                >
                                    {{ item.question }}
                                </button>
                            </h2>
                            <div
                                :id="'faq-content-' + index"
                                class="accordion-collapse collapse"
                                :aria-labelledby="'faq-heading-' + index"
                                data-bs-parent="#accordion-faq"
                            >
                                <SlideFaqAnswer
                                    class="accordion-body"
                                    :answer="item.answer"
                                    :id="index"
                                />
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const faq = await queryContent("en/faq").findOne();
</script>
