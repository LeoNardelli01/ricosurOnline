$(function(){
  //WhatsApp
  var whatsapp = "https://api.whatsapp.com/send?phone=5491165343055&text=";

  var pedido = [];

  for (var i = 0; i <= localStorage.length - 1; i++) {
    $(".lista").append("<p class='text-center' >" + (i+1) + "- " + localStorage.key(i) + "(" + localStorage.getItem(localStorage.key(i)) + ")"+ "</p>");
    pedido[i] = localStorage.key(i).replace(/ /g, '%20');
    pedido[i] += '&#13;';

    whatsapp += pedido[i];
  }

  console.log(whatsapp);
//==========================================================
//Sweet ALERT


//----------------------------------------------------------



//============================================================
// funcion Preparar Pedido
  function prepararPedido(array){
    for (var i = 0; i < array.length; i++) {


    }

  }


//==============================================================
//btn enviar pedido
  $("#btn-enviar-pedido").click(function(){
    prepararPedido(pedido);
  });//fin enviar pedido


}); //fin jquery
