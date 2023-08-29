let moreBtns = document.querySelectorAll('.more__btn');
let moreBlock = document.querySelectorAll('.more-block');
let itemsNews = document.querySelectorAll('.more-block-news__item');
if (window.innerWidth > 767) {
    for (let i = 0; i < moreBlock.length; i++) {
        moreBtns[i].addEventListener('click', () => {
            console.log(1);
            for (let j = 0; j < moreBlock.length; j++) {
                moreBtns[j].classList.remove('active');
                moreBlock[j].classList.remove('active');
            }
            let idBtn = moreBtns[i].getAttribute('data-more-btn');
            let idBlock = document.querySelector(`[data-more-block="${idBtn}"]`);
            moreBtns[i].classList.add('active');
            idBlock.classList.add('active');
        });
    };
    for (let i = 0; i < itemsNews.length; i++) {
        itemsNews[i].addEventListener('click', () => {
            document.querySelector('.more-new').classList.add('active');
        });
    };
    document.querySelector('.more-new__back').addEventListener('click', () => {
        document.querySelector('.more-new').classList.remove('active');
    });
    document.querySelector('.more-banned__back').addEventListener('click', () => {
        document.querySelector('.more-banned').classList.remove('active');
        moreBtns[0].classList.add('active');
        moreBtns[8].classList.remove('active');
        moreBlock[0].classList.add('active');
    });
} else {
    for (let j = 0; j < moreBlock.length; j++) {
        moreBtns[j].classList.remove('active');
        moreBlock[j].classList.remove('active');
    }
    for (let i = 0; i < moreBlock.length; i++) {
        moreBtns[i].addEventListener('click', () => {
            for (let j = 0; j < moreBlock.length; j++) {
                moreBtns[j].classList.remove('active');
                moreBlock[j].classList.remove('active');
            }
            let idBtn = moreBtns[i].getAttribute('data-more-btn');
            let idBlock = document.querySelector(`[data-more-block="${idBtn}"]`);
            idBlock.classList.add('active');
            document.querySelector(`.profile-content`).classList.add('active');
            document.querySelector(`body`).classList.add('lock');
        });
    };
    for (let i = 0; i < itemsNews.length; i++) {
        itemsNews[i].addEventListener('click', () => {
            document.querySelector('.more-new').classList.add('active');
        });
    };
    document.querySelector('.more-new__back').addEventListener('click', () => {
        document.querySelector('.more-new').classList.remove('active');
    });
    moreBackMobile('.more-block__back', 1);
    moreBackMobile('.more-block-news__back', 2);
    moreBackMobile('.more-quest__back', 5);
    moreBackMobile('.more-banned__back', 9);
    moreBackMobile('.more-agreement__back', 10);
    moreBackMobile('.more-rate-current__back', 6);
    moreBackMobile('.more-payment__back', 7);
}
/* document.querySelector('.more-rate-current__back').addEventListener('click', () => {
    document.querySelector('.more-rate-current').classList.remove('active');
    document.querySelector(`.profile-content`).classList.remove('active');
}); */
function moreBackMobile(item, idBlock) {
    document.querySelector(item).addEventListener('click', () => {
        document.querySelector(`.profile-content`).classList.remove('active');
        document.querySelector(`body`).classList.remove('lock');
        setTimeout(() => {
            /*             moreBlock[idBlock].classList.remove('active'); */
            let idBlock2 = document.querySelector(`[data-more-block="${idBlock}"]`);
            idBlock2.classList.remove('active');
        }, 500);
    });
}
function moreBackDesktop() {

}
document.querySelector('.more-block-news__setting').addEventListener('click', () => {
    document.querySelector('.more-block-news__setting').classList.toggle('active');
    document.querySelector('.more-block-news-setting').classList.toggle('active');
});


let btnsEconomy = document.querySelectorAll('.economy-btn');
for (let i = 0; i < btnsEconomy.length; i++) {
    btnsEconomy[i].addEventListener('click', () => {
        for (let j = 0; j < btnsEconomy.length; j++) {
            btnsEconomy[j].classList.remove('active');
        }
        btnsEconomy[i].classList.toggle('active');
    });
};

const mySwiperSubMain2 = new Swiper(".more-rate-select__slider", {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    slideToClickedSlide: true,
    spaceBetween: 200,
    slidesPerGroup: 1,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});




document.querySelector('.more-rate-current__btn').addEventListener('click', () => {
    document.querySelector('.more-rate-select').classList.add('active');
});
document.querySelector('.more-rate-select__back').addEventListener('click', () => {
    document.querySelector('.more-rate-select').classList.remove('active');
});



let btnsSelect = document.querySelectorAll('.economy__content-choice');
for (let i = 0; i < btnsSelect.length; i++) {
    btnsSelect[i].addEventListener('click', () => {
        document.querySelector('.more-rate-present').classList.add('active');
        setTimeout(() => {
            console.log(1);
            document.querySelector('.more-rate-select-ban').classList.add('active');
        }, 1000);
    });
}

document.querySelector('.present-select').addEventListener('click', () => {
    document.querySelector('.more-rate-present').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.more-rate-select-ban').classList.remove('active');
    }, 500);
});


document.querySelector('.present-period').addEventListener('click', () => {
    document.querySelector('.more-rate-period').classList.add('active');
});
document.querySelector('.more-rate-period__back').addEventListener('click', () => {
    document.querySelector('.more-rate-period').classList.remove('active');
});


document.querySelector('.present-suspense').addEventListener('click', () => {
    document.querySelector('.more-rate-suspense').classList.add('active');
});
document.querySelector('.more-rate-suspense__back').addEventListener('click', () => {
    document.querySelector('.more-rate-suspense').classList.remove('active');
});


document.querySelector('.present-remove').addEventListener('click', () => {
    document.querySelector('.more-rate-remove').classList.add('active');
});
document.querySelector('.more-rate-remove__back').addEventListener('click', () => {
    document.querySelector('.more-rate-remove').classList.remove('active');
});



let cardsItem = document.querySelectorAll('.more-payment-item');
for (let i = 0; i < cardsItem.length; i++) {
    cardsItem[i].addEventListener('click', () => {
        document.querySelector('.more-payment-card').classList.add('active')
    });
};
document.querySelector('.more-payment-card__back').addEventListener('click', () => {
    document.querySelector('.more-payment-card').classList.remove('active')
});


