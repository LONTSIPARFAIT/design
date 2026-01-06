document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('mainImg');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Changer l'image principale
            mainImg.src = thumb.src;

            // Gestion de la classe active
            document.querySelector('.thumb.active')?.classList.remove('active');
            thumb.classList.add('active');
        });
    });
});