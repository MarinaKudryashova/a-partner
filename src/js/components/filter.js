// Обработка toggle-переключателя наличия
const inStockToggle = document.getElementById('in-stock-toggle');
inStockToggle.addEventListener('change', function() {
  if(this.checked) {
    console.log('Показывать только товары в наличии');
    // Логика фильтрации - показать только в наличии
  } else {
    console.log('Показывать все товары');
    // Логика фильтрации - показать все
  }
});
