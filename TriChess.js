// menu
const menu = document.querySelector('.menu')
const navUl = document.querySelector('.nav-ul');

menu.addEventListener('click', function() {
    menu.classList.toggle('active')
    navUl.classList.toggle('active')
})

document.querySelectorAll('.nav-a').forEach(n => n.addEventListener('click', function() {
    menu.classList.remove('active');
    navUl.classList.toggle('active');
}))

// scroll

const root = document.documentElement;
const brandElementsDisplayed = getComputedStyle(root).getPropertyValue('--brand-elements-displayed');

const brandContent = document.querySelector('.brand-content');

root.style.setProperty('--brand-elements', brandContent.children.length);

for (let i = 0; i < brandElementsDisplayed; i++) {
    brandContent.appendChild(brandContent.children[i].cloneNode(true))
}

// media query
const brandAni = document.getElementById('brand-ani')
const brandFixed = document.getElementById('brand-fixed')

function screenChange(e) {
    if(e.matches) { // if the screen is above 800px then...
        brandAni.classList.add('hide');
        brandFixed.classList.remove('hide');
    } else { // if the screen is below 800px then...
        brandFixed.classList.add('hide');
        brandAni.classList.remove('hide');
    }
}

const mediaQuery = window.matchMedia('(min-width: 800px)')

mediaQuery.addListener(screenChange)

screenChange(mediaQuery)

// animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hidden2lur = document.querySelectorAll('.hidden2');
hidden2lur.forEach((el) => observer.observe(el));

const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => observer.observe(el));

const slideLeft = document.querySelectorAll('.slide-left');
slideLeft.forEach((el) => observer.observe(el));