// document.addEventListener("DOMContentLoaded", () => {
//   const message = document.querySelector('.message-success');
//   const timeCloseMessage = 2000;
//   const btnClose = document.querySelector('message-success__bt');

//   document.addEventListener('wpcf7mailsent', function (response) {
//     message?.classList.add('is-open');

//     if(message?.classList.contains('is-open')) {
//       btnClose?.addEventListener('click', (e)=>{
//         clearTimeout(closeMessage);
//         message?.classList.remove('is-open');
//       });
//     }

//     const closeMessage = setTimeout(() => {
//       message?.classList.remove('is-open');
//     }, timeCloseMessage);

//   }, false);


// });
