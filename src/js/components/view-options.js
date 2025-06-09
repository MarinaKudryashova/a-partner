// Переключение вида отображения товаров
const viewButtons = document.querySelectorAll('.view-options__btn');
const productsContainer = document.querySelector('.layout[data-view-target]');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    viewButtons.forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    productsContainer.dataset.viewTarget = button.dataset.viewPath;
  });
});
