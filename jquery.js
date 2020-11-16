$(document).ready(function()
{
  let id_product = 202;
  let qty_product = 2;
  $.ajax({ 
    url: "test.php", 
    // dataType: "json", // Для использования JSON формата получаемых данных
    method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
      data: {"id_product": id_product,"qty_product": qty_product},
        success: function(data) {     
    console.log(data); // Возвращаемые данные выводим в консоль
       } 
 });
}); 