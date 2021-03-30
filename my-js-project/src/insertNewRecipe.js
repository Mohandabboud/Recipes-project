
/*

fetch('http://localhost:3000/recipes/1', {
    method: 'DELETE',
})
.then(response => console.log(response))
*/

function addrecipe() {
var recipe = {} ;
recipe.title = document.querySelector("#title").value;
recipe.image = document.querySelector("#images").value;
recipe.description = document.querySelector("#description").value;
recipe.ingredient = document.querySelector("#ingredient").value;
recipe.steps = document.querySelector("#steps").value;
console.log(recipe);
fetch('http://localhost:3000/recipes', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(recipe)
})
.then(response => { console.log(response)
                    console.log(recipe)
})
}
    
var submit = document.querySelector("#submit");
submit.addEventListener("click" , addrecipe)