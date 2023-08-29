/* document.querySelector(".profile-reactions__love").addEventListener("click", () => {
    document.querySelector(".profile-content__reaction-love").classList.remove("active");
    document.querySelector(".profile-content__reaction-friend").classList.add("active");
    document.querySelector(".profile-reactions__love button").classList.add("active");
    document.querySelector(".profile-reactions__like button").classList.remove("active");
});
document.querySelector(".profile-reactions__like").addEventListener("click", () => {
    document.querySelector(".profile-content__reaction-love").classList.add("active");
    document.querySelector(".profile-content__reaction-friend").classList.remove("active");
    document.querySelector(".profile-reactions__love button").classList.remove("active");
    document.querySelector(".profile-reactions__like button").classList.add("active");
});
 */

let peopleBtns = document.querySelectorAll('.people-btn');
let peopleBlock = document.querySelectorAll('.people-block');
let baba = document.querySelector(".profile-content__reaction-block2");
for (let i = 0; i < peopleBtns.length; i++) {
    peopleBtns[i].addEventListener('click', () => {
        for (let j = 0; j < peopleBtns.length; j++) {
            peopleBlock[j].classList.remove('active');
            peopleBtns[j].classList.remove('active');
            baba.classList.remove("active");
        };
        peopleBlock[i].classList.add('active');
        peopleBtns[i].classList.add('active');
    });
};






document.querySelector(".profile-content__bloking").addEventListener('click', () => {
    document.querySelector(".profile__block-accurate-blocking").classList.add("active");
    document.querySelector(".hidden-block").classList.add("active");
})
document.querySelector(".hidden-block").addEventListener('click', () => {
    document.querySelector(".profile__block-accurate-blocking1").classList.remove("active");
});


document.querySelector(".btn-no").addEventListener('click', () => {
    document.querySelector(".profile__block-accurate-blocking").classList.remove("active");
})
document.querySelector(".btn-yes").addEventListener('click', () => {
    document.querySelector(".profile__block-accurate-blocking1").classList.add("active");
    document.querySelector(".profile__block-accurate-blocking").classList.remove("active");
})
document.querySelector(".hidden-block").addEventListener('click', () => {
    document.querySelector(".profile__block-accurate").classList.remove("active");
    document.querySelector(".hidden-block").classList.remove("active");
})


let pr = document.querySelectorAll(".profile-body-questions__image-main");
for (let i = 0; i < pr.length; i++) {
    pr[i].addEventListener("click", () => {
        for (let i = 0; i < peopleBlock.length; i++) {
            peopleBlock[i].classList.remove('active');
        }
        baba.classList.add("active");
        document.querySelector('.profile-reactions').classList.add('active');
    });
}
document.querySelector('.profile-content__reaction-top button').addEventListener('click', () => {
    for (let j = 0; j < peopleBtns.length; j++) {
        peopleBlock[j].classList.remove('active');
        peopleBtns[j].classList.remove('active');
        baba.classList.remove("active");
        document.querySelector('.profile-reactions').classList.remove('active');
    };
    peopleBlock[0].classList.add('active');
    peopleBtns[0].classList.add('active');
});


let blurBlcoks = document.querySelectorAll('.profile-content__reaction');
for (let i = 0; i < blurBlcoks.length; i++) {
    document.querySelector('.profile-content__reaction-table-btn').addEventListener('click', () => {
        blurBlcoks[i].classList.remove('blur');
        document.querySelector('.profile-content__reaction-table').classList.add('active');

    });
}