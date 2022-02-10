//slick-slide params
$(document).ready(function(){
    $('.slider__cards').slick({
        dots: true,
        centerPadding: 0,
        accessibility: false,
        // adaptiveHeight: true,
        arrows: false,
});
});


(function () {
    const howCardsTitle = document.querySelectorAll('.how__card-title')

    howCardsTitle.forEach(el => {
        el.addEventListener('click', () => {
            let parent = el.closest('.how__card')
            if (parent.classList.contains('how__open')) {
                parent.classList.remove('how__open')
                let elem = parent.querySelector('.how__card-descr')
                elem.style.display = 'none'
            } else {
                parent.classList.add('how__open')
                let elem = parent.querySelector('.how__card-descr')
                elem.style.display = 'block'
            }
        })
    })
})()
