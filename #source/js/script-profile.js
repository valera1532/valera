const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

if (document.querySelector('.header-profile__link')) {
    let headerLinks = document.querySelectorAll('.header-profile__link');
    let numLink = document.querySelector('.main').getAttribute('data-header');
    headerLinks[numLink].classList.add('active');
}

let lol = document.querySelector('.wrapper').scrollHeight;
if (lol < window.innerHeight) {
    document.querySelector('.wrapper').classList.add('padding');
}


let btns = document.querySelectorAll('.profile-body-questions__btn');
let block = document.querySelectorAll('.profile-body-questions');
let leftBarBtns = document.querySelectorAll('.profile-menu-questions__item');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if (block[i + 1]) {
            btns[i].classList.add('back')
            block[i + 1].classList.add('active');
            block[i].classList.remove('active');
        };
        if (btns[i].hasAttribute('data-change')) {
            leftBarBtns[btns[i].getAttribute('data-change')].classList.add('change');
        }
        if (btns[i].hasAttribute('data-actived')) {
            leftBarBtns[btns[i].getAttribute('data-actived')].classList.add('actived');
        }
    });
};
for (let i = 0; i < leftBarBtns.length; i++) {
    leftBarBtns[i].addEventListener('click', () => {
        if (leftBarBtns[i].classList.contains('actived')) {
            document.querySelector('.profile-body-item.active').classList.remove('active');
            block[leftBarBtns[i].getAttribute('data-quest-id')].classList.add('active');
        }
    });
};








$('.input-file input[type=file]').on('change', function () {
    let file = this.files[0];
    $(this).next().html(file.name);
});


let btnsHobbies = document.querySelectorAll('.profile-body-questions-hobbies__item');
for (let i = 0; i < btnsHobbies.length; i++) {
    btnsHobbies[i].addEventListener('click', () => {
        btnsHobbies[i].classList.toggle('active');
    });
};
if (document.querySelector(".profile-base__suitability-close")) {
    document.querySelector(".profile-base__suitability-close").addEventListener("click", () => {
        document.querySelector(".profile-base__suitability-thought").classList.remove("active");
    });
}
if (document.querySelector(".profile-content__for-setting")) {
    document.querySelector(".profile-content__for-setting").addEventListener("click", () => {
        document.querySelector(".profile-base").classList.add("active");
        document.querySelector(".profile-content").classList.add("none");
    });
}
if (document.querySelector(".profile-base__sett-btn")) {
    document.querySelector(".profile-base__sett-btn").addEventListener("click", () => {
        document.querySelector(".profile-base").classList.remove("active");
        document.querySelector(".profile-content").classList.remove("none");
    });
}


if (document.querySelector('.profile-content__for-love')) {
    document.querySelector('.profile-content__for-love').addEventListener('click', () => {
        document.querySelector('.profile-body-questions__face.one').classList.add('active');
        document.querySelector('.profile-body-questions__face.two').classList.remove('active');
        document.querySelector('.profile-content__for-love').classList.add('profile-content__for-selected');
        document.querySelector('.profile-content__for-friend').classList.remove('profile-content__for-selected');
    });
}
if (document.querySelector('.profile-content__for-friend')) {
    document.querySelector('.profile-content__for-friend').addEventListener('click', () => {
        document.querySelector('.profile-body-questions__face.one').classList.remove('active');
        document.querySelector('.profile-body-questions__face.two').classList.add('active');
        document.querySelector('.profile-content__for-love').classList.remove('profile-content__for-selected');
        document.querySelector('.profile-content__for-friend').classList.add('profile-content__for-selected');
    });
}
let infoBtns = document.querySelectorAll(".profile-body-questions__face-info");
for (let i = 0; i < infoBtns.length; i++) {
    infoBtns[i].addEventListener("click", () => {
        document.querySelector(".profile__block-accurate").classList.add("active");
        document.querySelector(".hidden-block").classList.add("active");
    });
}
document.querySelector(".hidden-block").addEventListener('click', () => {
    document.querySelector(".profile__block-accurate").classList.remove("active");
    document.querySelector(".hidden-block").classList.remove("active");
})


if (document.querySelector(".profile-content__for-friend")) {
    document.querySelector(".profile-content__for-friend").addEventListener("click", () => {
        document.querySelector(".profile-content__reaction-love").classList.remove("active");
        document.querySelector(".profile-content__reaction-friend").classList.add("active");
    });
}


$(document).ready(function () {
    $(".calendar-btn").click(function () {
        $(".datepicker-here").datepicker().data("datepicker").show();
    });
});
$(document).ready(function () {
    $(".datepicker-here").datepicker();
    $(".calendar-btn").click(function (event) {
        event.preventDefault();
    });
});

if (document.querySelector(".datepicker-here")) {
    let inputDate = document.querySelector(".datepicker-here");
    let inputKalendar = document.querySelector(".calendar-btn");
    inputKalendar.addEventListener("click", () => {
        if (!document.querySelector(".datepicker__btn")) {
            document.querySelector(".datepicker--content").insertAdjacentHTML(
                "afterend",
                `
            <button class="datepicker__btn">
                Выбрать
            </butoon>
        `
            );
        }
        setTimeout(() => {
            document.querySelector(".datepicker__btn").addEventListener("click", () => {
                document.querySelector(".datepicker").classList.remove("active");
            });
        }, 200);
    });
    inputDate.addEventListener("click", () => {
        if (!document.querySelector(".datepicker__btn")) {
            document.querySelector(".datepicker--content").insertAdjacentHTML(
                "afterend",
                `
            <button class="datepicker__btn">
                Выбрать
            </butoon>
        `
            );
        }
        setTimeout(() => {
            document.querySelector(".datepicker__btn").addEventListener("click", () => {
                document.querySelector(".datepicker").classList.remove("active");
            });
        }, 200);
    });
}

let inputpop = document.querySelectorAll(".fone__pop input");
let fonepop = document.querySelectorAll(".fone__pop");
for (let i = 0; i < inputpop.length; i++) {
    inputpop[i].addEventListener("click", () => {
        for (let j = 0; j < inputpop.length; j++) {
            inputpop[j].classList.remove("actived");
            fonepop[j].classList.remove("actived");
        }

        inputpop[i].classList.add("actived");
        fonepop[i].classList.add("actived");
    });
}


function initializeSlider(sliderId1, sliderId2, rangeId1, rangeId2, trackClass) {
    let sliderOne = document.getElementById(sliderId1);
    let sliderTwo = document.getElementById(sliderId2);
    let displayValOne = document.getElementById(rangeId1);
    let displayValTwo = document.getElementById(rangeId2);
    let minGap = 0;
    let sliderTrack = document.querySelector(trackClass);
    let sliderMaxValue = sliderOne.max;

    function slideOne() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.textContent = sliderOne.value;
        fillColor();
    }

    function slideTwo() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.textContent = sliderTwo.value;
        fillColor();
    }

    function fillColor() {
        percent1 = (sliderOne.value / sliderMaxValue) * 100;
        percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, rgba(179, 186, 207, 0.3) ${percent1}% , #FF4460 ${percent1}% , #FF4460 ${percent2}%, rgba(179, 186, 207, 0.3) ${percent2}%)`;
    }

    slideOne();
    slideTwo();

    sliderOne.addEventListener("input", slideOne);
    sliderTwo.addEventListener("input", slideTwo);
}

window.onload = function () {
    initializeSlider("slider-1", "slider-2", "range1", "range2", ".slider-track");
    initializeSlider("slider-3", "slider-4", "range3", "range4", ".slider-track1");
    initializeSlider("slider-5", "slider-6", "range5", "range6", ".slider-track2");
};

