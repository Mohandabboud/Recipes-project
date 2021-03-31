const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const description = urlParams.get("description");
const images = urlParams.get("image");
const ingredients = urlParams.get("ingredient");
const steps = urlParams.get("steps");
fetch('http://localhost:3000/recipes')
        .then(response =>  response.json())
        .then( recipe => {
                    var result = document.getElementsByClassName("result11")[0];
                    var imageText = document.createElement("div");
                    var image = document.createElement("img");
                    image.className = "resultImage"
                    image.src = images;
                    var h = document.createElement("h1");
                    h.className = "recipeTitle"
                    h.innerHTML = title;
                    imageText.className = "imageText"
                    var p = document.createElement("p");
                    p.className = "pargraph"
                    p.innerHTML = description;
                    result.appendChild(imageText);
                    imageText.appendChild(image);
                    imageText.appendChild(h);
                    imageText.appendChild(p);
                    var ingredient = document.createElement("div");
                    ingredient.className = "ingredient";
                    var h2 = document.createElement("h2");
                    var br = document.createElement("br");
                    h2.innerHTML = "Ingredients";
                    ingredient.appendChild(h2);
                    ingredient.appendChild(br);
                    var p2 = document.createElement("p");
                    p2.innerHTML= ingredients;
                    result.appendChild(ingredient);
                    ingredient.appendChild(p2);
                    var directions = document.createElement("div");
                    directions.className = "directions";
                    var h3 = document.createElement("h2");
                    h3.innerHTML = "Directions";
                    directions.appendChild(h3);
                    directions.appendChild(br);
                    var p1 = document.createElement("p");
                    p1.innerHTML = steps;
                    result.appendChild(directions);
                    directions.appendChild(p1);
                            })