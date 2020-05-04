$(function(){
  let timerInterval;

  var whatsapp = "https://api.whatsapp.com/send?phone=5491150119067&text=Pedido%20de:%20Nombre%20de%20usuario%20%20---%20%20";
  var pedido = [];
  var articulos = localStorage.length;
  articulos.toString();
  $("#articulos").text(articulos);

  //si no hay articulos, btn enviar pedido disabled
  if (localStorage.length == 0) {
    $("#btn-enviar-pedido").attr('disabled' , true);
  }
  //BOTONES:

  $("#btn-home").click(function(){
    $(location).attr('href', '../index.html');
  });

  //FUNCIONES


  function crearLista(){

    for (var i = 0; i <= localStorage.length - 1; i++) {

      $(".pedido").append(
        "<tr class='eliminar'><th scope='row'>" + "<i id='btn-eliminar' class='fas fa-trash-alt'></i>" + "</th><td>" + localStorage.key(i) + "</td><td>" + localStorage.getItem(localStorage.key(i)) + "</td></tr>"
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

  var item = $(this).children('td:nth-child(2)').text();

  Swal.fire({
  title: 'quitar '+ item + ' ?',
  text: "Podras agregarlo luego!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Quitarlo!'
  }).then((result) => {
    if (result.value) {
      localStorage.removeItem(item);

      Swal.fire(
        'Eliminado',
        'Lo has quitado de tu lista.',
        'success'
      )
      location.reload();
    }

  });

});

//----------------------------------------------------------


//==============================================================
//btn enviar pedido
        /*
            si pedido esta vacio, el boton enviar esta bloqueado,

        */


  $("#btn-enviar-pedido").click(function(){


      Swal.fire({
        title: '¡Enviando Pedido!',
        html: 'redireccionando a Whatsapp en <b></b>',
        timer: 3300,
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

          localStorage.clear();

          $(location).attr('href', whatsapp);

        }
      })


  });//fin enviar pedido



}); //fin jquery
