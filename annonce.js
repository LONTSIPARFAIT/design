document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('mainImg');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImg.src = thumb.src;
            document.querySelector('.thumb.active')?.classList.remove('active');
            thumb.classList.add('active');
        });
    });
});