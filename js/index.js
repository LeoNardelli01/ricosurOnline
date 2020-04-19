$(function(){
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

  // SCROLL
  $(document).on('scroll', function(){

    var currentScrollpos = window.pageYOffset;

    if (prevScrollpos <= 50) {
      $("header").fadeIn();
    } else if (prevScrollpos < currentScrollpos) {
      $("header").fadeOut();

    } else{
      $("header").fadeIn();

    }
    prevScrollpos = currentScrollpos;
  });


  // BOTONES
  btn_home.click(function(){
    $(location).attr('href', 'index.html');
  });
  btn_ingresar.click(function(){
    alert("ingresar");
  });
  btn_registrarse.click(function(){
    alert("registrarse");
  });
  btn_milista.click(function(){
    alert("mi lista");
  });



});
