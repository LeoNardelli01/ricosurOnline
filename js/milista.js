$(function(){
  var articulos = localStorage.length;
  articulos.toString();
  $("#articulos").text(articulos);

  //FUNCIONES
  function eliminarItem(item){
    //preguntar si desea eliminar,
    swal({
      title: "¿Eliminar ?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });


    localStorage.removeItem(item.key)
  };




  //WhatsApp
  var whatsapp = "https://api.whatsapp.com/send?phone=5491150119067&text=Pedido%20de:%20Nombre%20de%20usuario%20%20---%20%20";
  var pedido = [];

  for (var i = 0; i <= localStorage.length - 1; i++) {



    $(".lista").append("<p class=''>" + localStorage.key(i) + "</p>");

    $(".precio-venta").append("<p class='text-right'>" + localStorage.getItem(localStorage.key(i)) + "</p>" );
    //$(".eliminar").append("");

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
