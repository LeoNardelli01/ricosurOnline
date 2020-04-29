$(function(){
  //WhatsApp
  var whatsapp = "https://api.whatsapp.com/send?phone=5491150119067&text=Mi%20lista:%20Nombre%20de%20usuario%20%20---%20%20";
  var pedido = [];

  for (var i = 0; i <= localStorage.length - 1; i++) {
    $(".lista").append("<p class='' >" + localStorage.key(i) + "(" + localStorage.getItem(localStorage.key(i)) + ")"+ "</p>");
    pedido[i] = $.trim(localStorage.key(i).replace(/ /g, '%20'));
    pedido[i] += '%20%7C%20';

    whatsapp += pedido[i];

  }

  whatsapp += 'Dirección:%20direccion%20del%20usuario%20136.'
//==========================================================
//Sweet ALERT


//----------------------------------------------------------



//============================================================
// funcion Preparar Pedido


//==============================================================
//btn enviar pedido
        /*
            si pedido esta vacio, el boton enviar esta bloqueado,

        */
  $("#btn-enviar-pedido").click(function(){
    localStorage.clear();
    $(location).attr('href', whatsapp);

  });//fin enviar pedido


}); //fin jquery
