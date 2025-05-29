export function passwordView() {
  const password = document.querySelector('#password');
  const passwordBtn = document.querySelector('.account-data__password-btn');

  if(!password || !passwordBtn) return;


  // Скрытие иконки глаза при пустом поле
  function updateIconVisibility() {
    const hasText = password.value.length > 0
    if (hasText) {
      passwordBtn.style.display = 'block'
    } else {
      passwordBtn.style.display = 'none'
    }
  }

  updateIconVisibility()
  password.addEventListener('input', updateIconVisibility);

  passwordBtn.addEventListener('click', function (e) {
      const isPassword = password.type === 'password';

      password.type = isPassword ? 'text' : 'password';
      passwordBtn.classList.toggle('show-password', isPassword);

      passwordBtn.setAttribute('aria-label', isPassword ? 'Скрыть пароль' : 'Показать пароль');
  });
}
