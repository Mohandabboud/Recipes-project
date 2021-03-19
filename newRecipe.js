var ingredients = [];
var recipe = {} ;
recipe.title = ;
recipe.discreption = ;
function create () {
    var body = document.querySelector("body");
    var a = document.querySelector("#ingredient").value
    var p = document.createElement("p")
    p.innerHTML = a;
    body.appendChild(p);
    ingredients.push(a);
    recipe.ingredients = ingredients;
}

var steps = [];
function create1 () {
    var body = document.querySelector("body");
    var a = document.querySelector("#steps").value
    var p = document.createElement("p")
    p.innerHTML = a;
    body.appendChild(p);
    recipe.steps = steps;
}

var button = document.querySelector("#button");
button.addEventListener("click",create);
var button1 = document.querySelector("#button1");

var button3 = document.querySelector("#button3");
button3.addEventListener("click",create1);