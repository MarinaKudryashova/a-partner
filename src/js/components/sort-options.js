// Обновленный скрипт для работы с новым компонентом сортировки

document.addEventListener('DOMContentLoaded', function() {
  const sortButton = document.querySelector('[data-sort-btn]');
  const sortMenu = document.querySelector('[data-sort-menu]');
  const sortValue = document.querySelector('[data-sort-value]');
  const sortOptions = document.querySelectorAll('.sort-options__item');

  // Текущий выбранный вариант
  let currentSort = 'popularity';

  // Открытие/закрытие меню
  if(sortButton) {
    sortButton.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      sortMenu.setAttribute('aria-hidden', isExpanded);

      if (!isExpanded) {
        // Фокусируем выбранный элемент при открытии
        const selectedOption = document.querySelector(`.sort-option[data-value="${currentSort}"]`);
        if (selectedOption) selectedOption.focus();
      }
    });

    // Выбор варианта сортировки
    sortOptions.forEach(option => {
      option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        selectSortOption(value);
      });

      // Обработка нажатия клавиш
      option.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const value = this.getAttribute('data-value');
          selectSortOption(value);
        } else if (e.key === 'Escape') {
          closeSortMenu();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = this.nextElementSibling || sortOptions[0];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = this.previousElementSibling || sortOptions[sortOptions.length - 1];
          prev.focus();
        }
      });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
      if (!sortButton.contains(e.target) && !sortMenu.contains(e.target)) {
        closeSortMenu();
      }
    });
  }

  function closeSortMenu() {
    sortButton.setAttribute('aria-expanded', 'false');
    sortMenu.setAttribute('aria-hidden', 'true');
  }

  function selectSortOption(value) {
    // Обновляем выбранный вариант
    currentSort = value;

    // Обновляем текст на кнопке
    const selectedOptionText = Array.from(sortOptions).find(
      opt => opt.getAttribute('data-value') === value
    ).textContent.trim();
    sortValue.textContent = selectedOptionText;

    // Обновляем ARIA-атрибуты
    sortOptions.forEach(opt => {
      const isSelected = opt.getAttribute('data-value') === value;
      opt.setAttribute('aria-selected', isSelected);
    });

    // Закрываем меню
    closeSortMenu();

    // Здесь должна быть логика сортировке товаров

    // Возвращаем фокус на кнопку
    sortButton.focus();
  }
});
