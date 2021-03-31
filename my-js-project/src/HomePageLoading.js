/*
function myFunction () {

    //var checkBox = document.getElementById("myCheck1");
    //if (checkBox.checked == true){
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=bb65d8287d25452e88027fde505806be&maxReadyTime=15&number=3")
        .then(response => response.json())
        .then( recipe => { 
                var fastestFood = document.getElementsByClassName("fastestFood")[0];
                recipe.results.forEach( function (item) {
                    var firstCard = document.createElement("div");
                    firstCard.className = "card";
                    var image = document.createElement("img")
                    image.src = item.image;
                    image.className = "image11";
                    var h = document.createElement("h1");
                    h.innerHTML = item.title;
                    var a = document.createElement("a");
                    a.href = "http://127.0.0.1:8000/description2.html?search="+item.id;
                    a.className = "link11"
                    var article = document.createElement("article");
                    article.className = "article";
                    fastestFood .appendChild(firstCard);
                    firstCard.appendChild(image);
                    article.appendChild(h);
                    firstCard.appendChild(a);
                    a.appendChild(article);
                })
        })

   }
   */
   /*
   console.log(recipe)
   var json = JSON.stringify(recipe)
   console.log(recipe);
   fetch('http://localhost:3000/recipes', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: json
       })
       .then(response =>  console.log(response))
}) 
*/
//
//window.addEventListener("load",myFunction);


function myFunction () {
    fetch("https://api.spoonacular.com/recipes/random?apiKey=240f675c9ad44d34a96f35d6cb97542d&number=20")
    .then(response => response.json())
    .then( data => {
        var number = 0;
        data.recipes.forEach( function (item) {
            fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=240f675c9ad44d34a96f35d6cb97542d")
            .then(response => response.json())
            .then( recipe => { 
                var fastestFood = document.getElementsByClassName("fastestFood")[0];
                if (recipe.readyInMinutes < 45 && number < 1 ) {
                    var firstCard = document.createElement("div");
                    firstCard.className = "card";
                    var image = document.createElement("img")
                    image.src = item.image;
                    image.className = "image10";
                    var h = document.createElement("h1");
                    h.innerHTML = item.title;
                    //var p = document.createElement("p");
                    //p.className = "pargraph"
                    //p.innerHTML = recipe.summary;
                    var a = document.createElement("a");
                    a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
                    a.className = "link11"
                    var article = document.createElement("article");
                    article.className = "article";
                    fastestFood.appendChild(firstCard);
                    firstCard.appendChild(image);
                    //firstCard.appendChild(p);
                    article.appendChild(h);
                    fastestFood.appendChild(a);
                    a.appendChild(article);
                    number = number +1;
                }
            }) 


        })
    })

}
window.addEventListener("load",myFunction);




function myFunction1 () {
fetch("https://api.spoonacular.com/recipes/random?apiKey=240f675c9ad44d34a96f35d6cb97542d&number=20")
.then(response => response.json())
.then( data => {
    var number = 0;
    data.recipes.forEach( function (item) {
    fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=240f675c9ad44d34a96f35d6cb97542d")
    .then(response => response.json())
    .then( recipe => { 
        var easiestFood = document.getElementsByClassName("easiestFood")[0];
       if (recipe.extendedIngredients.length < 7 && number < 2 ) {
        var firstCard = document.createElement("div");
        firstCard.className = "card";
        var image = document.createElement("img")
        image.src = item.image;
        image.className = "image11";
        var h = document.createElement("h1");
        h.innerHTML = item.title;
        var a = document.createElement("a");
        a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
        a.className = "link11"
        var article = document.createElement("article");
        article.className = "article";
        easiestFood.appendChild(firstCard);
        firstCard.appendChild(image);
        article.appendChild(h);
        easiestFood.appendChild(a);
        a.appendChild(article);
        number = number +1;
       }

    })
})
})} 
window.addEventListener("load",myFunction1);

function myFunction2 () {
fetch("https://api.spoonacular.com/recipes/random?apiKey=240f675c9ad44d34a96f35d6cb97542d&number=20")
.then(response => response.json())
.then( data => {
    var number = 0;
    data.recipes.forEach( function (item) {
    fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=240f675c9ad44d34a96f35d6cb97542d")
    .then(response => response.json())
    .then( recipe => { 
        var mostPopular = document.getElementsByClassName("mostPopular")[0];
       if (recipe.aggregateLikes > 200 && number < 2 ) {
        var firstCard = document.createElement("div");
        firstCard.className = "card";
        var image = document.createElement("img")
        image.src = item.image;
        image.className = "image11";
        var h = document.createElement("h1");
        h.innerHTML = item.title;
        var a = document.createElement("a");
        a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
        a.className = "link11"
        var article = document.createElement("article");
        article.className = "article";
        mostPopular.appendChild(firstCard);
        firstCard.appendChild(image);
        article.appendChild(h);
        mostPopular.appendChild(a);
        a.appendChild(article);
        number = number +1;
       }

    })
})
})} 
window.addEventListener("load",myFunction2);

function myFunction3 () {
    fetch("https://api.spoonacular.com/recipes/random?apiKey=240f675c9ad44d34a96f35d6cb97542d&number=4")
    .then(response => response.json())
    .then( data => {
        var number = 0;
        var container = document.getElementsByClassName("flex-container")[1];
        data.recipes.forEach( function (item) {
        var firstCard = document.createElement("div");
        firstCard.className = "card";
        var image = document.createElement("img")
        image.src = data.recipes[number].image;
        image.className = "pic";
        var h = document.createElement("h2");
        h.innerHTML = data.recipes[number].title;
        var a = document.createElement("a");
        a.href = "http://127.0.0.1:8000/description.html?search="+data.recipes[number].id;
        a.className = "link11"
        var article = document.createElement("article");
        article.className = "article";
        container.appendChild(firstCard);
        firstCard.appendChild(image);
        article.appendChild(h);
        firstCard.appendChild(a);
        a.appendChild(article);
        number = number + 1;
    })
    })}

window.addEventListener("load",myFunction3);

//function myFunction () {
//var checkBox = document.getElementById("myCheck1");
//if (checkBox.checked == true){
 /*  fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=25542d9b625e4ec485dfcad49b30e5b8&number=20")
    .then(response => response.json())
    .then( recipe => {
        recipe.results.forEach( function (item) {
        fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=81d2fb7ce8bb447e8d0e372ccf4d79d0")
        .then(response => response.json())
        .then( data => {  var b =  data.extendedIngredients;
                            b.forEach( function (item) {
                            console.log(item.name)
            })

        })
        })
    })
    
*/