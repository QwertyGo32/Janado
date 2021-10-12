'use strict';

if (document.querySelector('.mask-2.w-slider-mask.swiper-container')) {
    let swiperDesktop = new Swiper('.mask-2.w-slider-mask.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}



// document.addEventListener('DOMContentLoaded', (e) => {
//     getProducts(url);
//
// })
//
// let url = "https://janado.myshopify.com/admin/api/2021-04/products/6878828396703/variants.json";
//
// async function getProducts(URL) {
//     let response = await fetch(URL, {
//         headers: {
//             'Content-Type': 'application/json',
//             "Authorization": "Basic 12f8823f716b8f8e87e6dc12bfe7982d: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"
//         }
//     });
//     if (response.ok) {
//         let data = await response.json();
//         console.log(data);
//         return data;
//
//     } else {
//         console.log("error", response.status);
//     }
// }
