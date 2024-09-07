// Check if the viewport width is at least 600px
const mediaQuery = window.matchMedia('(min-width: 778px)');

const authorCont = document.querySelector('.article__author');
const shareBtn = authorCont.querySelector('.article__share-btn');
const shareCont = authorCont.querySelector('.article__share-container');
console.log(authorCont, shareBtn, shareCont);
shareBtn.addEventListener("click", () => {
    if(mediaQuery.matches) {
        console.log("!!!");
        shareCont.classList.toggle("article__share-container--active");
        shareBtn.classList.toggle("article__share-btn--active");
    }else {
        authorCont.classList.toggle("article__author--share");
        shareBtn.classList.toggle("article__share-btn--active");
        console.log("clicked");
    }
});
