const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("search");
fetch(" https://api.spoonacular.com/recipes/"+ myParam +"/information?apiKey=caaf06b217bb42b8987e7cafc76673eb")
            .then(response => response.json())
            .then( recipe => { 
                var result = document.getElementsByClassName("result11")[0];
                var imageText = document.createElement("div");
                console.log(recipe)
                var image = document.createElement("img");
                image.className = "resultImage"
                image.src = recipe.image;
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
                console.log(recipe.aggregateLikes)
                console.log(recipe.readyInMinutes)
                var ingredient = document.createElement("div");
                ingredient.className = "ingredient";
                var directions = document.createElement("div");
                directions.className = "directions"
                recipe.extendedIngredients.forEach( function (item) {
                    console.log(item.originalString)
                    var p2 = document.createElement("p");
                    p2.innerHTML= item.originalString;
                    result.appendChild(ingredient);
                    ingredient.appendChild(p2);
    
                })
                recipe.analyzedInstructions[0].steps.forEach( function (item) {
                    var p1 = document.createElement("p");
                    console.log(item.step)
                    p1.innerHTML = item.step;
                    result.appendChild(directions);
                    directions.appendChild(p1);
            })

            })