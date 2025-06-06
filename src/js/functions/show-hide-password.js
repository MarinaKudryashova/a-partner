export function passwordView() {

  const password = document.querySelector('#password');
  const passwordBtn = document.querySelector('.account-data__password-btn');

  if(!password || !passwordBtn) return;

  passwordBtn.addEventListener('click', function (e) {
      const isPassword = password.type === 'password';

      password.type = isPassword ? 'text' : 'password';
      passwordBtn.classList.toggle('show-password', isPassword);
      passwordBtn.setAttribute('aria-label', isPassword ? 'Скрыть пароль' : 'Показать пароль');
  });
}
