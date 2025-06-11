function clearInput() {
  const clearBtn = document?.querySelector('[data-show-datepicker]');
  const input = document?.getElementById(clearBtn?.getAttribute('aria-controls'));

  if (!input || !clearBtn) return;

  // При клике на кнопку очищаем поле и скрываем кнопку
  clearBtn.addEventListener('click', () => {
    // input.value = '';
    input.focus();
  });
}
clearInput();
