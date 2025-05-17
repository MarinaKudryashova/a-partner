import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';

document.addEventListener("DOMContentLoaded", (event) => {
  if (isDesktop()) {
    const dropsArr = document?.querySelectorAll('.breadcrumbs-drop');

    dropsArr.forEach((drop) => {
      const link = drop.parentNode.querySelector('.breadcrumbs__link');
      console.log(link);

      link.addEventListener('focus', () => {
        link.classList.add('is-open');
        drop.classList.add('is-open');
      });
      drop.addEventListener('focus', () => {
        link.classList.add('is-open');
        drop.classList.add('is-open');
      });
      link.addEventListener('blur', () => {
        link.classList.remove('is-open');
        drop.classList.remove('is-open');
      });
      drop.addEventListener('blur', () => {
        link.classList.remove('is-open');
        drop.classList.remove('is-open');
      });

      link.addEventListener('mouseenter', () => {
        link.classList.add('is-open');
        drop.classList.add('is-open');
      });
      drop.addEventListener('mouseenter', () => {
        link.classList.add('is-open');
        drop.classList.add('is-open');
      });
      link.addEventListener('mouseleave', () => {
        link.classList.remove('is-open');
        drop.classList.remove('is-open');
      });
      drop.addEventListener('mouseleave', () => {
        link.classList.remove('is-open');
        drop.classList.remove('is-open');
      });

    });
  }
});
