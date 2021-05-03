const mainBody = document.querySelector('main')
const header = document.querySelector('header')
const mainMenu = document.querySelector('header ul');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const positionHeader = document.querySelector('header')
const activeTittle1 = document.querySelector(".faq-qa-container1 .qa-tittle")
const activeHeader1 = document.querySelector(".faq-qa-container1 h4")
const activeContent1 = document.querySelector(".faq-qa-container1 .qa-content")
const minusIcon1 = document.querySelector('.faq-qa-container1 .minus-icon')
const plusIcon1 = document.querySelector('.faq-qa-container1 .plus-icon')
// Faq section set querySelector
const activeTittle2 = document.querySelector(".faq-qa-container2 .qa-tittle")
const activeHeader2 = document.querySelector(".faq-qa-container2 h4")
const activeContent2 = document.querySelector(".faq-qa-container2 .qa-content")
const minusIcon2 = document.querySelector('.faq-qa-container2 .minus-icon')
const plusIcon2 = document.querySelector('.faq-qa-container2 .plus-icon')

const mediaQuery = window.matchMedia('(max-width: 800px)')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',toggleNav);
activeTittle2.addEventListener('click',active2);
activeTittle1.addEventListener('click',active);



// Faq section 2 eventListener



function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.classList.remove('d-none')
    positionHeader.style.position = 'absolute'
}


function close(){
    mainMenu.style.top = '-100%';
    mainMenu.style.display = 'none'
    positionHeader.style.position = 'relative'
}


function toggleNav(){

    if (mediaQuery.matches) {
        console.log('toggle done and dusted')
        mainMenu.classList.add('d-none')
        positionHeader.classList.add('position-relative')

        
    }   
}


function active(){
    if(activeHeader1.classList.contains('header')){
        activeHeader1.classList.add('active')
        activeHeader1.classList.remove('header')
        minusIcon1.classList.add('d-none')
        plusIcon1.classList.remove('d-none')
        activeContent1.classList.remove('d-none')
        console.log('done')
    } else{
        activeHeader1.classList.add('header');
        activeHeader1.classList.remove('active')
        minusIcon1.classList.remove('d-none')
        plusIcon1.classList.add('d-none')
        activeContent1.classList.add('d-none')
    }
}


// Faq section 2 funtion declaration

function active2(){
    if(activeHeader2.classList.contains('header')){
        activeHeader2.classList.add('active')
        activeHeader2.classList.remove('header')
        minusIcon2.classList.add('d-none')
        plusIcon2.classList.remove('d-none')
        activeContent2.classList.remove('d-none')
        console.log('done')
    } else{
        activeHeader2.classList.add('header');
        activeHeader2.classList.remove('active')
        minusIcon2.classList.remove('d-none')
        plusIcon2.classList.add('d-none')
        activeContent2.classList.add('d-none')
    }
}