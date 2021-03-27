/* function timeFunction () {
        fetch("https://api.spoonacular.com/recipes/random?apiKey=81d2fb7ce8bb447e8d0e372ccf4d79d0&number=20")
        .then(response => response.json())
        .then( data => {
            var number = 0;
            data.recipes.forEach( function (item) {
            fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=81d2fb7ce8bb447e8d0e372ccf4d79d0")
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

*/



function timeFunction4 () {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=cd24179173c64af7a055e59dbc5e9042&maxReadyTime=30&number=10")
        .then(response => response.json())
        .then( data => { 
            data.results.forEach( function (item) {
                fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=cd24179173c64af7a055e59dbc5e9042")
                .then(response => response.json())
                .then( recipe => { console.log(recipe)
                    var card = document.createElement("div");
                    card.className = "card";
                    var container = document.createElement("div");
                    container.className = "container";
                    var image = document.createElement("img")
                    image.src = recipe.image;
                    image.className = "image11";
                    var h = document.createElement("h1");
                    h.innerHTML = recipe.title;
                    var p = document.createElement("p");
                    p.className = "result-text";
                    p.innerHTML = recipe.summary;
                    var a = document.createElement("a");
                    a.href = "http://127.0.0.1:8000/description2.html?search="+item.id;
                    a.className = "link11"
                    var button = document.createElement("button");
                    button.innerHTML = "click here";
                    var article = document.createElement("article");
                    article.className = "article";
                    var table = document.getElementsByClassName("table")[0];
                    table.appendChild(card);
                    card.appendChild(image);
                    article.appendChild(h);
                    article.appendChild(p);
                    card.appendChild(a);
                    
                    a.appendChild(article);
            
                                   
                })
            })
            })}

window.addEventListener("load",timeFunction4);
 
/*
    function timeFunction5 () {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=9b19014764264e228cd8cfd7de2b2457&maxReadyTime=30&number=10")
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

    function timeFunction6 () {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=9b19014764264e228cd8cfd7de2b2457&maxReadyTime=30&number=10")
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
    }*/