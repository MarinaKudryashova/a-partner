export function clearInput() {

const inputGroups = document.querySelectorAll('.account-data__input');

  inputGroups.forEach(group => {
    const input = group.querySelector('.account-data__input-field');
    const clearBtn = group.querySelector('.account-data__clear-btn');

    if (!input || !clearBtn) return;

    // Изначально скрываем кнопку, если поле пустое
    clearBtn.style.display = input.value.length > 0 ? 'block' : 'none';

    // При вводе текста показываем или скрываем кнопку
    input.addEventListener('input', () => {
      clearBtn.style.display = input.value.length > 0 ? 'block' : 'none';
    });

    // При клике на кнопку очищаем поле и скрываем кнопку
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      input.focus();
    });
  });
}

