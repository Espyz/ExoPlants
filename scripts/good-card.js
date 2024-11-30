const counters = document.querySelectorAll('[data-quantity]');

if (counters) {
    counters.forEach(quantity => {
        quantity.addEventListener('click', e => {
            const target = e.target;
            
            if (target.closest('.counter__button')) {
                let value = parseInt(target.closest('.quantity').querySelector('input').value);
                
                if (target.classList.contains('plus-btn')) {
                    value++;
                }
                else {
                    --value;
                }
                if (value <= 0) {
                    value = 0;
                    
                }
                
                target.closest('.quantity').querySelector('input').value = value;
            }
            
        });
    });
}

const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));

if (selectedCard.photoLink) {
    const image = Array.from(document.querySelectorAll('.img-main'))[0];
    const name = Array.from(document.querySelectorAll('.center'))[0];
    const prices = Array.from(document.querySelectorAll('.price p'));
    
    image.src = selectedCard.photoLink;
    name.innerText = selectedCard.name;
    prices[0].innerText = selectedCard.priceLow;
    
    if (selectedCard.priceHigh) {
        prices[1].innerText = selectedCard.priceHigh
    }
    else {
        prices[1].style.display = 'none'
    }
}