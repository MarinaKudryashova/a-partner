import { loadMoreCards } from '../functions/loadMoreCards';

document.addEventListener('DOMContentLoaded', function() {
    const promotionList = document.getElementById('promotionList');
    const allCards = document.querySelectorAll('.promotion-card');
    const loadMoreBtn = document.querySelector('.promotion__more-btn');

    let visibleCount = 9; // Показываем первые 9 карточки
    const loadMoreCount = 9; // Показываем по 9 дополнительные карточки

    loadMoreCards('.promotion-card', loadMoreBtn, visibleCount, loadMoreCount);

});
