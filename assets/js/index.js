// ===== BURGER MENU ======

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");



menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})


window.addEventListener('scroll', function(){
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
})






// ===== SLIDES =====

let slides = document.querySelectorAll('.slide-container');
let index = 0;

// function next(){
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length; //Incrémente l'index de la diapositive actuelle. Si l'index atteint la fin du tableau slides, il revient à zéro car .
//     slides[index].classList.add('active');
// }

// function prev(){
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
// }


document.querySelector('#next').addEventListener('click', function(){
    slides[index].classList.remove('active');
    index += 1;
    if(index == slides.length){
        index = 0
    }
    slides[index].classList.add('active');
})

document.querySelector('#prev').addEventListener('click', function(){
    slides[index].classList.remove('active');
    index -= 1;
    if(index < 0){
        index = slides.length - 1
    }
    slides[index].classList.add('active');
})







// ===== FEATURED PRODUCT =====

// document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
//     image_1.addEventListener('click', () =>{
//         var src = image_1.getAttribute('src');
//         document.querySelector('.big-image-1').src = src;
//     })
// })

// document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
//     image_2.addEventListener('click', () =>{
//         var src = image_2.getAttribute('src');
//         document.querySelector('.big-image-2').src = src;
//     })
// })

// document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
//     image_3.addEventListener('click', () =>{
//         var src = image_3.getAttribute('src');
//         document.querySelector('.big-image-3').src = src;
//     })
// })

let big1 = document.querySelector('.big-image-1')
let small1 = document.querySelectorAll('.featured-image-1')

small1.forEach((small1, index) =>{
    small1.addEventListener('click', function(){
        big1.src = `/assets/img/paire1-${index + 1}.png`
    })
});

let big2 = document.querySelector('.big-image-2')
let small2 = document.querySelectorAll('.featured-image-2')

small2.forEach((small2, index) =>{
    small2.addEventListener('click', function(){
        big2.src = `/assets/img/paire2-${index + 1}.png`
    })
});

let big3 = document.querySelector('.big-image-3')
let small3 = document.querySelectorAll('.featured-image-3')

small3.forEach((small3, index) =>{
    small3.addEventListener('click', function(){
        big3.src = `/assets/img/paire3-${index + 1}.png`
    })
});