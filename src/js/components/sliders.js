import Swiper, { Navigation, Pagination, Autoplay, EffectFade, FreeMode, Grid } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, FreeMode, Grid]);

  const promoPromotionSLiders = document.querySelector('.promo-promotion__slider');
  if (promoPromotionSLiders) {
      const swiper_promoPromotionSLiders = new Swiper(promoPromotionSLiders, {
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        speed: 600,
        autoplay: {
          delay: promoPromotionSLiders.dataset['autoplay']*1000,
          disableOnInteraction: false,
        },
        watchSlidesProgress: true,
      });
  }

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const brandSlider = document.querySelector(".brand-slider__slider");

  if(brandSlider) {
  const btnNextBrandSlider = document.querySelector('.brand-slider__btn-next');
  const btnPrevBrandSlider = document.querySelector('.brand-slider__btn-prev');

    resizableSwiper(
      '(max-width: 1200px)',
      '.brand-slider__slider',
      {
        loop: true,
        spaceBetween: 8,
        slidesPerView: 2,
        watchSlidesProgress: true,
        breakpoints: {
          460: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 5
          },
          1024: {
            slidesPerView: 6
          },
        },
        navigation: {
          nextEl: btnNextBrandSlider,
          prevEl: btnPrevBrandSlider,
        },
      }
    );
  }

  const categorySectionSliders = document.querySelectorAll('.category-section__slider');

  if (categorySectionSliders) {
    categorySectionSliders.forEach((slider) => {
    const btnNextCategorySlider = slider.parentNode.querySelector('.category-section__btn-next');
    const btnPrevCategorySlider = slider.parentNode.querySelector('.category-section__btn-prev');

      const swiper_currentSlider = new Swiper(slider, {
        loop: true,
        lazy: true,
        spaceBetween: 8,
        slidesPerView: 2.1,
        slidesPerGroup: 2,
        navigation: {
          nextEl: btnNextCategorySlider,
          prevEl: btnPrevCategorySlider,
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
  if (offerSectionSliders) {

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

  const accountContentSLiders = document.querySelectorAll('.account-content__slider');
  if (accountContentSLiders) {
    accountContentSLiders.forEach((slider) => {
      const btnNextSlider = slider.parentNode.querySelector('.account-content__btn-next');
      const btnPrevSlider = slider.parentNode.querySelector('.account-content__btn-prev');

      const swiper_currentSlider = new Swiper(slider, {
        loop: false,
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
            slidesPerView: 1,
            spaceBetween: 16,
          }
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
           return '<span class="' + className + '">' + (index + 1) + "</span>";
          }
        },
      });
    })
  }
