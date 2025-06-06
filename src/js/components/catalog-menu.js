import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';
import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

document.addEventListener('DOMContentLoaded', function (e) {
  const btnCatalog = document?.querySelector('.btn-catalog');
  const btnBurger = document?.querySelector('.burger');
  const menuCatalog = document?.querySelector('.catalog-menu');
  const menuLinks = document?.querySelectorAll('.catalog-menu__link');
  const menuItems = document?.querySelectorAll('.catalog-menu__item');
  const menuBtns = document?.querySelectorAll('.catalog-menu__btn-drop');
  const dropdownLinks = document?.querySelectorAll('.dropdown__link');
  const menuList = document?.querySelector('.catalog-menu__list');
  const mobileBack = document?.querySelectorAll('.mobile-back');
  const allMenuLinks = [...menuLinks, ...dropdownLinks];

  const clearClassOpen = () => {
    menuItems.forEach((item)=>{
      item?.classList.remove('is-open');
    });
  }

  const clearClassTransformation = () => {
    menuItems.forEach((item)=>{
      item?.querySelector('.dropdown')?.classList?.remove('transformation');
    });
    menuList?.classList?.remove('transformation');
  }

  const closeCatalog = () => {
    btnCatalog?.classList.remove('is-open');
    menuCatalog?.classList.remove('is-open');
    clearClassOpen();
  }

  const closeBurger = () => {
    btnBurger?.classList.remove('is-open');
    menuCatalog?.classList.remove('is-open');
    clearClassTransformation();
    clearClassOpen();
  }


  if(isDesktop) {
    // Открытие меню при клике Каталог
    btnCatalog.addEventListener('click', (e) => {
      e.stopPropagation();
      btnCatalog.classList.toggle('is-open');
      menuCatalog.classList.toggle('is-open');

      if (btnCatalog.classList.contains('is-open')) {
        disableScroll();
      } else {
        closeCatalog();
        enableScroll();
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener('mouseover', (e)=>{
        clearClassOpen();
        link?.parentNode?.classList?.add('is-open');
      });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
      if (!menuCatalog.contains(e.target) && !btnCatalog.contains(e.target)) {
        closeCatalog();
        enableScroll();
      }
    });

    // Закрытие меню при клике по ссылке
    allMenuLinks.forEach((link)=>{
      link.addEventListener('click', (e) => {
        closeCatalog();
        enableScroll();
      });
    });
  }

  if(isMobile || isTablet) {

    // Открытие меню при клике бургер-меню
    btnBurger.addEventListener('click', (e) => {
      e.stopPropagation();
      btnBurger.classList.toggle('is-open');
      menuCatalog.classList.toggle('is-open');

      if (btnBurger.classList.contains('is-open')) {
          disableScroll();
      } else {
          enableScroll();
          closeBurger();
      }
    });

    menuBtns.forEach((btn) => {
      btn.addEventListener('click', (e)=>{
        clearClassOpen();
        clearClassTransformation();
        btn?.parentNode?.querySelector('.dropdown').classList?.add('transformation');
        menuList.classList?.add('transformation');
      });
    });

    mobileBack.forEach((link) => {
      link.addEventListener('click', (e) => {
        clearClassTransformation();
        menuCatalog.classList.toggle('is-open');
      });
    });

    // Закрытие меню при клике по ссылке
    allMenuLinks.forEach((link)=>{
      link.addEventListener('click', (e) => {
        if (!link.classList.contains('mobile-back')) {
          closeBurger();
          enableScroll();
        }
      });
    });
  }
});
