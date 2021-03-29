/*
function myFunction () {
    //var checkBox = document.getElementById("myCheck1");
    //if (checkBox.checked == true){
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=159bac7d7f9f413d931d0a6ee0a32b2e&maxReadyTime=15&number=3")
        .then(response => response.json())
        .then( recipe => { 
                console.log(recipe)
                var fastestFood = document.getElementsByClassName("fastestFood")[0];
                recipe.results.forEach( function (item) {
                var firstCard = document.createElement("div");
                firstCard.className = "card";
                var image = document.createElement("img")
                image.src = item.image;
                image.className = "image10";
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
//
window.addEventListener("load",myFunction);

*/
function myFunction () {
        fetch("https://api.spoonacular.com/recipes/random?apiKey=159bac7d7f9f413d931d0a6ee0a32b2e&number=20")



        .then(response => response.json())
        .then( data => {
            var number = 0;

            data.recipes.forEach( function (item) {

            fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=159bac7d7f9f413d931d0a6ee0a32b2e")
            .then(response => response.json())
            .then( recipe => { 
                var fastestFood = document.getElementsByClassName("fastestFood")[0];
               if (recipe.readyInMinutes < 45 && number < 1 ) {
                var firstCard = document.createElement("div");
                firstCard.className = "card";
                var image = document.createElement("img")
                image.src = item.image;
                image.className = "image11";
                var h = document.createElement("h1");
                h.innerHTML = item.title;
                var p = document.createElement("p");
                p.className = "pargraph"
                p.innerHTML = recipe.summary;
                var a = document.createElement("a");
                a.href = "http://127.0.0.1:8000/description2.html?search="+item.id;
                a.className = "link11"
                var article = document.createElement("article");
                article.className = "article";
                fastestFood.appendChild(firstCard);
                firstCard.appendChild(image);
                firstCard.appendChild(p);
                article.appendChild(h);
                fastestFood.appendChild(a);
                a.appendChild(article);
                number = number +1;
               }

            })
        })
        })} 

window.addEventListener("load",myFunction);

function myFunction1 () {
    fetch("https://api.spoonacular.com/recipes/random?apiKey=6b45bdfff904492090397e2e31619b32&number=20")
    .then(response => response.json())
    .then( data => {
            console.log(data)
        var number = 0;
        data.recipes.forEach( function (item) {
        fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=6b45bdfff904492090397e2e31619b32")
        .then(response => response.json())
        .then( recipe => { 
            var easiestFood = document.getElementsByClassName("easiestFood")[0];
           if (recipe.extendedIngredients.length < 7 && number < 3 ) {
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

    fetch("https://api.spoonacular.com/recipes/random?apiKey=159bac7d7f9f413d931d0a6ee0a32b2e&number=20")

    .then(response => response.json())
    .then( data => {
        var number = 0;

        data.recipes.forEach( function (item) {

        fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=159bac7d7f9f413d931d0a6ee0a32b2e")
        .then(response => response.json())
        .then( recipe => { 
            var mostPopular = document.getElementsByClassName("mostPopular")[0];
           if (recipe.aggregateLikes > 200 && number < 3 ) {
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
        fetch("https://api.spoonacular.com/recipes/random?apiKey=159bac7d7f9f413d931d0a6ee0a32b2e&number=4")
        .then(response => response.json())
        .then( data => {
            console.log(data)
            var number = 0;
            var h1 = document.createElement("h1");
            h1.innerHTML = "Recommended Meals for you to try";
            var container = document.getElementsByClassName("flex-container")[0];
            data.recipes.forEach( function (item) {
            var firstCard = document.createElement("div");
            firstCard.className = "card";
            var image = document.createElement("img")
            image.src = data.recipes[number].image;
            image.className = "image11";
            var h = document.createElement("h2");
            h.innerHTML = data.recipes[number].title;
            var a = document.createElement("a");
            a.href = "http://127.0.0.1:8000/description2.html?search="+data.recipes[number].id;
            a.className = "link11"
            var article = document.createElement("article");
            article.className = "article";
            container.appendChild(firstCard);
            firstCard.appendChild(image);
            container.appendChild(h1);
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
        })*/


        