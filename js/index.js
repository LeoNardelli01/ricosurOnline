$(function(){
  var articulos = localStorage.length;
  articulos.toString();
  $("#articulos").text(articulos);

  var num = (Math.floor(Math.random() * 9) + 1);

  var whatsapp = "https://api.whatsapp.com/send?phone=5491150119067&text=Hola!%20(consulta%20web):%20";
  var btn_ingresar = $("#btn-ingresar");
  var btn_registrarse = $("#btn-registrarse")
  var btn_milista = $("#btn-milista");
  var btn_home = $("#btn-home");
  var btn_buscar = $("#btn-buscar");
  var btn_ofertas = $("#btn-ofertas");
  var btn_categorias = $("#btn-categorias");
  var btn_contacto = $("#btn-contacto");

  // --------------
  var prevScrollpos = window.pageYOffset;
  var header = $("header");

  var pantalla_uno = $(".pantalla-uno");
  var pantallaUnoHeight = pantalla_uno.outerHeight();
// ----------------

//=================
    // SCROLL
  $(document).on('scroll', function(){
    var currentScrollpos = window.pageYOffset;
    var scrollPorcentaje = (pantallaUnoHeight - window.scrollY) / pantallaUnoHeight;

    //Opacidad de pantalla-uno
    if (scrollPorcentaje >= 0) {
      pantalla_uno.css('opacity', (scrollPorcentaje - 0.05));
    } else{
      pantalla_uno.css('opacity', (scrollPorcentaje + 0.40));
    }

    //fadeOut y fadeIn de header
    if (prevScrollpos <= 50) {
      header.fadeIn();

    } else if (prevScrollpos < currentScrollpos) {
      header.fadeOut();
    } else{
      header.fadeIn();
      header.css('background', 'black');

    }
    prevScrollpos = currentScrollpos;

  }); //end scroll

//====================

  //Velocity
  $(".ofertas").velocity({
    opacity: 1
  }, {
    duration: 1000,
    easing: 'swing'
  });


//==================================================
// SWEET ALERT

// ALERT "producto agregado"
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1100,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});


//=================================================
//FUNCIONES
function agregarProducto(nombre, precio){
  localStorage.setItem(nombre, precio);
}





//==================================================

  // BOTONES redirecciones

  btn_home.click(function(){
    $(location).attr('href', 'index.html');
  });

  btn_ingresar.click(function(){
  Swal.fire('INGRESADO!');
  });

  btn_registrarse.click(function(){
    alert("registrarse");
  });

  btn_milista.click(function(){
    $(location).attr('href', 'html/milista.html');
  });

  btn_contacto.click(function(){
    $(location).attr('href', whatsapp);
  });


  //==================================================
  $(".oferta").click(function(){


    var nombre_prod = $(this).children("p").text();
    var precio_prod = $(this).children("h4").text();


    Swal.fire({
      title: '¿Agregar ' + nombre_prod + '?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, agregar!'
    }).then((result) => {
      if (result.value) {
        Toast.fire({
          icon: 'success',
          title: 'Producto agregado'
        });

        agregarProducto(nombre_prod, precio_prod);
        articulos = localStorage.length;

        $("#articulos").text(articulos);
      }
    });
  }); //fin oferta.click



});
