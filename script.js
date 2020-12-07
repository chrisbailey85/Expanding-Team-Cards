let cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', () => {
        // removes active class from all cards
        cards.forEach(card => {
            card.classList.remove('active')
        })
        // adds active class to card that was click
        card.classList.add('active');
    })
})