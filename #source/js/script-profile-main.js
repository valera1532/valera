const textarea2 = document.querySelectorAll('textarea');
const counter2 = document.querySelectorAll('.current');
const maxlength2 = 140;
for (let i = 0; i < textarea2.length; i++) {
    textarea2[i].addEventListener('input', onInput);
    function onInput(event) {
        event.target.value = event.target.value.substr(0, maxlength2);
        const length = event.target.value.length;
        counter2[i].textContent = length;
    };
};

let mainProfileBtns = document.querySelectorAll('.profile-base__group-btn');
let mainProfileBlock = document.querySelectorAll('.profile-content__block');
for (let i = 0; i < mainProfileBtns.length; i++) {
    mainProfileBtns[i].addEventListener('click', () => {
        for (let j = 0; j < mainProfileBtns.length; j++) {
            mainProfileBtns[j].classList.remove('active');
            mainProfileBlock[j].classList.remove('active');
        }
        let mainProfileidBtn = mainProfileBtns[i].getAttribute('data-profile-btn');
        let idBlock = document.querySelector(`[data-profile-block="${mainProfileidBtn}"]`);
        mainProfileBtns[i].classList.add('active');
        idBlock.classList.add('active');
        document.querySelector('.profile-content').classList.add('active');
        if (window.innerWidth < 767) {
            document.querySelector('body').classList.add('lock');
        }
    });
};

let backsBtn = document.querySelectorAll('.profile-main-top__back');
for (let i = 0; i < backsBtn.length; i++) {
    backsBtn[i].addEventListener('click', () => {
        document.querySelector('.profile-content').classList.remove('active');
        document.querySelector('body').classList.remove('lock');
    });
};

openCloseTest('.close-aptitude', '.btn-aptitude', '.profile-test-item-aptitude');
openCloseTest('.close-relationship', '.btn-relationship', '.profile-test-item-relationship');
openCloseTest('.close-results', '.profile-test__closest-next', '.profile-test-item-results');
openCloseTest('.close-color', '.btn-color', '.profile-test-item-color');
openCloseTest('.profile-test-item-big__back', '.btn-big-color', '.profile-test-item-big');

function openCloseTest(close, open, block) {
    document.querySelector(open).addEventListener('click', () => {
        document.querySelector(block).classList.add('active');
    });
    document.querySelector(close).addEventListener('click', () => {
        document.querySelector(block).classList.remove('active');
    });
};



let btnsTest = document.querySelectorAll('.btn-relationship-end');
for (let i = 0; i < btnsTest.length; i++) {
    btnsTest[i].addEventListener("click", () => {
        document.querySelector('.profile-test-item-relationship-end').classList.add('active');
    });
};

document.querySelector('.close-relationship-end').addEventListener("click", () => {
    document.querySelector('.profile-test-item-relationship-end').classList.remove('active');
});
document.querySelector('.close-relationship-end').addEventListener("click", () => {
    document.querySelector('.profile-test-item-relationship-end').classList.remove('active');
});

document.querySelector('.questions-btn label').addEventListener('click', () => {
    document.querySelector('.questions-block').classList.add('active');
    document.querySelector('.questions-btn').classList.add('active');
});
document.querySelector('.questions-btn__shadow').addEventListener('click', () => {
    document.querySelector('.questions-block').classList.remove('active');
    document.querySelector('.questions-btn').classList.remove('active');
    document.querySelector('.questions-btn input').checked = false;
});

document.querySelector('.information-gender').addEventListener('click', () => {
    document.querySelector('.profile-content__gender').classList.add('active');
});

document.querySelector('.information-gender__close').addEventListener('click', () => {
    document.querySelector('.profile-content__gender').classList.remove('active');
});

let btnsSubPhoto = document.querySelectorAll('.photo__setting');
for (let i = 0; i < btnsSubPhoto.length; i++) {
    btnsSubPhoto[i].addEventListener('click', () => {
        document.querySelector('.profile-content__subphoto').classList.add('active');
    });
}

document.querySelector('.close-photo').addEventListener('click', () => {
    document.querySelector('.profile-content__subphoto').classList.remove('active');
});
document.querySelector('.photo__delete').addEventListener('click', () => {
    document.querySelector('.profile__block-accurate-blocking').classList.add('active');
});
document.querySelector('.profile__block-accurate-btns').addEventListener('click', () => {
    document.querySelector('.profile__block-accurate-blocking').classList.remove('active');
});
var rangeSlider = function () {
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
    maxRange = range.attr('max');
    slider.each(function () {
        value.each(function () {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });
        range.on('input', function () {
            $(this).next(value).html(`${this.value}`);
            var val = (this.value - 0) / (maxRange - 0) * 100;
            $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + '%, #ff4460), '
                + 'color-stop(' + val + '%, #b3bacf25)'
                + ')'
            );
        }).trigger('input');
    });
};
rangeSlider();