

function timeFunction6 () {
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=caaf06b217bb42b8987e7cafc76673eb&maxReadyTime=60&number=10")
    .then(response => response.json())
    .then( data => { 
        data.results.forEach( function (item) {
            fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=caaf06b217bb42b8987e7cafc76673eb")
            .then(response => response.json())
            .then( recipe => { 
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
                a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
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

window.addEventListener("load",timeFunction6);