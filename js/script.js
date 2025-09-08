document.addEventListener('DOMContentLoaded', () => {
    const loaderScreen = document.querySelector('.loader-screen');
    const mainContent = document.querySelector('.main-content');


    
    const preventScroll = (e) => e.preventDefault();
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    setTimeout(() => {
        loaderScreen.classList.add('loader-clear');
    }, 0);


    setTimeout(() => {
        loaderScreen.classList.add('loader-hidden');

        mainContent.classList.add('main-content-visible');
        window.removeEventListener('wheel', preventScroll, { passive: false });
        window.removeEventListener('touchmove', preventScroll, { passive: false });
    }, 2000);
});

