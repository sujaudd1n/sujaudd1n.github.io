// let hiddenLink = document.querySelectorAll('.hida')
// let downArrowDiv = document.querySelector('.aside__navarrow')
// let settingsDiv = document.querySelector('.header__stdiv')
let settingButton = document.querySelector('.header__settings')
let panel  = document.querySelector('.header__panel');

settingButton.addEventListener('click', function(){
    if(panel.getAttributeNames()[1] === 'hidden')
        panel.removeAttribute('hidden');
    else 
    panel.setAttribute('hidden','');
})