//var firstAPI = "8a07d27c762a4515b4eb63220b517e02";
var secondAPI = "240f675c9ad44d34a96f35d6cb97542d";
//var thirdAPI = "1c3d08b06c8e4d0189ef89e62b169eba";
var fourthAPI = "caaf06b217bb42b8987e7cafc76673eb";
var fifthAPI = "b2f27322a1f347379d89b490ed9528e9";
var sixthAPI = "81d2fb7ce8bb447e8d0e372ccf4d79d0";
var seventhAPI = "5dc571ad8c4442e3be0ebea89c223437";
var eighthAPI = "144b024c11254237bd7586886f98dfec";
var ninth = "6c57e3dc41534860aa8c3644fd3f6f23";
var tenth = "86f05ba6bcc64fc2880897e48d47d039";
var aa = "dce7fdccb5fb4eb8a4541cbd46ac0c57";
var extra1= "3cf5412e9a7e49f395cead86319f379c";
var extra2 = "6c8747902ef34b93bd3f3b0c5e4d9fad";


function time60MinsFunction () {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+ aa +"&maxReadyTime=60&number=10")
    .then(response => response.json())
    .then( data => { 
        data.results.forEach( function (item) {
            fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey="+ aa)
            .then(response => response.json())
            .then( recipe => { 
                var card = document.createElement("div");
                card.className = "card";
                var container = document.createElement("div");
                container.className = "container";
                var image = document.createElement("img")
                image.src = recipe.image;
                image.className = "image01";
                var h = document.createElement("h1");
                h.className ="header1";
                h.innerHTML = recipe.title;
                var p = document.createElement("p");
                p.className = "result-text";
                p.innerHTML = recipe.summary;
                var p1 = document.createElement("p");
                p1.innerHTML = recipe.readyInMinutes + " mins";
                var a = document.createElement("a");
                a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
                a.className = "link11"
                var button = document.createElement("button");
                button.innerHTML = "click here";
                var article = document.createElement("article");
                article.className = "article";
                var table = document.getElementsByClassName("table")[0];
                table.appendChild(card);
                card.appendChild(a);
                a.appendChild(image);
                a.appendChild(container);
                container.appendChild(h);
                container.appendChild(p1);
                a.appendChild(article);
                article.appendChild(p);
                               
            })
        })
        })}

window.addEventListener("load",time60MinsFunction);