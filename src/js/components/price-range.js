document.addEventListener('DOMContentLoaded', function() {
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const minRange = document.querySelector('.price-filter__range.min');
  const maxRange = document.querySelector('.price-filter__range.max');
  const track = document.querySelector('.price-filter__track');
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
  const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--border').trim()

  // Обновление полей ввода при изменении ползунков
  minRange.addEventListener('input', function() {
    minPriceInput.value = this.value;
    updateTrack();
  });

  maxRange.addEventListener('input', function() {
    maxPriceInput.value = this.value;
    updateTrack();
  });

  // Обновление ползунков при изменении полей ввода
  minPriceInput.addEventListener('input', function() {
    minRange.value = this.value;
    updateTrack();
  });

  maxPriceInput.addEventListener('input', function() {
    maxRange.value = this.value;
    updateTrack();
  });

  // Обновление визуального отображения диапазона
  function updateTrack() {
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);
    const offsetVal = parseInt(maxRange.max) / 100;
    track.style.background = `linear-gradient(to right,
      ${defaultColor} ${minVal / offsetVal}%,
      ${accentColor} ${minVal / offsetVal}%,
      ${accentColor} ${maxVal / offsetVal}%,
      ${defaultColor} ${maxVal / offsetVal}%)`;
  }

  // Инициализация
  updateTrack();
});
