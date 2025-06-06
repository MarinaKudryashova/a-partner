window.addEventListener('DOMContentLoaded', function (e) {

  const orderLinks = document?.querySelectorAll('.account-orders__order-no');
  const ordersBlock = document?.querySelector('.account-orders');
  const orderInfoBlock = document?.querySelector('.order-info');
  const backBtn = document?.querySelector('.order-info__btn');

  if (ordersBlock) {
    ordersBlock?.classList.add('active');
  }

  function showOrderInfo(orderNumber) {

  ordersBlock?.classList.remove('active');
  orderInfoBlock?.classList.add('active');

  // Подставляем номер заказа в заголовок
  const title = orderInfoBlock.querySelector('.order-info__title');

  if (title) {
    title.textContent = 'Заказ №' + orderNumber;
  }
  }

  // Обрабатываем номера заказов
  orderLinks?.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    ordersBlock.classList.remove('active');
    orderInfoBlock.classList.add('active');
    const orderNumber = this.textContent.trim();
    showOrderInfo(orderNumber);
  });
  });

  // Обработчик события у кнопки Назад
  backBtn?.addEventListener('click', function() {
  orderInfoBlock?.classList.remove('active');
  ordersBlock?.classList.add('active');
  });

  // Таблица показана изначально
  ordersBlock?.classList.add('active');
  orderInfoBlock?.classList.remove('active');
})
