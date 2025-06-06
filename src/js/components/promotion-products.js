import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';
import { loadMoreCards } from '../functions/loadMoreCards';

document.addEventListener('DOMContentLoaded', function() {
    const promotionList = document.getElementById('postPromotionProductsList');
    const allCards = document.querySelectorAll('.product-card');
    const loadMoreBtn = document.querySelector('.post-promotion-products__more-btn');
    let visibleCount; // Показываем первые 9 карточки
    let loadMoreCount; // Показываем по 9 дополнительные карточки

    if (window.innerWidth > 1200) {
      visibleCount = 5; // Показываем первые 9 карточки
      loadMoreCount = 5; // Показываем по 9 дополнительные карточки
    }

    if (window.innerWidth <= 1200 && window.innerWidth > 1024) {
      visibleCount = 4; // Показываем первые 9 карточки
      loadMoreCount = 4; // Показываем по 9 дополнительные карточки
    }

    if (isTablet()) {
      visibleCount = 3; // Показываем первые 9 карточки
      loadMoreCount = 3; // Показываем по 9 дополнительные карточки
    }

    if (isMobile()) {
      visibleCount = 4; // Показываем первые 9 карточки
      loadMoreCount = 4; // Показываем по 9 дополнительные карточки
    }
    loadMoreCards('.product-card', loadMoreBtn, visibleCount, loadMoreCount);
});
