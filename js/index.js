// Your code goes here
const logo = document.querySelector('.logo-heading');
const nav = document.querySelector('nav.nav');
const header = document.querySelector('header');
const busImg = document.querySelector('.intro img');
const subHeaders = document.querySelectorAll('h2');
const paragraphs = document.querySelector('p');
const signMeUpButton = document.querySelector('div.btn');
const h4SubHeaders = document.querySelector('h4');
const bottomImg = document.querySelector('.content-destination img');
const mapImg = document.querySelector('.img-content img');
const footer = document.querySelector('footer.footer');
const welcomeHeader = document.querySelector('.intro h2');

//1
//make h2 yellow on double click


subHeaders.forEach(el => {
    el.addEventListener('dblclick', function(item){
        el.style.color = 'yellow'
    })
});


//2
// turn images black and white when cursor goes over image

const allImages = document.querySelectorAll('img');

allImages.forEach(el => {
    el.addEventListener('mouseover', function(item) {
        el.style.filter = 'grayscale(100%)';
    })
});

//3
//use mouseout to take grayscale filter off when mouse goes off image
allImages.forEach(el =>{
    el.addEventListener('mouseout', function(item){
        el.style.filter = 'none'; 
    })
})

//4
logo.addEventListener('mouseover', (e) => {
    logo.style.color = 'blue';
});

//5
//make dark mode on keydown
const fullPage = Array.from(document.getElementsByTagName('*'));

fullPage.forEach(function(item){
    item.addEventListener('keydown', function(el) {
        item.style.background = 'black';
        item.style.color = 'white';
        console.log(fullPage);
    })
});

//6
welcomeHeader.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.currentTarget.style.fontSize = '12rem';
});


//7
//no context menu shown right now
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//     console.log("Show our own menu");
// }, false);

//8
buttons.querySelector('btn')
buttons.addEventListener('click', (event) => {
    console.log("Button was pressed!");
});





// header.addEventListener('scroll', (event) => {
//     item.style.background = 'yellow';
// })










//5
//change header to say "The Best Bus Ever" when you scroll
// const funBusHeading = document.querySelector('.logo-heading');

// funBusHeading.addEventListener('scroll', function(item) {
//     funBusHeading.textContent = "The Best Bus Ever";
// });



//7
//resize -- turn body orange on resize
// window.addEventListener('resize', i => {
//     body.style.backgroundColor = 'orange';
// });

//8
