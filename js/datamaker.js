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

function abrirPopup(popupSelector, btnSelector) {
    const popupDiv = document.querySelector(popupSelector)
    const buttons = document.querySelectorAll(btnSelector)

    const popupClose = popupDiv.querySelector('.popup-close')

    popupClose.addEventListener('click', () => {
        popupDiv.classList.remove('active')
    })

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            popupDiv.classList.add('active')
        })
    })
}

abrirPopup('.form-popup', '.form-popup-btn')
abrirPopup('.video-popup', '.video-popup-btn')

document.addEventListener('DOMContentLoaded', function () {
    // Función para actualizar los valores según el valor seleccionado
    function updateValues(selectedValue) {
        const values = {
            100: {
                minutos: 400,
                horas: '6,67',
                salario: '73.043',
                plan: '40.000',
                ahorro: '33.043',
            },
            300: {
                minutos: 1200,
                horas: '20,00',
                salario: '219.130',
                plan: '114.000',
                ahorro: '105.130',
            },
            500: {
                minutos: 2000,
                horas: '33,33',
                salario: '365.217',
                plan: '180.000',
                ahorro: '185.217',
            },
            1000: {
                minutos: 4000,
                horas: '66,67',
                salario: '730.435',
                plan: '340.000',
                ahorro: '390.435',
            },
            3000: {
                minutos: 12000,
                horas: '200,00',
                salario: '2.191.304',
                plan: '960.000',
                ahorro: '1.231.304',
            },
            10000: {
                minutos: 40000,
                horas: '666,67',
                salario: '7.304.348',
                plan: '3.000.000',
                ahorro: '4.304.348',
            },
            20000: {
                minutos: 80000,
                horas: '1.333,33',
                salario: '14.608.696',
                plan: '4.800.000',
                ahorro: '9.808.696',
            },
            50000: {
                minutos: 200000,
                horas: '3.333,33',
                salario: '36.521.739',
                plan: '10.000.000',
                ahorro: '26.521.739',
            },
        }

        const selectedData = values[selectedValue]
        document.querySelector('.total-minutos').textContent =
            selectedData.minutos
        document.querySelector('.horas').textContent = selectedData.horas
        document.querySelector('.total-salario').textContent =
            selectedData.salario
        document.querySelector('.plan-tabla').textContent = selectedData.plan
        document.querySelector('.ahorro-tabla').textContent =
            selectedData.ahorro
    }

    // Configuración inicial para cargar los valores de 100
    updateValues('100')

    // Agregar evento para actualizar valores cuando cambie el select
    document
        .getElementById('numero-facturas')
        .addEventListener('change', function () {
            updateValues(this.value)
        })
})
