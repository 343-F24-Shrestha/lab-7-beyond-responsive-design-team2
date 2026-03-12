const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const defaultBtn = document.getElementById('default');

darkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('light');
    document.body.classList.add('dark');
});

lightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('dark');
    document.body.classList.add('light');
});

defaultBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('dark', 'light');
});
