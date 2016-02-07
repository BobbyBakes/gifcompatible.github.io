$(".cheatlink").on('mouseover', function(e){
  $("#cheatframe").attr("src", $(this).attr("href"));
  $("#cheatframe").show();
})