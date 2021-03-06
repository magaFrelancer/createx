$(function () {

    const bodyStyles = window.getComputedStyle(document.body);
    const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap')); //get
    const portfolioSlider = new Swiper('.portfolio-section__items', {
        slidesPerView: 3,
        spaceBetween: gap,
        loop: true,
        navigation: {
            nextEl: '.portfolio-section__next',
            prevEl: '.portfolio-section__prev',
        },
    });
    const relatedSlider = new Swiper('.related-projects__items', {
        slidesPerView: 3,
        spaceBetween: gap,
        loop: true,
        navigation: {
            nextEl: '.related-projects__next',
            prevEl: '.related-projects__prev',
        },
    });

    const testimonialsSlider = new Swiper('.testimonials__items', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
    });
    const historySlider = new Swiper('.history-slider', {
        slidesPerView: 1,
        spaceBetween: gap,
        navigation: {
            nextEl: '.history__next',
            prevEl: '.history__prev',
        },
    });
    const historyBtns = document.querySelectorAll('.history-nav__btn');

    historySlider.on('slideChange', function () {
        historyBtns.forEach((el, idx) => {
            el.classList.remove('history-nav__btn--active')
        });
        historyBtns[historySlider.realIndex].classList.add('history-nav__btn--active')
   
    });

    historyBtns.forEach((el, idx) => {

        el.setAttribute('data-index', idx)
        el.addEventListener('click', e => {
            const index = e.currentTarget.getAttribute('data-index');
            historyBtns.forEach((el, idx) => {
                el.classList.remove('history-nav__btn--active')
            });
            e.currentTarget.classList.add('history-nav__btn--active')
            historySlider.slideTo(index)
        })
    })


    // const circleOne = document.querySelector('.facts-element__circle--one-color .progress');
    // const circleTwo = document.querySelector('.facts-element__circle--two-color .progress');
    // const circleThree = document.querySelector('.facts-element__circle--three-color .progress');
    // const circleFour = document.querySelector('.facts-element__circle--four-color .progress');

    // const progressAnimation = (circleItem, circlePrecent) => {
    //     let percentageProgress = circlePrecent;

    //     let radius = circleItem.getAttribute('r');
    //     let circleLength = 2 * Math.PI * radius;

    //     circleItem.setAttribute('stroke-dasharray', circleLength);
    //     circleItem.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
    // }
    // progressAnimation(circleTwo, 70);
    // progressAnimation(circleOne, 80);
    // progressAnimation(circleThree, 40);
    // progressAnimation(circleFour, 56);
    const circles = document.querySelectorAll(".facts-element__circle");

    circles.forEach(el => {


        if (el.dataset.percentage) {
            let progress = el.querySelector('.progress');
            let valueBlock = el.querySelector('.facts-element__value');
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            let full = el.dataset.full;
            let value = el.dataset.value;
            let perecentageProgress = Math.floor(value / full * 100);
            valueBlock.textContent = value
            progress.setAttribute('stroke-dasharray', circleLength);
            progress.setAttribute('stroke-dashoffset', circleLength - circleLength * perecentageProgress / 100);
        } else {
            let progress = el.querySelector('.progress');
            let value = el.querySelector('.facts-element__value');
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            let percent = el.dataset.percent;
            let perecentageProgress = Math.floor(percent);
            value.textContent = percent + '%'
            progress.setAttribute('stroke-dasharray', circleLength);
            progress.setAttribute('stroke-dashoffset', circleLength - circleLength * perecentageProgress / 100);
        }
    });



    const portfolioTabsNavBtn = document.querySelectorAll('.portfolio-tabs-nav__btn');
    const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
    portfolioTabsNavBtn.forEach(item => item.addEventListener('click', changePortfolioTabsNav));

    function changePortfolioTabsNav() {
        const path = this.getAttribute('data-path');

        portfolioTabsNavBtn.forEach(item => item.classList.remove('portfolio-tabs-nav__btn--active'));
        portfolioTabsItems.forEach(item => item.style.display = 'none');

        this.classList.add('portfolio-tabs-nav__btn--active');
        document.querySelectorAll(`[data-target="${path}"]`).forEach(item => {
            item.style.display = 'block';
        });

        if (path === 'all') {
            portfolioTabsItems.forEach(item => {
                item.style.display = 'block';
            });
        }

    }
    const workImages = document.querySelector('.work-images-nav');
    if (workImages) {
        const workSlider = new Swiper(workImages, {
            spaceBetween: 20,
            slidesPerView: 10,
            freeMode: true,
            watchSlidesProgress: true,
        });
        const workSliderNav = new Swiper(".work-images-slider", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".work-images__next",
                prevEl: ".work-images__prev",
            },
            thumbs: {
                swiper: workSlider,
            },
        });
    }


})