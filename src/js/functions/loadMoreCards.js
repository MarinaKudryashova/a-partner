export function loadMoreCards(classCard, loadMoreBtn, visibleCount, loadMoreCount) {
  const allCards = document.querySelectorAll(classCard);
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
    if(loadMoreBtn.dataset.isLoading === 'true') return;

    loadMoreBtn.dataset.isLoading = true;
    const hiddenCards = document?.querySelectorAll(`${classCard}.is-hidden`);
    const cardsToShow = Math.min(loadMoreCount, hiddenCards.length);

    // Имитация загрузки с сервера (2 секунды)
    setTimeout(() => {
      for (let i = 0; i < cardsToShow; i++) {
        hiddenCards[i].classList.remove('is-hidden');
        hiddenCards[i].parentNode.classList.remove('is-hidden');
      }
      loadMoreBtn.dataset.isLoading = false;
      visibleCount += cardsToShow;
      updateLoadMoreButton();
    }, 2000);
  });

  function updateLoadMoreButton() {
      const hiddenCards = document.querySelectorAll(`${classCard}.is-hidden`);
      if (hiddenCards.length === 0) {
          loadMoreBtn?.classList?.add('is-hidden');
      } else {
          loadMoreBtn?.classList?.remove('is-hidden');
      }
  }
}
