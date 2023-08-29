let headerLinks = document.querySelectorAll('.header-profile__link')
let numLink = document.querySelector('.main').getAttribute('data-header');
headerLinks[numLink].classList.add('active');
console.log(headerLinks[numLink]);

document.querySelector('.chats-body__item.k').addEventListener('click', () => {
    if (window.innerWidth > 900) {
        document.querySelector('.profile-chat.konc').classList.toggle('blc');
        document.querySelector('.profile-chat').classList.toggle('none');
        console.log(1);
    }
});
let chats = document.querySelectorAll('.chats-body__item');
for (let i = 0; i < chats.length; i++) {
    chats[i].addEventListener('click', () => {
        if (chats[i].classList.contains('k')) {
            document.querySelector('.profile-chat.konc').classList.add('active');
            document.querySelector('body').classList.add('lock');
        } else {
            document.querySelector('.profile-chat').classList.add('active');
            document.querySelector('body').classList.add('lock');
            document.querySelector('.profile-chat.konc').classList.remove('blc');
            document.querySelector('.profile-chat').classList.remove('none');
        }
    });
};
document.querySelector('.profile-chat-top__back').addEventListener('click', () => {
    document.querySelector('.profile-chat').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});
document.querySelector('.profile-chat-top__back2').addEventListener('click', () => {
    document.querySelector('.profile-chat.konc').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

document.querySelector('.chats-top__setting').addEventListener('click', () => {
    document.querySelector('.setting-block').classList.toggle('active');
    document.querySelector('.chats-top__setting').classList.toggle('active');
});

let btnTexts = document.querySelectorAll('.profile-meet__item');
for (let i = 0; i < btnTexts.length; i++) {
    btnTexts[i].addEventListener('click', () => {
        btnTexts[i].classList.toggle('active');
    });
}

let btnsMeet = document.querySelectorAll('.btn-meet');
for (let i = 0; i < btnsMeet.length; i++) {
    btnsMeet[i].addEventListener('click', () => {
        document.querySelector('.profile-meet').classList.add('active');
    });
};
document.querySelector('.profile-meet__back').addEventListener('click', () => {
    document.querySelector('.profile-meet').classList.remove('active');
});


document.querySelector('.profile-chat-top__avatar').addEventListener('click', () => {
    document.querySelector('.profile-chat-top-block').classList.toggle('active');
});



document.querySelector('.hidden-block').addEventListener('click', () => {
    document.querySelector('.send-message').classList.remove('active');
    document.querySelector('.hidden-block').classList.remove('active');
});


let smiles = document.querySelectorAll('.profile-chat-bottom-smile__subitem');
for (let i = 0; i < smiles.length; i++) {
    smiles[i].addEventListener('click', () => {
        if (smiles[i].classList.contains('active')) {
            smiles[i].classList.remove('active');
        } else {
            for (let j = 0; j < smiles.length; j++) {
                smiles[j].classList.remove('active');
            }
            smiles[i].classList.add('active');
        }
    });
};


let tabBtns = document.querySelectorAll('.profile-chat-bottom-smile__tab');
let tabBlocks = document.querySelectorAll('.profile-chat-bottom-smile__blc');
for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtns.length; j++) {
            tabBtns[j].classList.remove('active');
            tabBlocks[j].classList.remove('active');
        }
        tabBtns[i].classList.add('active');
        tabBlocks[i].classList.add('active');
    });
};


let btnsSmileBlock = document.querySelectorAll('.profile-chat-bottom__smile');
let blocksSmile = document.querySelectorAll('.profile-chat-bottom-smile');
for (let i = 0; i < btnsSmileBlock.length; i++) {
    btnsSmileBlock[i].addEventListener('click', () => {
        blocksSmile[i].classList.add('active')
    });
    document.querySelector('.profile-chat-bottom-smile__close').addEventListener('click', () => {
        for (let j = 0; j < blocksSmile.length; j++) {
            blocksSmile[j].classList.remove('active')
        }
    });
};


let bodyChatTitles = document.querySelectorAll('.chats-body__title-main');
let bodyChatItems = document.querySelectorAll('.chats-body__items');
document.querySelector('.chats-top__input input').addEventListener('click', () => {
    document.querySelector('.chats-body-top').classList.toggle('active');
    for (let i = 0; i < bodyChatTitles.length; i++) {
        bodyChatTitles[i].classList.toggle('active');
        bodyChatItems[i].classList.toggle('active');
    }
    document.querySelector('.chats-body-search').classList.toggle('active');
});

let itemsChat = document.querySelectorAll('.chats-body__item');
for (let i = 0; i < itemsChat.length; i++) {
    itemsChat[i].addEventListener('click', () => {
        for (let j = 0; j < itemsChat.length; j++) {
            itemsChat[j].classList.remove('check-b');
            itemsChat[j].classList.remove('check');
        }
        if (itemsChat[i - 1]) {
            itemsChat[i - 1].classList.add('check-b');
        }
        itemsChat[i].classList.add('check');
    });
};