console.log("page loaded...");

function add (element){
    var rowElement = element.parentElement.parentElement;
    rowElement.remove();
}

function change (){
    var name = document.querySelector("#name");
    name.innerText = "Frodo Baggins";

    var img = document.querySelector('#jane');
    img.src= "images/frodo.pgn.jpg"
}
