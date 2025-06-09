document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.querySelector('[data-show-more]');
  const hiddenItems = showMoreBtn.parentElement.querySelectorAll('[data-visible]');
  const visibleCount = 4;

  let isExpanded = false;
  showMoreBtn.addEventListener('click', function() {
    if (isExpanded) {
      hiddenItems.forEach((item, index) => {
        if (index >= visibleCount) {
          item.dataset.visible = false;
          item.classList.remove('visible');
          item.classList.add('hidden');
        }
      });
      showMoreBtn.textContent = 'Показать еще';
    } else {
      hiddenItems.forEach((item, index) => {
        if (index >= visibleCount) {
          item.dataset.visible = true;
        }
      });
      showMoreBtn.textContent = 'Скрыть';
    }

    isExpanded = !isExpanded;
  });
});
