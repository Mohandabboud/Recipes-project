var firstAPI = "9b19014764264e228cd8cfd7de2b2457";
var secondAPI = "240f675c9ad44d34a96f35d6cb97542d";
var thirdAPI = "1c3d08b06c8e4d0189ef89e62b169eba";
var fourthAPI = "caaf06b217bb42b8987e7cafc76673eb";
var fifthAPI = "b2f27322a1f347379d89b490ed9528e9";
var sixthAPI = "81d2fb7ce8bb447e8d0e372ccf4d79d0";
var seventhAPI = "5dc571ad8c4442e3be0ebea89c223437";
var eighthAPI = "144b024c11254237bd7586886f98dfec";
var ninthApi = "159bac7d7f9f413d931d0a6ee0a32b2e";
var tenthApi = "ee9ef8255c22455e9a3d2678137330d2";
var eleventhApi = "780aeeca39d34a1bab3789be644f5daf";
var ninth = "6c57e3dc41534860aa8c3644fd3f6f23";
var tenth = "86f05ba6bcc64fc2880897e48d47d039";
var bb = "324371cd58984b4f8b37347fb5bf8e1b";
var newa = "25f5501ccd49492fa0397d909e09bfdb";
var extra1= "3cf5412e9a7e49f395cead86319f379c";
var extra2 = "6c8747902ef34b93bd3f3b0c5e4d9fad";
var extra3 = "272ca8c3e071489383d7c2e325ebad56";
var extra4 = "85ef3827db2d4f53968a1829f08ff85e"
var extra5 = "c26605b4bdb44526a8bd96a501deb1e5"




const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("search");
var instruction = [];
var ingredient = [];
fetch(" https://api.spoonacular.com/recipes/"+ myParam +"/information?apiKey="+bb)
.then(response => response.json())
.then( recipe => {
    console.log(recipe)
                var result = document.querySelector(".result");
                console.log(result)
                //var recipes = document.querySelector(".recipe")[0];
               // var description = document.querySelector(".description");
                //console.log(description)
                var image = document.querySelector(".resultImage");
                console.log(image)
                var recipeTime = document.querySelector(".recipe-time");
                console.log(recipeTime)
                var servings = document.querySelector(".servings");
                console.log(servings)
                var ingredients = document.querySelector(".ingredients");
                console.log(ingredients)
                var instructions = document.querySelector(".instructions");
                console.log(instructions)
                image.src = recipe.image;
                //description.innerHTML = recipe.summary;
                recipeTime.innerHTML = "Estimated time: " + recipe.readyInMinutes +" mins";
                servings.innerHTML = "Servings: " + recipe.servings;
                var number = 1;
                recipe.extendedIngredients.forEach( function (item) {
                var p1 = document.createElement("p");
                //instruction[number] = item.originalString;
                p1.innerHTML = number +") " + item.originalString;
                ingredients.appendChild(p1)
                number = number + 1;
                })
               // ingredients.innerHTML = instruction;   
                var number = 1;
                recipe.analyzedInstructions[0].steps.forEach( function (item) {
                var p = document.createElement("p");
                p.innerHTML = number +") " + item.step
                //instruction[number] = item.step;
                number = number + 1;
                instructions.appendChild(p)
            })
           //instructions.innerHTML = instruction
})
/*
fetch(" https://api.spoonacular.com/recipes/"+ myParam +"/information?apiKey="+ fourthAPI)
            .then(response => response.json())
            .then( recipe => { 
                var result = document.getElementsByClassName("result11")[0];
                var imageText = document.createElement("div");
                console.log(recipe)
                var image = document.createElement("img");
                image.className = "resultImage"
                image.src = recipe.image;
                var card2 = document.createElement("div");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                p2.innerHTML = "Estimated time: " + recipe.readyInMinutes +" mins" ;
                p3.innerHTML = "Servings: " + recipe.servings ;  
                var h = document.createElement("h1");
                h.className = "recipeTitle"
                h.innerHTML = recipe.title;
                imageText.className = "imageText"
                var p = document.createElement("p");
                p.className = "pargraph"
                p.innerHTML = recipe.summary;
                result.appendChild(imageText);
                imageText.appendChild(image);
                imageText.appendChild(h);
                imageText.appendChild(p);
                result.appendChild(card2);
                card2.appendChild(p2);
                card2.appendChild(p3);
                console.log(recipe.aggregateLikes)
                console.log(recipe.readyInMinutes)
                console.log(recipe.servings)
                var ingredient = document.createElement("div");
                ingredient.className = "ingredient";
                var directions = document.createElement("div");
                directions.className = "directions"
                var h2 = document.createElement("h2");
                var br = document.createElement("br");
                h2.innerHTML = "Ingredients";
                ingredient.appendChild(h2);
                ingredient.appendChild(br);
                recipe.extendedIngredients.forEach( function (item) {
                    console.log(item.originalString)
                    var p2 = document.createElement("p");
                    p2.innerHTML= item.originalString;
                    result.appendChild(ingredient);
                    ingredient.appendChild(p2);
                })
                    var h3 = document.createElement("h2");
                    h3.innerHTML = "Directions";
                    directions.appendChild(h3);
                    directions.appendChild(br);
                    recipe.analyzedInstructions[0].steps.forEach( function (item) {
                    var p1 = document.createElement("p");
                    console.log(item.step)
                    p1.innerHTML = item.step;
                    result.appendChild(directions);
                    directions.appendChild(p1);
            })

            })
*/

