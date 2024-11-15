// show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // menu show
    // validate if constant exist
    if(navToggle){
        navToggle.addEventListener('click' , ()=>{
            navMenu.classList.add('show-menu')
            // console.log(navToggle)
        })
    }

    // menu hidden
    // validate if constant exist
    if(navClose){
        navClose.addEventListener('click' ,()=>{
            navMenu.classList.remove('show-menu')
            // console.log(navClose)
        })
    }
// remove menu mobile

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we clicked on each nav_link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

// change background header
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when scroll greater than 50 viewport height
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// show sroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when srcoll greater than 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.add('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll selection active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href* = ' + sectionId + ' ]')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// parallax
let parallax = new Rellax('.parallax');

// gsap animation
gsap.from('.home_village', 1.2,{opacity: 0,y: 100,delay: .1})
gsap.from('.home_pine', 1.2,{opacity: 0,y: 150,delay: .3})
gsap.from('.home_mountain-2', 1.2,{opacity: 0,x: 150,delay: .5})
gsap.from('.home_mountain-3', 1.2,{opacity: 0,x: -150,delay: .6})
gsap.from('.home_mountain-1', 1.2,{opacity: 0,y: 250,delay: .7})
gsap.from('.home_moon', 1.2,{opacity: 0,x: 200,delay: .8})
gsap.from('.home_trineo', 1.2,{opacity: 0,x: -200,delay: .8})
gsap.from('.home_title', 1.2,{opacity: 0,y: -60,delay: 1})

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.about_data , .celebrate_img`, {origin: 'right'})
sr.reveal(`.about_img , .celebrate_data`, {origin: 'left'})
sr.reveal(`.send_card`, {origin: 100})
sr.reveal(`.footer`)
