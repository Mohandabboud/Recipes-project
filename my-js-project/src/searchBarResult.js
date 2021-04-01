   var array = [];
   var number = 0;
   
   const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("search");


    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=dce7fdccb5fb4eb8a4541cbd46ac0c57&includeIngredients="+myParam)
    .then(response => response.json())
    .then( data => {
        console.log(data)
        data.results.forEach( function (item) {
            fetch("https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=dce7fdccb5fb4eb8a4541cbd46ac0c57")
            .then(response => response.json())
            .then( recipe => { console.log(recipe)
                array[number] = recipe;
                number = number + 1;
                var card = document.createElement("div");
                card.className = "card";
                var container = document.createElement("div");
                container.className = "container";
                var image = document.createElement("img")
                image.src = recipe.image;
                image.className = "image01";
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
    })
    console.log(array)

    function thirtyMins () {
        console.log(array)
        var checkBox1 = document.getElementById("myCheck1");
        var table = document.getElementsByClassName("table")[0];
        if (checkBox1.checked == true) {
            table.innerHTML= "";
            array.forEach( function (item) {
                console.log(item)
                if (item.readyInMinutes <= 30) {
                    console.log(item)
                    console.log(item.title)
                    var card = document.createElement("div");
                    card.className = "card";
                    var container = document.createElement("div");
                    container.className = "container";
                    var image = document.createElement("img")
                    image.src = item.image;
                    image.className = "image01";
                    var h = document.createElement("h1");
                    h.innerHTML = item.title;
                    var p = document.createElement("p");
                    p.className = "result-text";
                    p.innerHTML = item.summary;
                    var a = document.createElement("a");
                    a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
                    a.className = "link11"
                    var button = document.createElement("button");
                    button.innerHTML = "click here";
                    var article = document.createElement("article");
                    article.className = "article";
                    var table1 = document.getElementsByClassName("table")[0];
                    table1.appendChild(card);
                    card.appendChild(image);
                    article.appendChild(h);
                    article.appendChild(p);
                    card.appendChild(a);
                    a.appendChild(article);   
                }
        })

        }
    }

    function fortyFiveMins () {
        console.log(array)
        var checkBox2 = document.getElementById("myCheck2");
        var table = document.getElementsByClassName("table")[0];
        if (checkBox2.checked == true) {
            table.innerHTML= "";
            array.forEach( function (item) {
                console.log(item)
                if (item.readyInMinutes <= 45) {
                    console.log(item)
                    console.log(item.title)
                    var card = document.createElement("div");
                    card.className = "card";
                    var container = document.createElement("div");
                    container.className = "container";
                    var image = document.createElement("img")
                    image.src = item.image;
                    image.className = "image01";
                    var h = document.createElement("h1");
                    h.innerHTML = item.title;
                    var p = document.createElement("p");
                    p.className = "result-text";
                    p.innerHTML = item.summary;
                    var a = document.createElement("a");
                    a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
                    a.className = "link11"
                    var button = document.createElement("button");
                    button.innerHTML = "click here";
                    var article = document.createElement("article");
                    article.className = "article";
                    var table1 = document.getElementsByClassName("table")[0];
                    table1.appendChild(card);
                    card.appendChild(image);
                    article.appendChild(h);
                    article.appendChild(p);
                    card.appendChild(a);
                    a.appendChild(article);   
                }
        })

        }
    }

    function sixtyMins () {
        console.log(array)
        var checkBox3 = document.getElementById("myCheck3");
        var table = document.getElementsByClassName("table")[0];
        if (checkBox3.checked == true) {
            table.innerHTML= "";
            array.forEach( function (item) {
                console.log(item)
                if (item.readyInMinutes <= 60) {
                    console.log(item)
                    console.log(item.title)
                    var card = document.createElement("div");
                    card.className = "card";
                    var container = document.createElement("div");
                    container.className = "container";
                    var image = document.createElement("img")
                    image.src = item.image;
                    image.className = "image01";
                    var h = document.createElement("h1");
                    h.innerHTML = item.title;
                    var p = document.createElement("p");
                    p.className = "result-text";
                    p.innerHTML = item.summary;
                    var a = document.createElement("a");
                    a.href = "http://127.0.0.1:8000/description.html?search="+item.id;
                    a.className = "link11"
                    var button = document.createElement("button");
                    button.innerHTML = "click here";
                    var article = document.createElement("article");
                    article.className = "article";
                    var table1 = document.getElementsByClassName("table")[0];
                    table1.appendChild(card);
                    card.appendChild(image);
                    article.appendChild(h);
                    article.appendChild(p);
                    card.appendChild(a);
                    a.appendChild(article);   
                }
        })

        }
    }
/*
    function fortyFiveMins () {
        var checkBox2 = document.getElementById("myCheck2");
        if (checkBox2.checked == true) {}
    }

    function sixtyMins () {
        var checkBox3 = document.getElementById("myCheck3");
        if (checkBox3.checked == true) {}
    }
    */
    var button1 = document.querySelector(".checkbox-button");
    button1.addEventListener("click" , thirtyMins);
    button1.addEventListener("click" , fortyFiveMins);
    button1.addEventListener("click" , sixtyMins);
    
    //a.addEventListener("click",fortyFiveMins);
    //a.addEventListener("click",sixtyMins);

   // var a = document.querySelector(".btn")
   // a.addEventListener("click",searchBar);
    
    
    /*
    function searchBar() {
        fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=9b19014764264e228cd8cfd7de2b2457&ingredients=apples,+flour,+sugar&number=2")
        .then(response => response.json())
        .then( data => console.log(data))
    }
    searchBar();
    */
    
    /* fetch("https://api.spoonacular.com/recipes/716381/analyzedInstructions?apiKey=9b19014764264e228cd8cfd7de2b2457")
            .then(response => response.json())
            .then( recipe => { console.log(recipe)
             forEach.recipe[0]( function (item) {
                 console.log(recipe.steps)
             })
                })        
            */
    
      /*         
    fetch(" https://api.spoonacular.com/recipes/716381/information?apiKey=9b19014764264e228cd8cfd7de2b2457")
    .then(response => response.json())
    .then( recipe => {console.log(recipe)
                       console.log(recipe.aggregateLikes)
                       console.log(recipe.readyInMinutes)
                       console.log(recipe.servings)
                       console.log(recipe.instructions)
                       console.log(recipe.summary)
                       console.log(recipe.analyzedInstructions[0].steps)
                       recipe.analyzedInstructions[0].steps.forEach( function (item) {
                           console.log(item.step)
                                  
                        })
                       console.log(recipe.extendedIngredients) 
                       recipe.extendedIngredients.forEach( function (item) {
                            console.log(item.originalName)
                              
                       })
                       recipe.extendedIngredients.forEach( function (item) {
                       console.log(item.originalString)
                       })
                       
    }) */
/*
    function searchBar() {
        var x = document.querySelector("#input").value;
        if (x) {
        var p = document.createElement("p");
        var body = document.querySelector("body")
        p.innerHTML = x;
        console.log(p);
        body.appendChild(p)
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=9b19014764264e228cd8cfd7de2b2457&includeIngredients="+x)
        .then(response => response.json())
        .then( data => {
            console.log(data)
            var div = document.createElement("div")
            data.results.forEach( function (item) {
                var p1 = document.createElement("p")
                p1.innerHTML = item.title;
                body.appendChild(p1)
                console.log(item.title)
                console.log(item.id)
                var image = document.createElement("img");
                image.src = item.image;
                body.appendChild(image);
                fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=9b19014764264e228cd8cfd7de2b2457")
                .then(response => response.json())
                .then( recipe => { console.log(recipe)
                                   console.log(recipe.title)
                                   console.log(recipe.aggregateLikes)
                                   console.log(recipe.readyInMinutes)
                                   console.log(recipe.servings)
                                   //console.log(recipe.instructions)
                                   console.log(recipe.summary)
                                   //console.log(recipe.analyzedInstructions[0].steps)
                                   recipe.analyzedInstructions[0].steps.forEach( function (item) {
                                       console.log(item.step)
                                              
                                    })
                                   //console.log(recipe.extendedIngredients) 
                                   recipe.extendedIngredients.forEach( function (item) {
                                        console.log(item.originalName)
                                          
                                   })
                                   recipe.extendedIngredients.forEach( function (item) {
                                   console.log(item.originalString)
                                   })
                                   
                })
            })
        })}
        }
        var a = document.querySelector(".btn")
        a.addEventListener("click",searchBar);
        */
