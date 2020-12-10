let hiddenLink = document.querySelectorAll('.hida')
let downArrowDiv = document.querySelector('.aside__navarrow')
let settingsDiv = document.querySelector('.header__stdiv')
let settingSvg = document.querySelector('.header__settings')


downArrowDiv.addEventListener('click', function(){
    for(let i = 0; i < hiddenLink.length; ++i){
        hiddenLink[i].removeAttribute('class')
        hiddenLink[i].setAttribute('class', 'aside__a')
   }
   downArrowDiv.style.display = "none"
})

settingSvg.addEventListener('click', function(){
    settingsDiv.style.display = "block"

})