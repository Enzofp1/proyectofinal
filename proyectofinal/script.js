document.addEventListener('DOMContentLoaded',()=>{
const elementosCarousel= document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel,{
    duration:150,
    dist:-80,
    shift: 5,
    padding:5,
    numVisible:3,
    indicators: true,
    noWrap:false
});
});
function saludo() {
    let edad = prompt("Ingrese su edad ");
    if (edad<18) {
      alert("Usted esta entrando bajo su propia responsabilidad al ser menor ");
      
    } 
    
  }
  saludo();
  function Alerta()
  {
    var respuesta= alert("usted esta saliendo de este sitio");
    if(respuesta== true)
    {
        return true;
    }
    else{
        return false;
    }
  }
/*hay un error con el video de youtube, al ponerlo,la alerta de arriba no funciona*/