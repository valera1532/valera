/*------------------------------Слайдер  НАЧАЛО------------------------------------------*/
/* const mySwiperSubMain = new Swiper('.manual__slider', {
    slidesPerView: 1,
    speed: 1500,
    autoplay: {
        delay: 7000,
    },
    slideToClickedSlide: true,
    spaceBetween: 600,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    mousewheel: {
        invert: false,
        releaseOnEdges: true,
    },
}); */
/*------------------------------Слайдер  КОНЕЦ------------------------------------------*/
/*------------------------------ЗУМ на главном экране  НАЧАЛО---------------------------*/
setTimeout(() => {
  document
    .querySelector(".revolutionary__dating-image")
    .classList.add("_active");
}, 1000);
/*------------------------------ЗУМ на главном экране  КОНЕЦ---------------------------*/
/*--------------Открытие поп-апа при нажатии на кнопки красные  НАЧАЛО-----------------*/
let btnsSignUp = document.querySelectorAll(
  ".revolutionary-dating__main-button-try"
);
for (let i = 0; i < btnsSignUp.length; i++) {
  btnsSignUp[i].addEventListener("click", () => {
    document.querySelector(".pup-up__info-gender").classList.add("active");
    document.querySelector("body").classList.add("lock");
  });
}
/*--------------Открытие поп-апа при нажатии на кнопки красные  КОНЕЦ-----------------*/
/*---------------------При смене слайда менять цвет шапки НАЧАЛО----------------------*/
/* mySwiperSubMain.on('slideChange', function () {
    setTimeout(() => {
        if (document.querySelector('.manual-black').classList.contains('swiper-slide-active')) {
            document.querySelector('.manual').classList.add('black');
            document.querySelector('.header').classList.add('whiteL');
            document.querySelector('.header').classList.add('white');
            setTimeout(() => {
                document.querySelector('.manual').classList.add('black-back');
            }, 400);
        } else {
            document.querySelector('.manual').classList.remove('black');
            document.querySelector('.manual').classList.remove('black-back');
            document.querySelector('.header').classList.remove('whiteL');
            document.querySelector('.header').classList.remove('white');
        }
    }, 100);
}) */
/*---------------------При смене слайда менять цвет шапки КОНЕЦ----------------------*/
/* Стоп автоплея слайдера при загрузке страницы */
/* mySwiperSubMain.autoplay.stop(); */
/* старт когда доскролим до автоплея слайдера*/
/* window.addEventListener('scroll', () => {
    const heightViewport = window.screen.availHeight;
    const scrollPosition = window.scrollY;
    if ((heightViewport * 1.8) <= scrollPosition) {
        mySwiperSubMain.autoplay.start()
    }
}); */
/* Создание второго слайдера только при экраннах выше 992 пикселя */
const mySwiperSubMain2 = new Swiper(".economy__content", {
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
    el: ".swiper-pagination2",
    type: "bullets",
    clickable: true,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  /*     mousewheel: {
            invert: false,
            releaseOnEdges: true,
        }, */
});
/* mySwiperSubMain2.mousewheel.disable(); */
/*
let economyTop = document.querySelector('.economy-section').getBoundingClientRect();
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (economyTop.top < scrollPosition) {
        mySwiperSubMain2.mousewheel.enable();
    }
}) */
/*------------------------------Анимация кругов первый экран  НАЧАЛО------------------------------------------*/

let circleContainer = document.getElementById("circle-container");
let circles = [];
let circlesPos = [];
const imagePath = "img/circles/";
const images = [];

preloadIMG = () => {
  for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i];
  }
};

imagesSrc = () => {
  for (let i = 1; i < 15; i++) {
    images.push(`${imagePath + i}.webp`);
  }
  preloadIMG();
};

imagesSrc();

setInterval(() => {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
  let circle = document.createElement("div");
  circle.classList.add("circle");
  const img = document.createElement("img");
  circle.appendChild(img);
  img.src = `${imagePath}${Math.floor(Math.random() * 14) + 1}.webp`;

  const randomSize = Math.floor(Math.random() * 2) + 1;
  const circleSize =
    window.innerWidth < 992 ? 100 + randomSize * 50 : 150 + randomSize * 75;
  let posX =
    Math.floor(Math.random() * (window.innerWidth - circleSize / 2)) + 1;
  let posY = randomInteger(0, window.innerHeight);
  let position = 1;

  /* checkPos = (posX, posY) => {
		let position = 0

		for (let index = 0; index < circlesPos.length; index++) {
			if (circlesPos[index][0] - 150 < posX && posX < circlesPos[index][0] + 150 || circlesPos[index][1] - 150 < posY && posY < circlesPos[index][1] + 150) {
				position = 1
				posX = Math.floor(Math.random() * (window.innerWidth - circleSize / 2)) + 1
				posY = randomInteger(0, window.innerHeight)
			}
			else{
				position = 0
			}
		}
		return position
	}

	while (position) {
		posX = Math.floor(Math.random() * (window.innerWidth - circleSize / 2)) + 1
		posY = randomInteger(0, window.innerHeight)

		position = checkPos(posX, posY)
	} */

  circlesPos.push([posX, posY]);

  circle.style.left = `${posX}px`;
  circle.style.top = `${posY}px`;
  circle.style.width = `${circleSize}px`;
  circle.style.height = `${circleSize}px`;

  circleContainer.appendChild(circle);
  circles.push(circle);

  setTimeout(() => {
    circleContainer.removeChild(circles[0]);
    //circlesPos.shift();
    circles.shift();
  }, 2500);
}, 625);

/* if (window.innerWidth < 992) {
    let circleContainer2 = document.querySelector('.revolutionary-dating__main-section');
    let maxCircleSize2 = 75;
    let maxCircles2 = 2;
    const imagePath2 = 'img/circles/';
    const imageCount2 = 14;
    let circlesCount2 = 0;
    function generateCircle2() {
        if (circlesCount2 < maxCircles2) {
            const circle2 = document.createElement('div');
            circle2.classList.add('circle2');
            console.log(circle2);
            const img2 = document.createElement('img');
            img2.src = `${imagePath2}${Math.floor(Math.random() * imageCount2) + 1}.webp`;
            circle2.appendChild(img2);
            if (window.innerWidth < 992) {
                circle2.style.width = `${150}px`;
                circle2.style.height = `${150}px`;
            } else {
                circle2.style.width = `${300}px`;
                circle2.style.height = `${300}px`;
            }
            const posX2 = Math.floor(Math.random() * (circleContainer2.offsetWidth - 300)) + 1;
            const posY2 = Math.floor(Math.random() * (circleContainer2.offsetHeight - 300)) + 1;
            circle2.style.left = `${posX2}px`;
            circle2.style.top = `${posY2}px`;
            let hiddenBlock = document.querySelector('.revolutionary__dating-image').getBoundingClientRect();
            let hiddenBlock2 = document.querySelector('.revolutionary-dating__main').getBoundingClientRect();
            let hiddenWidth1 = hiddenBlock.left + hiddenBlock.width;
            let hiddenheight1 = hiddenBlock.top + hiddenBlock.height;
            if ((posX2 >= hiddenBlock.left && posX2 <= hiddenWidth1) && (posY2 >= hiddenBlock.top && posY2 <= hiddenheight1)) {
                return;
            }
            circleContainer2.appendChild(circle2);
            circlesCount2++;
            console.log(1);
            setTimeout(() => {
                circle2.classList.add('circle-fade-out');
                setTimeout(() => {
                    circleContainer2.removeChild(circle2);
                    circlesCount2--;
                }, 1000);
            }, 2000);
        }
    }
    setTimeout(() => {
        setInterval(() => {
            generateCircle2();
        }, 500);
    }, 2000);
} */
/*--------------------------Анимация кругов первый экран  КОНЕЦ-------------------------------*/
/*-------------------Анимация текста/блоков/картинок и т.д. НАЧАЛО----------------------------*/
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
/*-------------------Анимация текста/блоков/картинок и т.д. КОНЕЦ----------------------------*/
/*--------------------------------Z index слайдам НАЧАЛО-------------------------------------*/
let slides = document.querySelectorAll(".slide");
for (let i = 0; i < slides.length; i++) {
  slides[i].style.cssText += `z-index: ${i + 1};`;
}
/*--------------------------------Z index слайдам КОНЕЦ-------------------------------------*/
/*-----------------------------Редактирование Header НАЧАЛО---------------------------------*/
function changeSlide() {
  const heightViewport = window.screen.availHeight;
  const scrollPosition = window.scrollY;
  const header = document.querySelector(".header");
  if (window.innerWidth > 992) {
    if (
      heightViewport * 1.35 <= scrollPosition &&
      heightViewport * 2.7 >= scrollPosition
    ) {
      header.classList.add("white");
      header.classList.add("whiteL");
    } else if (
      heightViewport * 2.7 <= scrollPosition &&
      heightViewport * 7.8 >= scrollPosition
    ) {
      header.classList.remove("white");
      header.classList.remove("whiteL");
    } else if (
      heightViewport * 7.8 <= scrollPosition &&
      heightViewport * 8.8 >= scrollPosition
    ) {
      /*  */
      header.classList.add("white");
      header.classList.add("whiteL");
    } else if (
      heightViewport * 8.8 <= scrollPosition &&
      heightViewport * 17.6 >= scrollPosition
    ) {
      header.classList.remove("white");
      header.classList.remove("whiteL");
      /*  */
    } else if (heightViewport >= scrollPosition) {
      header.classList.remove("white");
      header.classList.remove("whiteL");
    } else if (
      heightViewport * 17.6 <= scrollPosition &&
      heightViewport * 18.6 >= scrollPosition
    ) {
      header.classList.add("white");
      header.classList.add("whiteL");
    }
  } else {
    if (
      heightViewport * 3 <= scrollPosition &&
      heightViewport * 4.5 >= scrollPosition
    ) {
      header.classList.add("white");
      header.classList.add("whiteL");
    } else if (
      heightViewport * 4.5 <= scrollPosition &&
      heightViewport * 6.8 >= scrollPosition
    ) {
      header.classList.remove("white");
      header.classList.remove("whiteL");
    } else if (
      heightViewport * 6.8 <= scrollPosition &&
      heightViewport * 7.5 >= scrollPosition
    ) {
      /*  */
      header.classList.add("white");
      header.classList.add("whiteL");
    } else if (
      heightViewport * 7.5 <= scrollPosition &&
      heightViewport * 19.5 >= scrollPosition
    ) {
      header.classList.remove("white");
      header.classList.remove("whiteL");
      /*  */
    } else if (heightViewport * 3 >= scrollPosition) {
      header.classList.remove("white");
      header.classList.remove("whiteL");
    } else if (
      heightViewport * 19.5 <= scrollPosition &&
      heightViewport * 23 >= scrollPosition
    ) {
      header.classList.add("white");
      header.classList.add("whiteL");
    }
  }
}
window.addEventListener("scroll", () => {
  changeSlide();
});
let arrowsDown = document.querySelectorAll(".arrow-down");
for (let i = 0; i < arrowsDown.length; i++) {
  arrowsDown[i].addEventListener("click", () => {
    window.scroll({
      left: 0,
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(window.scrollY + window.innerHeight);
    console.log(document.querySelector(".slide").clientHeight);
  });
}
/*-----------------------------Редактирование Header КОНЕЦ----------------------------------*/
/*----------------------Смена выбранной кнопки на тарифах НАЧАЛО----------------------------*/
let tarifBtns = document.querySelectorAll(".economy-btn");
for (let i = 0; i < tarifBtns.length; i++) {
  tarifBtns[i].addEventListener("click", () => {
    for (let j = 0; j < tarifBtns.length; j++) {
      tarifBtns[j].classList.remove("active");
    }
    tarifBtns[i].classList.add("active");
  });
}
/*----------------------Смена выбранной кнопки на тарифах КОНЕЦ----------------------------*/
/*-------------------------------Скролл вправо НАЧАЛО--------------------------------------*/

/* -----------------------------------+++++++++++++++++++++++++++++++++++++-------------------------------------------------------------------------------- */

window.addEventListener("scroll", () => {
  const mainTop = window.scrollY;
  const mainViewport = window.innerHeight;
  const mainWidth = window.innerWidth;
  let mainScroll;
  if (mainWidth < 992) {
    mainScroll = mainTop - mainViewport * 4.5;
  } else {
    mainScroll = mainTop - mainViewport * 3;
  }
  const slideManual = document.querySelectorAll(".div");
  let maxScroll22 = mainWidth * (slideManual.length - 2);
  if (mainWidth < 992) {
    document.querySelector(".manual").style.minHeight = `${
      (maxScroll22 + mainWidth * 3.5) * 2
    }px`;
  } else {
    document.querySelector(".manual").style.minHeight = `${
      (maxScroll22 + mainWidth * 2) * 0.925
    }px`;
  }
  if (mainWidth < 992) {
    if (mainScroll >= (maxScroll22 + mainWidth) * 2) {
      mainScroll = (maxScroll22 + mainWidth) * 2;
    } else if (mainViewport * 4.5 < mainTop) {
      document.querySelector(".div__block").style.marginLeft = `${
        -mainScroll / 2
      }px`;
    }
  } else {
    if (mainScroll >= maxScroll22 + mainWidth + 80) {
      mainScroll = maxScroll22 + mainWidth + 80;
    } else if (mainViewport * 3 < mainTop) {
      document.querySelector(".div__block").style.marginLeft = `${
        -mainScroll / 1
      }px`;
    }
  }
  const progressBars = document.querySelectorAll(".manual__item-progress");
  let curentSlide = Math.ceil((mainScroll + mainWidth / 2) / mainWidth);
  if (curentSlide > 0) {
    for (let i = 0; i < progressBars.length; i++) {
      progressBars[i].classList.remove("active");
      progressBars[curentSlide - 1].classList.add("active");
      progressBars[i].addEventListener("click", () => {
        nextScroll = curentSlide * mainWidth + mainViewport * 2;
        window.scroll({
          left: 0,
          top: nextScroll,
          behavior: "smooth",
        });
      });
    }
  }
});

/*-------------------------------Скролл вправо КОНЕЦ--------------------------------------*/
/*--------------------------Автоматическая печать текста НАЧАЛО----------------------------*/
class Ticker {
  constructor(name, arr) {
    this.CharTimeout = 70; // скорость печатания
    this.StoryTimeout = 2000; // время ожидания перед переключением
    this.name = name;
    this.arr = arr;
    this.massiveItemCount = Number(arr.length);
    // Определяем значения запуска
    this.CurrentStory = -1;
    this.CurrentLength = 0;
    // Расположение объекта
    this.AnchorObject = document.getElementById(name);
  }
  run() {
    let myTimeout;
    // Переход к следующему элементу
    if (this.CurrentLength == 0) {
      this.CurrentStory++;
      this.CurrentStory = this.CurrentStory % this.massiveItemCount;
      this.StorySummary = this.arr[this.CurrentStory].replace(/"/g, "-");
    }
    // Располагаем текущий текст в анкор с печатанием
    this.AnchorObject.innerHTML = this.StorySummary.substring(
      0,
      this.CurrentLength
    );
    // Преобразуем длину для подстроки и определяем таймер
    if (this.CurrentLength != this.StorySummary.length) {
      this.CurrentLength++;
      myTimeout = this.CharTimeout;
    } else {
      this.CurrentLength = 0;
      myTimeout = this.StoryTimeout;
    }
    // Повторяем цикл с учетом задержки
    setTimeout(this.run.bind(this), myTimeout);
  }
}
var Summaries = new Array();
Summaries[0] = "Знакомств";
Summaries[1] = "Поиска";
Summaries[2] = "Случая";
Summaries[3] = "Встреч";
new Ticker("Ticker", Summaries).run();
var Summaries1 = new Array();
Summaries1[0] = "Знакомств";
Summaries1[1] = "Поиска";
Summaries1[2] = "Случая";
Summaries1[3] = "Встреч";
new Ticker("Tickerx", Summaries1).run();
var Summaries2 = new Array();
Summaries2[0] = "Пару";
Summaries2[1] = "Дизанера";
Summaries2[2] = "Тарелку";
Summaries2[3] = "Миску";
Summaries2[4] = "Чашку";
new Ticker("Ticker1", Summaries2).run();

var Summaries3 = new Array();
Summaries3[0] = "пару";
Summaries3[1] = "тару";
Summaries3[2] = "чашу";
Summaries3[3] = "кота";
Summaries3[4] = "собаку";
new Ticker("Ticker2", Summaries3).run();

var Summaries4 = new Array();
Summaries4[0] = "активности";
Summaries4[1] = "спорта";
Summaries4[2] = "творчества";
Summaries4[3] = "знаний";
new Ticker("Ticker4", Summaries4).run();

var Summaries5 = new Array();
Summaries5[0] = "активности";
Summaries5[1] = "спорта";
Summaries5[2] = "творчества";
Summaries5[3] = "знаний";
new Ticker("Ticker5", Summaries5).run();

/*--------------------------Автоматическая печать текста КОНЕЦ----------------------------*/
/*--------------------------------открытие поп-апа НАЧАЛО---------------------------------*/
document.querySelector(".pup-up__info-repair").addEventListener("click", () => {
  document.querySelector(".pup-up__info-repair-block").classList.add("active");
  document.querySelector("body").classList.add("lock");
});
/*--------------------------------открытие поп-апа КОНЕЦ---------------------------------*/
/*----------------------------открытие датапикера НАЧАЛО---------------------------------*/
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
/*----------------------------открытие датапикера КОНЕЦ---------------------------------*/
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
