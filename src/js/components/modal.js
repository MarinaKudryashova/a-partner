import GraphModal from 'graph-modal';
import GraphTabs from 'graph-tabs';

document.addEventListener('DOMContentLoaded', () => {
  const modal = new GraphModal();

  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  if (openModalBtns.length > 0) {
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-graph-path');

      if (target) {
        modal.open(target)
        console.log('Кнопка нажата, target:', btn.getAttribute('data-graph-path'));
      }
    });
    })
  }
});

document.querySelector('[data-graph-modal-close]').addEventListener('click', () => {
  document.querySelector('.graph-modal').classList.remove('is-open');
  document.body.classList.remove('graph-modal-open');
});
