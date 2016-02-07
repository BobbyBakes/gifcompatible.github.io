var link_to_populate = document.getElementsByClassName("cheatlink");
link_to_populate.addEventListener("hover", function(){
    document.getElementById("cheatframe").src=link_to_populate.src
});