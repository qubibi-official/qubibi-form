
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

// 햄버거 메뉴 토글
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// 입자 애니메이션
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random()
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
    if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
  });
  requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();
