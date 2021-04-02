

function getRecipes() {
    fetch('http://localhost:3000/recipes')
        .then(response =>  response.json())
        .then( recipes => {
            console.log(recipes)
            //var grid = document.querySelector(".grid");
            var cards = document.querySelector(".cards");
            recipes.forEach( function(item) {
            //var title = item.title;
            //var description = item.description;
            var card = document.createElement("div");
            card.className="card";
            //var container = document.createElement(".container");
            //card.className = "card";
            //container.className = "container";
            var image = document.createElement("img")
            image.src = item.image;
            image.className = "image1";
            var h = document.createElement("h1");
            h.className= "imagetitle"
            h.innerHTML = item.title;
            //var p = document.createElement("p");
            //p.className = "result-text";
            //p.innerHTML = item.description;
            var a = document.createElement("a");
            a.href = "http://127.0.0.1:8000/descriptionInsertedRecipes.html?title="+item.title+"&description="+item.description+"&image="+item.image+"&ingredient="+item.ingredient+"&steps="+item.steps;
            a.className = "link11"
            var button = document.createElement("button");
            button.innerHTML = "click here";
            var article = document.createElement("article");
            article.className = "article";
            var table = document.getElementsByClassName("table")[0];
            cards.appendChild(card);
            //card.appendChild(container);
            article.appendChild(h);
           // article.appendChild(p);
            card.appendChild(a);
            a.appendChild(image);
            //container.appendChild(button);
            a.appendChild(article);

            })

        })
}

window.addEventListener("load", getRecipes)