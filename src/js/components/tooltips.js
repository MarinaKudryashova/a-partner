document.addEventListener('DOMContentLoaded', function() {
  // Инициализация тултипов
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // Функция для позиционирования тултипа
  function positionTooltip(tooltip, content) {
    const trigger = tooltip.querySelector('[data-tooltip-trigger]');
    const triggerRect = trigger.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Сброс позиционирования
    content.style.bottom = '';
    content.style.top = '';
    content.style.left = '';
    content.style.right = '';
    content.style.transform = '';
    content.style.marginBottom = '';
    content.style.marginTop = '';

    // Проверка доступного пространства
    const spaceAbove = triggerRect.top - contentRect.height - 8;
    const spaceBelow = viewportHeight - triggerRect.bottom - contentRect.height - 8;
    const spaceLeft = triggerRect.left - contentRect.width - 8;
    const spaceRight = viewportWidth - triggerRect.right - contentRect.width - 8;

    // Определение оптимальной позиции
    if (spaceAbove > 0 || spaceBelow < 0) {
      // Позиционирование сверху
      content.style.bottom = '100%';
      content.style.left = '50%';
      content.style.transform = 'translateX(-50%)';
      content.style.marginBottom = '8px';
      content.style.marginTop = '';
    } else {
      // Позиционирование снизу
      content.style.top = '100%';
      content.style.left = '50%';
      content.style.transform = 'translateX(-50%)';
      content.style.marginTop = '8px';
      content.style.marginBottom = '';
    }

    // Корректировка стрелки
    const arrow = content.querySelector(':before') || document.createElement('div');
    arrow.style.content = '';
    arrow.style.position = 'absolute';
    arrow.style.borderWidth = '6px';
    arrow.style.borderStyle = 'solid';

    if (spaceAbove > 0 || spaceBelow < 0) {
      // Стрелка внизу
      arrow.style.top = '100%';
      arrow.style.left = '50%';
      arrow.style.transform = 'translateX(-50%)';
      arrow.style.borderColor = '#333 transparent transparent transparent';
    } else {
      // Стрелка вверху
      arrow.style.bottom = '100%';
      arrow.style.left = '50%';
      arrow.style.transform = 'translateX(-50%)';
      arrow.style.borderColor = 'transparent transparent #333 transparent';
    }
  }

  // Обработчики событий для каждого тултипа
  tooltips.forEach(tooltip => {
    const trigger = tooltip.querySelector('[data-tooltip-trigger]');
    const content = tooltip.querySelector('[data-tooltip-content]');

    // Показ тултипа
    function showTooltip() {
      tooltip.setAttribute('data-tooltip-visible', 'true');
      trigger.setAttribute('aria-expanded', 'true');
      positionTooltip(tooltip, content);
    }

    // Скрытие тултипа
    function hideTooltip() {
      tooltip.setAttribute('data-tooltip-visible', 'false');
      trigger.setAttribute('aria-expanded', 'false');
    }

    // Переключение тултипа
    function toggleTooltip() {
      const isVisible = tooltip.getAttribute('data-tooltip-visible') === 'true';
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }

    // Обработчики событий
    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
    trigger.addEventListener('focus', showTooltip);
    trigger.addEventListener('blur', hideTooltip);
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleTooltip();
    });
    trigger.addEventListener('touchstart', function(e) {
      e.stopPropagation();
      toggleTooltip();
    });

    // Закрытие при клике вне тултипа
    document.addEventListener('click', function(e) {
      if (!tooltip.contains(e.target)) {
        hideTooltip();
      }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        hideTooltip();
      }
    });
  });

  // Обновление позиции при изменении размера окна
  window.addEventListener('resize', function() {
    tooltips.forEach(tooltip => {
      if (tooltip.getAttribute('data-tooltip-visible') === 'true') {
        const content = tooltip.querySelector('[data-tooltip-content]');
        positionTooltip(tooltip, content);
      }
    });
  });
});
