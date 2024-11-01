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

function toggleActiveClass(
    linkSelector,
    containerSelector,
    otherContainerSelector,
    btnSelector
) {
    const link = document.querySelector(linkSelector)
    const container = document.querySelector(containerSelector)
    const otherContainer = document.querySelector(otherContainerSelector)
    const registrarseBtn = document.querySelector(btnSelector)

    if (link) {
        link.addEventListener('click', () => {
            container.classList.toggle('active')
            otherContainer.classList.remove('active')

            if (
                container.classList.contains('active') ||
                otherContainer.classList.contains('active')
            ) {
                registrarseBtn.classList.add('desactivated')
            } else {
                registrarseBtn.classList.remove('desactivated')
            }
        })
    }
}

toggleActiveClass(
    '.plans-link-oro',
    '.plan__price-table-oro',
    '.plan__price-table-platino',
    '.registrarse-gratuito'
)
toggleActiveClass(
    '.plans-link-platino',
    '.plan__price-table-platino',
    '.plan__price-table-oro',
    '.registrarse-gratuito'
)

function actualizarTotalFormulario(selectorFormulario) {
    const formulario = document.querySelector(selectorFormulario)

    if (formulario) {
        const radios = formulario.querySelectorAll('input[type="radio"]')
        const total = formulario.querySelector('.total')

        radios.forEach((radio) => {
            radio.addEventListener('change', () => {
                const valor = radio.value
                total.querySelector('span').innerHTML = `${valor}`
            })
        })
    }
}

actualizarTotalFormulario('.plan__price-table-oro')
actualizarTotalFormulario('.plan__price-table-platino')
