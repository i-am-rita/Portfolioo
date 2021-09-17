// hide all sections except active

(() => {
    const hamburgerBtn = document.querySelector('.hamburger-btn'),
    navMenu = document.querySelector('.nav-menu'),
    closeNavBtn = navMenu.querySelector('.close-nav-menu');

    hamburgerBtn.addEventListener('click', showNavMenu);
    function showNavMenu(){
        navMenu.classList.toggle('open');
    }
})();

// (() => {
//     const sections = document.querySelectorAll(".section");
//     sections.forEach((section) => {
//         if(!section.classList.contains('active')){
//             section.classList.add('hide');
//         }
//     })
// })();

// const toggle = document.querySelector('.close-nav-menu')
// const navigation = document.querySelector('.nav-menu-inner')

// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active')
//     navigation.classList.toggle('active')
// })

// (() => {
//     console.log(hello);
// })();

// function myFunction(){
//     console.log('Rita')
// }

// function to display hamburger menu
// let hamburgerBtn = document.querySelector('.hamburger-btn');
// let navMenu = document.querySelector('.nav-menu')

// navMenu.addEventListener('click', function(event){
//     hamburgerBtn.classList.toggle('active');
// });