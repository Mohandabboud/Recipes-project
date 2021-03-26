function myFunction () {
    //var checkBox = document.getElementById("myCheck1");
    //if (checkBox.checked == true){
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=240f675c9ad44d34a96f35d6cb97542d&maxReadyTime=15&number=3")
        .then(response => response.json())
        .then( recipe => { 
                console.log(recipe)
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
//
window.addEventListener("load",myFunction);

function myFunction1 () {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=240f675c9ad44d34a96f35d6cb97542d")
        .then(response => response.json())
        .then( data => {
                console.log(data)
            var number = 0;
            data.results.forEach( function (item) {
            fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=240f675c9ad44d34a96f35d6cb97542d")
            .then(response => response.json())
            .then( recipe => { 
                console.log(recipe)
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