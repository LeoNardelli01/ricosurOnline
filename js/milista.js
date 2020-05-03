$(function(){
  var whatsapp = "https://api.whatsapp.com/send?phone=5491150119067&text=Pedido%20de:%20Nombre%20de%20usuario%20%20---%20%20";
  var pedido = [];
  var articulos = localStorage.length;

  articulos.toString();
  $("#articulos").text(articulos);

  //BOTONES:

  $("#btn-home").click(function(){
    $(location).attr('href', '../index.html');
  });


  //FUNCIONES
  function eliminarItem(key){
    //preguntar si desea eliminar,

    swal({
      title: "¿Eliminar " +  + "?",
      text: "Lo quitaremos de tu lista de compra",
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
  }; //fin eliminarItem()

  function crearLista(){

    for (var i = 0; i <= localStorage.length - 1; i++) {

      $(".eliminar").append(
        "<tr><th scope='row'>" + "<i id='btn-eliminar' class='fas fa-trash-alt'></i>" + "</th><td>" + localStorage.key(i) + "</td><td>" + localStorage.getItem(localStorage.key(i)) + "</td></tr>"
      );



      pedido[i] = $.trim((localStorage.key(i).replace(/ /g, '%20')));
      pedido[i] += '%20%7C%20';
      whatsapp += pedido[i];
    }

    whatsapp += 'Dirección:%20direccion%20del%20usuario%20136.'
  };

  //Cominezo

  crearLista();

//==========================================================

//Eliminar item
$(".eliminar").click(function(){

    //mostrar ventana con el producto seleccionado.
    //mostrar foto y precio del producto.
    // input agregar cantidades
    // btn eliminar producto

});

//----------------------------------------------------------


//==============================================================
//btn enviar pedido
        /*
            si pedido esta vacio, el boton enviar esta bloqueado,

        */
  let timerInterval

  $("#btn-enviar-pedido").click(function(){


      Swal.fire({
        title: '¡Enviando Pedido!',
        html: 'redireccionando a Whatsapp en <b></b>',
        timer: 3500,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('Enviando pedido...')
          localStorage.clear();
          crearLista();

        }
      })
      $(location).attr('href', whatsapp);
  });//fin enviar pedido



}); //fin jquery
