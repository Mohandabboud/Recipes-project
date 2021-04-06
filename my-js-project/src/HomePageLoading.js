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



var firstAPI = "2ba2c15f4efa440e924854a1cfe40f0e";
// var secondAPI = "240f675c9ad44d34a96f35d6cb97542d";
var thirdAPI = "5043547bd22149a0b23cd226635bb777";
var fourthAPI = "8b817e8d4f254bd39de5eba579bc75d2";
var extra1= "666e1a431820453d8f889507e35d9aad";
var extra2 = "839cc95414224f1894b202a93b0bda4c";

var extra3 = "272ca8c3e071489383d7c2e325ebad56";
var extra4 = "85ef3827db2d4f53968a1829f08ff85e";
var extra5 = "c26605b4bdb44526a8bd96a501deb1e5";
var extra6 ="9b19014764264e228cd8cfd7de2b2457";
var extra7 ="240f675c9ad44d34a96f35d6cb97542d";

var seventhAPI = "5dc571ad8c4442e3be0ebea89c223437";
var eighthAPI = "41ee9f837013445ab0c476a6c045e8c1";
var ninth = "28790576903146fba532510e390588fd";
var tenth = "86f05ba6bcc64fc2880897e48d47d039";
var eleAPI = "f68333e004db49c2866855f6269a4b25";
var ei = "067af38265a1477fbfd63dc8ce04eb81";
var thi = "6d5dc518f7b5466f804a6341a50a0580";
var fou = "7ce486be45a448109308699782ff0104";
var si = "6e6b64324202497e9a43e5d8fc22bb3b";
var se = "2e1cf49c91d146b9b258eb00bcd9567c";
var ei = "30ebf32955d54d9e8a69df8246ad2691";

function fastestFood () {
    fetch("https://api.spoonacular.com/recipes/random?apiKey="+extra3 +"&number=20")
    .then(response => response.json())
    .then( data => {
        var number = 0;
        data.recipes.forEach( function (item) {
            fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey="+ extra3)
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
                    //firstCard.appendChild(p);
                    article.appendChild(h);
                    fastestFood.appendChild(a);
                    a.appendChild(image);
                    a.appendChild(article);
                    number = number +1;
                }
            }) 


        })
    })

}
window.addEventListener("load",fastestFood);




function easiestFood () {
fetch("https://api.spoonacular.com/recipes/random?apiKey="+extra4  +"&number=20")
.then(response => response.json())
.then( data => {
    var number = 0;
    data.recipes.forEach( function (item) {
    fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey="+ extra4  )
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
        article.appendChild(h);
        easiestFood.appendChild(a);
        a.appendChild(image);
        a.appendChild(article);
        number = number +1;
       }

    })
})
})} 
window.addEventListener("load",easiestFood);

function mostPopular () {
fetch("https://api.spoonacular.com/recipes/random?apiKey="+extra5+"&number=20")
.then(response => response.json())
.then( data => {
    var number = 0;
    data.recipes.forEach( function (item) {
    fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey="+ extra5)
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
        article.appendChild(h);
        mostPopular.appendChild(a);
        a.appendChild(image);
        a.appendChild(article);
        number = number +1;
       }

    })
})
})} 
window.addEventListener("load",mostPopular);


function random () {
    fetch("https://api.spoonacular.com/recipes/random?apiKey="+ extra6 +"&number=4")
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
        article.appendChild(h);
        firstCard.appendChild(a);
        a.appendChild(image);
        a.appendChild(article);
        number = number + 1;
    })
    })}

window.addEventListener("load",random);

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