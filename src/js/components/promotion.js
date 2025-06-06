import { loading } from '../functions/loading';

document.addEventListener('DOMContentLoaded', function() {
    const promotionList = document.getElementById('promotionList');
    const loadMoreBtn = document.querySelector('.promotion__more-btn');
    const allCards = document.querySelectorAll('.promotion-card');
    // const loadingBtn = document?.querySelector('[data-loading-btn]');
    //   btn.addEventListener('click', () => {
    //     // Show loader on button click
    //     btn.classList.add("loading");
    //     // Hide loader after success/failure - here it will hide after 2seconds
    //     setTimeout(() => btn.classList.remove("loading"), 3000);
    //   });
    // })

    let visibleCount = 9; // Показываем первые 9 карточки
    const loadMoreCount = 9; // Показываем по 9 дополнительные карточки

    // Скрываем все карточки, кроме первых visibleCount
    allCards.forEach((card, index) => {
      if (index >= visibleCount) {
        card.classList.add('is-hidden');
        card.parentNode.classList.add('is-hidden');
      }
    });

    // Проверяем, нужно ли скрывать кнопку "Показать еще"
    updateLoadMoreButton();

    // Обработчик клика на кнопку "Показать еще"
    loadMoreBtn?.addEventListener('click', function() {
      const hiddenCards = document.querySelectorAll('.promotion-card.is-hidden');
      const cardsToShow = Math.min(loadMoreCount, hiddenCards.length);
      if(loadMoreBtn.classList.contains('[data-loading-btn]')) {
        console.log(loadMoreBtn);

      }
      for (let i = 0; i < cardsToShow; i++) {
        hiddenCards[i].classList.remove('is-hidden');
        hiddenCards[i].parentNode.classList.remove('is-hidden');
      }


      visibleCount += cardsToShow;
      updateLoadMoreButton();
    });

    function updateLoadMoreButton() {
        const hiddenCards = document.querySelectorAll('.promotion-card.is-hidden');
        if (hiddenCards.length === 0) {
            loadMoreBtn?.classList?.add('is-hidden');
        } else {
            loadMoreBtn?.classList?.remove('is-hidden');
        }
    }
});
