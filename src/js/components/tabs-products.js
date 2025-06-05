import GraphTabs from 'graph-tabs';
import Swiper, { Navigation, FreeMode} from 'swiper';
Swiper.use([Navigation, FreeMode]);

let swiper_tabsProductsSlider;
const tabsProductsSlider = document?.querySelectorAll(".tabs-products__slider");
const btnNextTabsProductsSlider = document?.querySelector('.tabs-products__btn-next');
const btnPrevTabsProductsSlider = document?.querySelector('.tabs-products__btn-prev');

if(document.querySelector("[data-tabs='tabs-products']")) {
  const sliderTabs = new GraphTabs('tabs-products', {
    isChanged: (tabs) => {
      initSwiperTabsProductsSlider();
    }
  });
initSwiperTabsProductsSlider();
}

function initSwiperTabsProductsSlider() {
  if (swiper_tabsProductsSlider) {
    swiper_tabsProductsSlider.destroy(true, true);
  }
  const fondSlide = [...tabsProductsSlider].find((slider) =>{
    return slider.parentNode.classList.contains('tabs__panel--active');
  });

  swiper_tabsProductsSlider = new Swiper(fondSlide, {
    lazy: true,
    spaceBetween: 8,
    slidesPerView: 2.1,
    slidesPerGroup: 2,
    navigation: {
      nextEl: btnNextTabsProductsSlider,
      prevEl: btnPrevTabsProductsSlider,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 16,
      },
    },
  });
}
