import GraphTabs from 'graph-tabs';
import { isMobile } from '../functions/check-viewport';

document.addEventListener('DOMContentLoaded', function (e) {
  if (document.querySelector('[data-tabs="account-tabs"]')) {
    const tabs = new GraphTabs('account-tabs', {
      isChanged: () => {

        // Функция скрытия и показа h1
        const title = document.querySelector('.account-content__title');
        function toggleAccountTitle(hide) {
          if (title) {
            title.style.display = hide ? 'none' : '';
          }
        }

        // Скрывать меню табов только на мобильных
        if (isMobile()) {
          const tabNav = document.querySelector('.tabs__nav');
          if (tabNav) tabNav.style.display = 'none';

          const activePanel = tabs.container.querySelector('.tabs__panel--active');
          if (activePanel) activePanel.classList.add('force-open');

          // Деактивируем стандартное поведение GraphTabs
          tabs.switchTabs = () => { };

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
          if (tabNav) tabNav.style.display = 'block';

          // Скрываем h1 на мобильных
          toggleAccountTitle(true);
        } else {
          toggleAccountTitle(false);
        }
      }
    });
  }
})
