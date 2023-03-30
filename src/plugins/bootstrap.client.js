import {Modal, Collapse, Accordion, Offcanvas} from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', {
      Modal, Collapse, Accordion, Offcanvas
    })
})
