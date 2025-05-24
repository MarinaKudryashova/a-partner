import GraphTabs from 'graph-tabs';
import { isMobile } from '../functions/check-viewport';

document.addEventListener('DOMContentLoaded', function (e) {
  if (document.querySelector('[data-tabs="account-tabs"]')) {
    const tabs = new GraphTabs('account-tabs', {
      isChanged: () => {

      // Скрывать меню табов только на мобильных
        if (isMobile()) {
          const tabNav = document.querySelector('.tabs__nav');
          if (tabNav) tabNav.style.display = 'none';

          const activePanel = tabs.container.querySelector('.tabs__panel--active');
          if (activePanel) activePanel.classList.add('force-open');
        }
      }
    });
  }

  if (isMobile()) {
    // Деактивируем стандартное поведение GraphTabs
    tabs.switchTabs = () => {};

    // Вручную управляем панелями
    document.querySelectorAll('.tabs__nav [data-tab]').forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        document.querySelectorAll('.tabs__panel').forEach(panel => {
          panel.style.display = panel.dataset.tabContent === tabId ? 'block' : 'none';
        });
      });
    });

      // 3. Показываем навигацию
    const tabNav = document.querySelector('.tabs__nav');
    if (tabNav) tabNav.style.display = 'block';
  }
})




    // if (isMobile()) {
    //   setTimeout(() => {
    //     // скрываем панели на мобильных
    //     document.querySelectorAll('.tabs__panel').forEach(panel => {
    //       panel.classList.remove('tabs__panel--active');
    //     });
    //     const tabNav = document.querySelector('.tabs__nav');
    //     if (tabNav) tabNav.style.display = 'block';
    //   }, 0);
    // }

