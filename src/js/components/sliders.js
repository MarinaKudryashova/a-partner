import Swiper, { Navigation, Pagination, Autoplay, EffectFade, FreeMode, Grid} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, FreeMode, Grid]);

document.addEventListener('DOMContentLoaded', (event)=>{
  const categorySectionSliders = document.querySelectorAll('.category-section__slider');

  if(categorySectionSliders) {
    categorySectionSliders.forEach((slider) => {
      const btnNextSlider = slider.parentNode.querySelector('.category-section__btn-next');
      const btnPrevSlider = slider.parentNode.querySelector('.category-section__btn-prev');

      const swiper_currentSlider = new Swiper(slider, {
        loop: true,
        lazy: true,
        spaceBetween: 8,
        slidesPerView: 2.1,
        slidesPerGroup: 2,
        navigation: {
          nextEl: btnNextSlider,
          prevEl: btnPrevSlider,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 16,
          },

        }
      });
    })
  }

  const offerSectionSliders = document.querySelectorAll('.offer-section__slider');
  if(offerSectionSliders) {
    offerSectionSliders.forEach((slider) => {
      const btnNextSlider = slider.parentNode.querySelector('.offer-section__btn-next');
      const btnPrevSlider = slider.parentNode.querySelector('.offer-section__btn-prev');

      const swiper_currentSlider = new Swiper(slider, {
        loop: true,
        lazy: true,
        spaceBetween: 8,
        slidesPerView: 2.1,
        navigation: {
          nextEl: btnNextSlider,
          prevEl: btnPrevSlider,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 16,
          },

        }
      });
    })
  }
});
