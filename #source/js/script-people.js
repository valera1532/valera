if (document.querySelector('.open-btn')) {
  let openBtnTwo = document.querySelectorAll('.open-btn');
  let openBlockTwo = document.querySelectorAll('.open-block');
  for (let i = 0; i < openBtnTwo.length; i++) {
    openBtnTwo[i].addEventListener('click', () => {
      openBlockTwo[i].classList.toggle('active');
    });
  };
}
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
/* let inputpop = document.querySelectorAll(".fone__pop input");
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
} */


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