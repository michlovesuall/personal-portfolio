window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    const body = document.querySelector('body');

    loader.style.transition = 'opacity 0.5s';

    setTimeout(function() {
        loader.style.opacity = '0';
    }, 0);

    setTimeout(function() {
        loader.style.display = 'none';
    }, 500);

    body.classList.remove('overflow-hidden');

});
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});