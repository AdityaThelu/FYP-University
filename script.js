const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    console.log('Toggle changed. Body class list:', body.classList);
});