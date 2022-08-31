
let navLink = document.getElementById("navlinks");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}
let cube = document.querySelector(".image-cube");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let x = 0;

prev.addEventListener("click", () => {
    x +=90;
    cube.style.transform = `rotateY(${x}deg)`;
});
next.addEventListener("click", () => {
    x -=90;
    cube.style.transform = `rotateY(${x}deg)`;
});
setInterval(()=> { x -=90;
  cube.style.transform = `rotateY(${x}deg)`;},10000);
let slideI = 1;
showslides(slideI);
function plus(n){
  showslides(slideI += n);
}
function showslides(n){
  let i;
  let slides = document.getElementsByClassName("portcontn");
  if (n > slides.length){
    slideI = 1
  }
  if (n < 1){
    slideI = slides.length
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  
  slides[slideI - 1].style.display = "block";
}
function activemenu(){
  let active1 = document.getElementsByClassName('active');
  let home = document.getElementById('menu-home');
  let about = document.getElementById('menu-about');
  let service = document.getElementById('menu-service');
  let project = document.getElementById('menu-project');
  let contact = document.getElementById('menu-contact');
  let scrollpos = window.scrollY;
  if(window.innerWidth > 700 && scrollpos < 340){
    home.classList.add('active');
    about.classList.remove('active');
    return;
  } else if(window.innerWidth > 700 && scrollpos < 1350){
    home.classList.remove('active');
    about.classList.add('active');
    service.classList.remove('active');
    return;
  } else if(window.innerWidth > 700 && scrollpos < 1750){
    about.classList.remove('active');
    service.classList.add('active');
    project.classList.remove('active');
    return;
  } else if(window.innerWidth > 700 && scrollpos < 2500){
    service.classList.remove('active');
    project.classList.add('active');
    contact.classList.remove('active');
    return;
  } else if(window.innerWidth > 700 && scrollpos < 3000){
    project.classList.remove('active');
    contact.classList.add('active');
    return;
  } 
  // if((active1 && window.innerWidth < 700 && scrollpos < 600) || active1){
  //   active1.classList.remove('active');
  
  // }
};

window.addEventListener('scroll', activemenu);
window.addEventListener("click", activemenu); 
