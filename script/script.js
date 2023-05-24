const menu = document.querySelector('#menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('active-menu');
    console.log('click')
})