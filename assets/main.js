'use strict';

const burgerMenuBtn = document.querySelector('.burger-menu_button');
const headerBurgerMenu = document.querySelector('.burger-menu');
const burgerMenuDisable = document.querySelectorAll(
    '.burger-nav__back-btn, .burger-menu_overlay'
);
const brandsDropdown = document.querySelector('.burger-nav__brands_head');
const filterBtn = document.querySelector('.btns-bar__filter-btn');
const filterMenuBackbtn = document.querySelector('.filter-menu__back-btn');
const colorSwitch = document.querySelectorAll('.color-swatch');
const capacitySwitch = document.querySelectorAll('.kapazitaet-picker-input');
const accordionHead = document.querySelectorAll('.accordion-trigger');
const categoryButton = document.querySelectorAll('.menu-container__head');

// document.querySelector(".zustand-dropdown__head").addEventListener("click", (e) => {
//     e.target.nextElementSibling.classList.toggle("visible");
//     e.target.nextElementSibling.querySelectorAll(".zustand-dropdown__container_item").forEach((item) => {
//         item.addEventListener("click", (e) => {
//             document.querySelector(".zustand-dropdown__head").innerHTML = e.target.dataset.zustand;
//             item.closest(".zustand-dropdown__container").classList.remove("visible");
//         })
//     })
// })

if (document.querySelector(".facts-container")) {
    const scrollToBlock = document.querySelector(".facts__wrapper").offsetTop;
    const COUNTER = document.querySelectorAll(".facts-container [data-index]");

    const onScroll = () => {
        if (window.pageYOffset > scrollToBlock - 500) {
            this.removeEventListener("scroll", onScroll)
            COUNTER.forEach((item) => {
                let counterEnd = Number(item.dataset.index);
                let counter = 0;
                let INTERVAL = setInterval(() => {
                    item.innerHTML = counter;
                    counter++;
                    if (counter === counterEnd + 1) {
                        clearInterval(INTERVAL)
                    }
                }, 4)
            })
        }
    }

    window.addEventListener("scroll", onScroll)
}

if (document.querySelector(".login") || document.querySelector(".register")) {
    document.querySelector(".header-menu__search-container").style.display = "none";
}

if (document.querySelector(".account") && document.body.clientWidth <= 992) {
    document.querySelector(".account-container__menu").style.display = "none";
    document.querySelectorAll(".account-container__content_item").forEach((item) => {
        item.classList.add("active", "invisible");
        item.querySelector(".account-container__content_item-head").addEventListener("click", (e) => {
            document.querySelectorAll(".account-container__content_item-head").forEach((elem) => {
                if (e.target.closest(".account-container__content_item-head") === elem) {
                    elem.closest(".account-container__content_item").classList.toggle("invisible");
                } else {
                    elem.closest(".account-container__content_item").classList.add("invisible");
                }
            })
        })
    })
}

if (document.body.clientWidth <= 576 && document.querySelector(".subfooter")) {
    document.querySelectorAll(".subfooter__wrapper_title").forEach((item) => {
        item.addEventListener("click", (e) => {
            document.querySelectorAll(".subfooter__wrapper_title").forEach((elem) => {
                if (e.target.closest(".subfooter__wrapper_title") === elem) {
                    e.target.closest(".subfooter__wrapper_column").classList.toggle("visible");
                } else {
                    elem.closest(".subfooter__wrapper_column").classList.remove("visible");
                }
            })
        })
    })
}

if (document.querySelector(".header-menu__search-container")) {
    document.querySelector(".header-menu__search-container_input").addEventListener("focusin", (e) => {
        e.target.closest(".header-menu__search-container_label").classList.add("focused")
    })
    document.querySelector(".header-menu__search-container_input").addEventListener("focusout", (e) => {
        e.target.closest(".header-menu__search-container_label").classList.remove("focused")
    })
}

if (document.querySelector('.swiper-container.swiper-container-desktop')) {
    let swiperDesktop = new Swiper('.swiper-container.swiper-container-desktop', {
        loop: true,
        speed: 2000,
        grabCursor: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        spaceBetween: 10,
        slidesPerView: 'auto',
        centeredSlides: true,
        breakpoints: {
            993: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

if (document.querySelector(".swiper-container.advantages__wrapper_cards")) {
    let advantagesSlider = new Swiper('.swiper-container.advantages__wrapper_cards', {
            loop: true,
            speed: 2000,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 10,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        }
    );
}

if (document.querySelector(".swiper-container.homepage-slider-container")) {
    let advantagesSlider = new Swiper('.swiper-container.homepage-slider-container', {
            speed: 2000,
            slidesPerView: 'auto',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    spaceBetween: 10,
                },

                993: {
                    spaceBetween: 0,

                },
            },
        }
    );
}

// if (document.querySelector(".swiper-container.product-swiper-h")) {
//     let singleProductSliderH = new Swiper('.swiper-container.product-swiper-h', {
//         spaceBetween: 50,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });
// }
//
// if (document.querySelector(".swiper-container.product-swiper-v")) {
//     let singleProductSliderV = new Swiper('.swiper-container.product-swiper-v', {
//         direction: 'vertical',
//         spaceBetween: 50,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });
// }

if (colorSwitch) {
    colorSwitch.forEach(function (item) {
        item.addEventListener('change', function (e) {
            colorSwitch.forEach(function (item) {
                item.closest('.color-picker-indicator').classList.remove(
                    'activ'
                );
            });

            e.target
                .closest('.color-picker-indicator')
                .classList.toggle('activ');
        });
    });
}

if (capacitySwitch) {
    capacitySwitch.forEach(function (item) {
        item.addEventListener('change', function (e) {
            capacitySwitch.forEach(function (item) {
                item.closest('.kapazitaet-picker.w-button').classList.add(
                    'not-chosen'
                );
            });

            e.target
                .closest('.kapazitaet-picker.w-button')
                .classList.remove('not-chosen');
        });
    });
}

// if (categoryButton) {
//     categoryButton.forEach(function (item) {
//         item.addEventListener('click', function (e) {
//             e.target.classList.toggle('unvisible');
//         });
//     });
// }


if (burgerMenuBtn) {
    burgerMenuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        headerBurgerMenu.classList.add('burger-menu_active');
    });
}

if (burgerMenuDisable) {
    burgerMenuDisable.forEach(function (item) {
        item.addEventListener('click', function (e) {
            headerBurgerMenu.classList.remove('burger-menu_active');
        });
    });
}
if (brandsDropdown) {
    brandsDropdown.addEventListener('click', function (e) {
        e.target.closest('.burger-nav__brands_head').classList.toggle('visible');
    });
}


if (filterBtn) {
    filterBtn.addEventListener('click', function (e) {
        e.target
            .closest('.btns-bar__filter-btn')
            .nextElementSibling.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });
}

if (filterMenuBackbtn) {
    filterMenuBackbtn.addEventListener('click', function (e) {
        e.target.closest('.filter-menu').classList.remove('visible');
        document.body.style.overflow = 'visible';
    });
}

if (accordionHead) {
    accordionHead.forEach(function (item) {
        item.addEventListener('click', function (e) {
            accordionHead.forEach((item) => {
                if (e.target.closest('.accordion-trigger') == item) {
                    e.target
                        .closest('.accordion-wrapper')
                        .classList.toggle('visible');
                } else {
                    item.closest('.accordion-wrapper').classList.remove(
                        'visible'
                    );
                }
            });
        });
    });
}

if (document.querySelector(".product-row")) {
    const swiper = new Swiper('.product-row', {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 27,

        // breakpoints: {
        //     // when window width is >= 320px
        //     1920: {
        //         slidesPerView: "auto",
        //         slidesPerGroup: 5,
        //     },
        //     // when window width is >= 480px
        //     1600: {
        //         slidesPerView: "auto",
        //         slidesPerGroup: 4,
        //     },
        //     // when window width is >= 640px
        //     1440: {
        //         slidesPerView: "auto",
        //         slidesPerGroup: 3,
        //     }
        // },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

const pagginationLength = document.querySelectorAll(".product-row .swiper-pagination-bullet").length;
const pagginationCounter = document.querySelector(".swiper-pagination-counter");
if (pagginationCounter) {
    document.addEventListener("DOMContentLoaded", (e) => {
        pagginationCounter.innerHTML = `1/${pagginationLength}`;
    })
}

document.querySelectorAll(".swiper-button-prev, .swiper-button-next").forEach((item) => {
    item.addEventListener("click", (e) => {
        let currentPageNumber = document.querySelector(".swiper-pagination-bullet-active").innerHTML;
        pagginationCounter.innerHTML = `${currentPageNumber}/${pagginationLength}`;
    });
});

document.querySelectorAll(".swiper-pagination-bullet").forEach((item) => {
    item.addEventListener("click", (e) => {
        let currentPageNumber = e.target.closest('.swiper-pagination-bullet').innerHTML;
        pagginationCounter.innerHTML = `${currentPageNumber}/${pagginationLength}`;
    })
})

if (document.querySelector(".FAQ-box__container_head")) {
    document.querySelectorAll(".FAQ-box__container_head").forEach((item) => {
        item.addEventListener("click", (e) => {
            document.querySelectorAll(".FAQ-box__container_head").forEach((item) => {
                if (e.target === item) {
                    e.target.closest(".FAQ-box__container").querySelector(".FAQ-tabs__container_content").classList.toggle("visible")
                    e.target.closest(".FAQ-box__container").classList.toggle("visible")
                } else {
                    item.closest(".FAQ-box__container").classList.remove('visible')
                    item.closest(".FAQ-box__container").querySelector(".FAQ-tabs__container_content").classList.remove("visible")
                }
            })
        })
    })
}

const tabLinks = document.querySelectorAll(".FAQ-titles__title");
const tabPanels = document.querySelectorAll(".FAQ-tabs__wrapper_box.FAQ-box");


tabLinks.forEach((el) => {
    el.addEventListener("click", e => {
        let currentIndex = null;
        tabLinks.forEach((tab) => {
            tab.classList.remove("active")
            if (e.target.closest(".FAQ-titles__title") === tab) {
                e.target.classList.add("active")
                currentIndex = tab.getAttribute('data-index');
            }
        })
        tabPanels.forEach((tab) => {
            tab.classList.remove("active")
            if (tab.getAttribute('data-index') === currentIndex) {
                tab.classList.add("active")
            }
            document.querySelectorAll(".FAQ-box__container_head").forEach((item) => {
                if (e.target === item) {
                    e.target.closest(".FAQ-box__container").classList.toggle("visible")
                } else {
                    item.closest(".FAQ-box__container").classList.remove('visible')
                }
            })
        })
    });
})

if (document.querySelector(".swiper-container.team-slider")) {
    const swiper = new Swiper('.swiper-container.team-slider', {
        spaceBetween: 30,
        grabCursor: true,
        slidesPerView: "auto",
        // breakpoints: {
        //     1200: {
        //         slidesPerView: 4
        //     },
        //     992: {
        //         slidesPerView: 3
        //     }
        //     0: {
        //         slidesPerView: 1
        //     }
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

const accordionsInit = (headClass, containerClass, blockClass) => {
    document.querySelectorAll(`.${headClass}`).forEach((item) => {
        item.addEventListener("click", (e) => {
            document.querySelectorAll(`.${headClass}`).forEach((elem) => {
                if (e.target === elem) {
                    e.target.closest(`.${blockClass}`).querySelector(`.${containerClass}`).classList.toggle("visible")
                    e.target.classList.toggle("rotated")
                } else {
                    elem.closest(`.${blockClass}`).querySelector(`.${containerClass}`).classList.remove("visible")
                    elem.classList.remove("rotated")
                }
            })
        })
    })
}

if (document.querySelector(".account")) {
    const accountLinks = document.querySelectorAll(".account-container__menu_item");
    const accountPanels = document.querySelectorAll(".account-container__content_item");


    accountLinks.forEach((el) => {
        el.addEventListener("click", e => {
            let currentIndex = null;
            accountLinks.forEach((tab) => {
                tab.classList.remove("active")
                if (e.target.closest(".account-container__menu_item") === tab) {
                    e.target.closest(".account-container__menu_item").classList.add("active")
                    currentIndex = tab.getAttribute('data-index');
                }
            })
            accountPanels.forEach((tab) => {
                tab.classList.remove("active")
                if (tab.getAttribute('data-index') === currentIndex) {
                    tab.classList.add("active")
                }
                // document.querySelectorAll(".FAQ-box__container_head").forEach((item) => {
                //     if (e.target === item) {
                //         e.target.closest(".FAQ-box__container").classList.toggle("visible")
                //     } else {
                //         item.closest(".FAQ-box__container").classList.remove('visible')
                //     }
                // })
            })
        });
    })
    accordionsInit("orders-block__item_head_img", "orders-block__item_container", "orders-block__item");
}

if (document.querySelector(".blog-slider")) {
    const blogSwiper = new Swiper(".swiper-container.janado-blog", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

if (document.querySelector(".articles__wrapper_sorting-dropdown")) {
    document.querySelector(".articles__wrapper_dropdown-head").addEventListener("click", (e) => {
        e.target.closest(".articles__wrapper_dropdown-head").classList.toggle("active");
        e.target.closest(".articles__wrapper_sorting-dropdown").querySelector(".articles__wrapper_dropdown-container").classList.toggle("active");
    })
}

if (document.querySelector(".cart-checkout__order_minus-btn")) {
    document.querySelectorAll(".cart-checkout__order_minus-btn").forEach((item) => {
        item.addEventListener("click", (e) => {
            let inputValue = Number(e.target.closest(".cart-checkout__order_product").querySelector("input").value);
            inputValue--;
            e.target.closest(".cart-checkout__order_product").querySelector("input").value = inputValue;
        })
    })
    document.querySelectorAll(".cart-checkout__order_plus-btn").forEach((item) => {
        item.addEventListener("click", (e) => {
            let inputValue = Number(e.target.closest(".cart-checkout__order_product").querySelector("input").value);
            inputValue++;
            e.target.closest(".cart-checkout__order_product").querySelector("input").value = inputValue;
        })
    })
}

if (document.querySelector(".menu-container")) {
    document.querySelectorAll(".variant__model-container").forEach((item) => {
        item.addEventListener("click", (e) => {

        })
    })
}