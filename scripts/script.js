let counter = 0;
let button = document.createElement("button");
function envio()
{
    let x = document.getElementById("texto");
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    button.innerHTML = "Done";
    button.id = "button"+counter;
    li.appendChild(document.createTextNode(x.value));
    li.appendChild(button)
    li.id = "li"+counter;
    ul.appendChild(li);
    li++;
    counter++;
    x.value = '';
    x.setAttribute()
}
function borrarLista()
{
    let lista = document.getElementById("list");
    lista.innerHTML = "";
}
button.addEventListener("click",function(){
    let idButton = this.id;
    let number = idButton.substring(idButton.length-1);
    let idList = "li"+number;
    let result = document.getElementById(idList).innerHTML.strike();
    let list = document.getElementById(idList).innerHTML = result;
    
});