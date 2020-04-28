$(function(){

  for (var i = 0; i <= localStorage.length - 1; i++) {
    $(".lista").append("<p class='text-center'>" + localStorage.key(i) + "</p>");
  }

});
