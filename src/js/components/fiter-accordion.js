document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.filter-widget[data-accordion]');

  if (accordions.length) {
    const closeAccordion = function(accordion) {
      accordion.classList.remove('is-open');
      const control = accordion.querySelector('[data-accordion-control]');
      const content = accordion.querySelector('[data-accordion-content]');
      control.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
      content.style.maxHeight = null;
    };

    const openAccordion = function(accordion) {
      accordion.classList.add('is-open');
      const control = accordion.querySelector('[data-accordion-control]');
      const content = accordion.querySelector('[data-accordion-content]');
      control.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
      content.style.maxHeight = content.scrollHeight + 'px';
    };

    accordions.forEach((accordion) => {
      const control = accordion.querySelector('[data-accordion-control]');

      control.addEventListener('click', (e) => {
        e.stopPropagation();

        if (accordion.classList.contains('is-open')) {
          closeAccordion(accordion);
        } else {
          openAccordion(accordion);
        }
      });
    });
  }
});




