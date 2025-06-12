import GraphModal from 'graph-modal';

const modal = new GraphModal({
	isOpen: (modal) => {
    if(modal.modalContainer.classList.contains('modal--view-mobile')) {
      modal.modal.classList.add('graph-modal--view-mobile');
    }
	},
});

