
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thanks for joining Qubibi!";
      setTimeout(() => { msg.innerHTML = ""; }, 3000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
