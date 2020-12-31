let hiddenLink = document.querySelectorAll('.hida')
let downArrowDiv = document.querySelector('.aside__navarrow')
let settingsDiv = document.querySelector('.header__stdiv')
let settingSvg = document.querySelector('.header__settings')
let themeChanger  = document.querySelector('#themechanger');

downArrowDiv.addEventListener('click', function(){
    for(let i = 0; i < hiddenLink.length; ++i){
        hiddenLink[i].removeAttribute('class')
        hiddenLink[i].setAttribute('class', 'aside__a')
   }
   downArrowDiv.style.display = "none"
})

settingSvg.addEventListener('click', function(){
    if(settingsDiv.style.display == "block")
    settingsDiv.style.display = "none"
    else settingsDiv.style.display = "block"
    
})
themeChanger.onchange = function(){
    if(themeChanger.value == "thm_dark")
    document.body.setAttribute('id', 'dark')
    else if(themeChanger.value == "thm_beauty")
    document.body.setAttribute('id', 'beauty')

}