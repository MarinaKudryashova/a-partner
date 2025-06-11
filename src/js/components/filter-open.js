import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';
const btnOpenFilter = document?.querySelector('[data-filer-open]');
const btnCloseFilter = document?.querySelector('.filter__btn-back');
const filter = document?.querySelector('.filter');


btnOpenFilter?.addEventListener('click', (e) => {
  e.stopPropagation();
  btnOpenFilter.dataset.filerOpen = true;
  filter.classList.add('is-open');
});

btnCloseFilter?.addEventListener('click', (e) => {
  e.stopPropagation();
  btnOpenFilter.dataset.filerOpen = false;
  filter.classList.remove('is-open');
});
