let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

let cdsac = 545;




// Rotate my phote
let myPhoto = document.getElementById('myPhoto');


function increaseWidth(){
  myPhoto.style.width = '300px';
  
};

function decreaseWidth(){
  myPhoto.style.width = '250px';
}

myPhoto.addEventListener('mouseover',increaseWidth );
myPhoto.addEventListener('mouseout',decreaseWidth);


function cambiarNombre(nombre, ciudad, gusto){
  let contenido = "Hola mundo";
  return contenido
}

// verificar correo
