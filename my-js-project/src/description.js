const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("search");

fetch(" https://api.spoonacular.com/recipes/"+ myParam +"/information?apiKey=de531017b1814de68ac13fbd3f9bf858")
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
                card2.className = "estimated-time"
                p2.className = "time";
                p3.className = "time";
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