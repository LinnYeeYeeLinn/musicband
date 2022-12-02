$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.fa-bars').toggleClass('fa-times');
        $('.listItem ul').slideToggle(1000);
    });
    $('.listItem ul li a').click(function(){
        $('.listItem ul li a').removeClass('active');
        $(this).addClass('active');
    })
});

const loginForm = document.querySelector('.loginForm');
const moon = document.querySelector('.fa-moon');
const user = document.querySelector('.fa-user');
const close = document.querySelector('.close');
const headerImg = document.querySelector('.headerImg');
const originalImgSrc = headerImg.src;
const imgArray = ['./img/la.jpg', './img/chicago.jpg'];

let counter = 0;
const myFunction = () => {
    headerImg.src = originalImgSrc;
    if(counter === 2){
        counter = 0;
        return;
    }
    const imgLink = imgArray[counter];
    headerImg.src = imgLink;
    counter += 1;
}
setInterval(myFunction,4000);

close.onclick = () => {
    loginForm.style.display = "none";
}
user.onclick = () => {
    loginForm.style.display = "block";
}

moon.onclick = () => {
    moon.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
}

function myDropDown(){
    document.querySelector('.myDropdown').classList.toggle('show');
}