document.addEventListener("DOMContentLoaded", () => {
  const messageList = document.getElementById('messageList');

  // ф-ция создает новый HTML элемент
  function creatElDOM(tag, className = '', text = '') {

    let elem = document.createElement(tag);
    if(className !== '') { elem.className = className; }
    if(text !== '') { elem.textContent = text; }

    elem.textContent = text;

    return elem;
  }

  // Функция создания уведомления
  function createMessage(type='', title, note, icon) {
    const message = creatElDOM('div', `message ${type}`);
    const messageInfo = creatElDOM('div', 'message__info');
    const messageIcon = creatElDOM('img', 'message__icon');
    messageIcon.setAttribute('src', `img/${icon}.svg`);
    messageIcon.setAttribute('width', '24');
    messageIcon.setAttribute('height', '24');
    messageIcon.setAttribute('aria-hidden', 'true');
    messageIcon.setAttribute('alt', 'иконка');
    const messageDate = creatElDOM('span', 'message__date', `${title}`);
    const messageNote = creatElDOM('span', 'message__note', `${note}`);
    const messageClose = creatElDOM('button', 'message__close');
    messageClose.setAttribute('type', 'button');
    messageClose.innerHTML =
    `<svg>
        <use xlink:href="img/sprite.svg#icon-close"></use>
      </svg>`;
    messageInfo.append(messageDate, messageNote);

    if(type === 'error') {
      const messageReturn = creatElDOM('button', 'message__return btn btn--stroke', 'Вернуть');
      messageReturn.setAttribute('type', 'button');
      message.append(messageIcon, messageInfo, messageReturn, messageClose);
    } else {
      message.append(messageIcon, messageInfo, messageClose);
    }
    messageList.append(message);

    // Анимация появления
    setTimeout(() => {
      message.classList.add('is-show');
    }, 10);

    // Закрытие по клику на крестик
    const closeBtn = message.querySelector('.message__close');
    closeBtn.addEventListener('click', () => {
      closeMessage(message);
    });

    // Автоматическое закрытие через 3 секунды
    const timer = setTimeout(() => {
      closeMessage(message);
    }, 10000);

    // Функция закрытия уведомления
    function closeMessage(element) {
      clearTimeout(timer);
      element.style.opacity = '0';

      setTimeout(() => {
          element.remove();
      }, 500);
    }
  }

  // Обработчики событий для кнопок
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      createMessage(
        'success',
        'Товар добавлен',
        'Товар 133455985 добавлен в корзину',
        'icon-success'
      );
    });
  })

  document.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      createMessage(
        'error',
        'Товар удален',
        'Товар 123456485 удален из корзины',
        'icon-error'
      );
    });
  });

  document.querySelectorAll('[data-info]').forEach(btn => {
    btn.addEventListener('click', () => {
      createMessage(
        '',
        'Пароль изменен',
        'Письмо на сброс пароля отправлено на почту a159895@gmail.com',
        'icon-info'
      );
    });
  });
});
