;(function ($) {
    setTimeout(() => {
        $('.icons-data__carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            margin: 30,
            navText: [
                '<img src="./image/carousel-back.png">',
                '<img src="./image/carousel-next.png">',
            ],
            center: true,
            responsive: {
                0: {
                    items: 1,
                },
                780: {
                    items: 3,
                },
                1000: {
                    items: 3,
                },
            },
        })
    }, 500)
})(jQuery)
