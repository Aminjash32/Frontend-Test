document.getElementById('hamburger-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.add('show');
});

document.getElementById('close-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
});
