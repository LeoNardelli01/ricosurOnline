$(function(){
  var btn_ingresar = $("#btn-ingresar");
  var btn_registrarse = $("#btn-registrarse")
  var btn_milista = $("#btn-milista");
  // --------------
  var prevScrollpos = window.pageYOffset;

  // SCROLL
  $(document).on('scroll', function(){

    var currentScrollpos = window.pageYOffset;

    if (prevScrollpos < currentScrollpos) {
      $("header").fadeOut('slow');
      console.log("ocultar");

    } else{
      $("header").fadeIn('100');
      console.log("mostrar");
    }
    prevScrollpos = currentScrollpos;
  });


  // BOTONES
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
