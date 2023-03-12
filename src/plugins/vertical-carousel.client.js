import {
    onLoad
} from "#imports";

export default () => {
    onLoad(() => {
        // get our carousel node
        let carousel = document.querySelector('.discover .carousel');
        carousel.onwheel = scrollCarousel;
        let scrollDirection = null;
        let curEntry = null;
        let observerCanTrigger = true;
        let intervalId = null;
        let curMarginTop = parseInt(getComputedStyle(carousel).marginTop) || 0;
        let newMarginTop = parseInt(getComputedStyle(carousel).marginTop) || 0;
        let scrollSpeed = 3;

        // scroll callback
        function scrollCarousel(event) {
            event.preventDefault();

            if (event.deltaY < 0) {
                scrollDirection = 'up';
            } else {
                scrollDirection = 'down';
            }

            curMarginTop = parseInt(getComputedStyle(carousel).marginTop) || 0;
            newMarginTop = curMarginTop - parseInt(event.deltaY); // Chrome returns a float here -.-

            // Animate margin change
            animateMarginChange();
        }

        function animateMarginChange() {
            let margin = curMarginTop;
            clearInterval(intervalId);
            if (curMarginTop > newMarginTop) {
                intervalId = setInterval(marginDown, 1);
            } else {
                intervalId = setInterval(marginUp, 1);
            }

            function marginUp() {
                if (margin == newMarginTop) {
                    clearInterval(intervalId);
                } else {
                    if (newMarginTop - margin >= scrollSpeed) {
                        margin += scrollSpeed;
                    } else {
                        margin += (newMarginTop - margin);
                    }
                    carousel.style.marginTop = margin + 'px';
                }
            }

            function marginDown() {
                if (margin == newMarginTop) {
                    clearInterval(intervalId);
                } else {
                    if (margin - newMarginTop >= scrollSpeed) {
                        margin -= scrollSpeed;
                    } else {
                        margin -= (margin - newMarginTop);
                    }
                    carousel.style.marginTop = margin + 'px';
                }
            }
        }

        // callback is called on intersection change
        function onIntersection(entries, opts) {
            // make sure we can't trigger ourselves
            if (observerCanTrigger) {
                curMarginTop = parseInt(getComputedStyle(carousel).marginTop) || 0;
                let targetMarginTop = curMarginTop;
                let difference = newMarginTop - curMarginTop;

                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.85) {
                        clearInterval(intervalId);
                        observerCanTrigger = false;
                        if (entry.target.parentNode.lastElementChild === entry.target && scrollDirection == 'down') {
                            let cols = entry.target.offsetParent.children;
                            for (let col of cols) {
                                col.appendChild(col.firstElementChild);
                                targetMarginTop = curMarginTop + col.firstElementChild.scrollHeight;
                            }
                        }
                        if (entry.target.parentNode.firstElementChild === entry.target && scrollDirection == 'up') {
                            let cols = entry.target.offsetParent.children;
                            for (let col of cols) {
                                col.insertBefore(col.lastElementChild, col.firstElementChild);
                                targetMarginTop = curMarginTop - col.firstElementChild.scrollHeight;
                            }
                        }
                        carousel.style.marginTop = targetMarginTop + 'px';
                        curMarginTop = parseInt(getComputedStyle(carousel).marginTop) || 0;
                        newMarginTop = difference + targetMarginTop;
                    }
                })
                observerCanTrigger = true;
                // Continue animation if needed
                animateMarginChange();
            }
        }

        // define an observer instance
        let observer = new IntersectionObserver(onIntersection, {
            root: document.querySelector('.discover > div:nth-child(1)'),
            threshold: [0.9], // percentage of target's visible area. Triggers "onIntersection"
            rootMargin: '19px',
        })

        // Use the observer to observe an element
        carousel.querySelectorAll('.discovercard').forEach((i) => {
            if (i) {
                observer.observe(i);
            }
        });
    });
}
