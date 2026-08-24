const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀︎' : '☾';
}
setTheme(savedTheme || (preferredDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

const score = document.getElementById('score');
let value = 92, direction = 1;
setInterval(() => {
  value += direction;
  if (value >= 96 || value <= 90) direction *= -1;
  score.textContent = value;
}, 900);

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const msg = document.getElementById('formMessage');
  msg.textContent = `✓ Thanks! ${email.value} has been added to the demo waitlist.`;
  email.value = '';
});
