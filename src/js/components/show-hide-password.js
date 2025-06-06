function passwordView() {
  const passwordBtn = document?.querySelector('[data-show-password]');
  const password = passwordBtn.parentNode.querySelector('input[type="password"]');

  if(!password || !passwordBtn) return;

  passwordBtn.addEventListener('click', function (e) {
      const isPassword = password.type === 'password';
      const isShowPassword = passwordBtn.dataset.showPassword === 'true';

      password.type = isPassword ? 'text' : 'password';
      passwordBtn.dataset.showPassword = isShowPassword ? false : true;
      passwordBtn.setAttribute('aria-label', isPassword ? 'Скрыть пароль' : 'Показать пароль');
  });
}

passwordView();
