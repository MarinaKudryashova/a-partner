// const loadingBtns = document.querySelectorAll('[data-loading-btn]');
// loadingBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     // Show loader on button click
//     btn.classList.add("loading");
//     // Hide loader after success/failure - here it will hide after 2seconds
//     setTimeout(() => btn.classList.remove("loading"), 3000);
//   });
// })

export function loading() {
  const loadingBtns = document.querySelectorAll('[data-loading-btn]');
  loadingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Show loader on button click
      btn.classList.add("loading");
      // Hide loader after success/failure - here it will hide after 2seconds
      setTimeout(() => btn.classList.remove("loading"), 3000);
    });
  })
}
