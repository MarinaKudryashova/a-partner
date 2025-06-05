import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';

document.addEventListener('DOMContentLoaded', function() {
    const promotionList = document.getElementById('postPromotionProductsList');
    const loadMoreBtn = document.querySelector('.post-promotion-products__more-btn');
    const allCards = document.querySelectorAll('.product-card');
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

    // Скрываем все карточки, кроме первых visibleCount
    allCards.forEach((card, index) => {
      if (index >= visibleCount) {
        card?.classList.add('is-hidden');
        card.parentNode?.classList.add('is-hidden');
      }
    });

    // Проверяем, нужно ли скрывать кнопку "Показать еще"
    updateLoadMoreButton();

    // Обработчик клика на кнопку "Показать еще"
    loadMoreBtn?.addEventListener('click', function() {
      const hiddenCards = document.querySelectorAll('.product-card.is-hidden');
      const cardsToShow = Math.min(loadMoreCount, hiddenCards.length);

      for (let i = 0; i < cardsToShow; i++) {
        hiddenCards[i]?.classList.remove('is-hidden');
        hiddenCards[i]?.parentNode.classList.remove('is-hidden');
      }

      visibleCount += cardsToShow;
      updateLoadMoreButton();
    });

    function updateLoadMoreButton() {
        const hiddenCards = document?.querySelectorAll('.product-card.is-hidden');
        if (hiddenCards.length === 0) {
            loadMoreBtn?.classList.add('is-hidden');
        } else {
            loadMoreBtn?.classList.remove('is-hidden');
        }
    }
});
