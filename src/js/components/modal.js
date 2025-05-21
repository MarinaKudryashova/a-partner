import { modal } from '../_functions'

document.addEventListener('DOMContentLoaded', () => {

  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  if (openModalBtns.length > 0) {
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-graph-path');

        if (target) {
          modal.open(target)
        }
      });
    })
  }
});

