document.addEventListener('DOMContentLoaded', function() {
    const cardSwiper = new Swiper('.card', {
        spaceBetween: 100,
        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: '.card-next',
            prevEl: '.card-prev',
        },

        pagination: {
            bulletClass: 'card-bullet',
            bulletActiveClass: 'card-bullet-active',
            el: '.card-pagination',
            clickable: true,
        }
    })

    const reviewsSwiper = new Swiper('.reviews', {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 1.3,
        autoplay: true,

        breakpoints: {
            1920: {
                slidesPerView: 4.5
            },

            1440: {
                slidesPerView: 3.5,
            },

            1024: {
                slidesPerView: 2.2
            }
        }
    })

    document.querySelectorAll('.faq__question').forEach(el => {
      if(!el.classList.contains('faq__clickable-content')) {        
        el.addEventListener('click', () => {            
            el.classList.toggle('active')
            el.querySelector('.faq__btn').classList.toggle('active')
          })
      } else {
        el.querySelector('.faq__question-head').addEventListener('click', () => {
            el.classList.toggle('active')
            el.querySelector('.faq__btn').classList.toggle('active')
        })
      }    
    })

    const headerInner = document.querySelector('.header__inner')
    const headerTrigger = document.querySelector('.burger')
    const body = document.querySelector('body')

    headerTrigger?.addEventListener('click', () => {
        body.classList.toggle('popup-mode')
        headerInner.classList.toggle('active')
    })

    const swiperPubl = new Swiper('.publications-swiper', {
        enabled: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        autoplay: true,
        breakpoints: {
            768: {
                enabled: false
            }
        }
    })

    const products = document.querySelectorAll('.product .swiper')
    products.forEach(product => {
        const swiperProductBackground = new Swiper(product, {
            loop: true,
            autoplay: {
                pauseOnMouseEnter: true,
                delay: 3000
            },
            slidesPerView: 1,
            pagination: {
                el: '.product-background-pagination',
                type: 'bullets',
                clickable: true,
            },
        })
    })

    const asideLis = document.querySelectorAll('.aside__nav li')
    const catalogs = document.querySelectorAll('.catalog')
    asideLis.forEach(li => {
        li.addEventListener('click', function() {
            const dataName = li.dataset.products
            catalogs.forEach(catalog => {
                if(catalog.dataset.products === dataName) {
                    catalog.classList.add('active')
                } else {
                    catalog.classList.remove('active')
                }
            })

            asideLis.forEach(asideLi => {
                asideLi.classList.remove('active')
            })
            li.classList.add('active')

        })
    })

    const popupTriggers = document.querySelectorAll('.order-button')
    const popup = document.querySelector('.popup')
    const popupContent = document.querySelector('.popup__content')
    const popupClose = document.querySelector('.popup__close')

    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(popupContent)
        

        // if(!withinBoundaries && e.target.getAttribute('id') !== 'order' && popup.classList.contains('active')) {
        if(!withinBoundaries && !e.target.classList.contains('order-button') && popup.classList.contains('active')) {
            popup.classList.remove('active')
            body.classList.remove('popup-mode')
        }
    })

    popupClose.addEventListener('click', function() {
        popup.classList.remove('active')
        body.classList.remove('popup-mode')
    })

    const popupForm = document.querySelector('.popup form')
    popupForm.addEventListener('submit', function() {
        popup.classList.remove('active')
        body.classList.remove('popup-mode')
    })

    popupTriggers.forEach(popupTrigger => {
        popupTrigger.addEventListener('click', function() {
            popup.classList.add('active')
            body.classList.add('popup-mode')
        })
    })

    const productThumbsSwiper = new Swiper('.more__tabs', {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
    })

    const productSwiper = new Swiper('.more__picture', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 12,
        thumbs: {
            swiper: productThumbsSwiper
        },
        navigation: {
            nextEl: '.more-next',
            prevEl: '.more-prev'
        }
    });
    
    lightGallery(document.querySelector('.faq__textures', {
      selector: ".faq__texture-img"
    }))

    lightGallery(document.querySelector('.more-gallery'))

    document.querySelector('.faq__texture-download').addEventListener('click', (e) => {
      e.stopPropagation()
    })
    document.querySelector('.faq__texture-more h4').addEventListener('click', (e) => {
      e.stopPropagation()
    })
});

