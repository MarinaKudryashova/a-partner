document.addEventListener('DOMContentLoaded', function() {
  const menuBtns = document?.querySelectorAll('[data-section-path]');
  const sections = document?.querySelectorAll('[data-section-content]');

  menuBtns.forEach(btn => {
    if (btn) {
      // window.addEventListener('resize', function() {
        if(window.innerWidth >= 769) {
          menuBtns[0].classList.add('is-active');
          document.querySelector(`[data-section-content="${menuBtns[0].dataset.sectionPath}"]`).classList.remove('is-hidden');
        } else {
          menuBtns[0].classList.remove('is-active');
          document.querySelector(`[data-section-content="${menuBtns[0].dataset.sectionPath}"]`).classList.add('is-hidden');
        }
      // });
      btn.addEventListener('click', function(e) {
         e.preventDefault();
        menuBtns.forEach(i => i.classList.remove('is-active'));
        this.classList.add('is-active');

        sections.forEach(section => section.classList.add('is-hidden'));
        const sectionToShow = document.querySelector(`[data-section-content="${this.dataset.sectionPath}"]`);
        if (sectionToShow) {
          sectionToShow.classList.remove('is-hidden');
        }

        if(window.innerWidth < 769) {
          if(!sectionToShow.classList.contains('is-hidden')) {
            document?.querySelector('.site-container').classList.add('dis-scroll');

          } else {
            document?.querySelector('.site-container')?.classList?.remove('dis-scroll');
          }
        }
      });
    }
  });

});
