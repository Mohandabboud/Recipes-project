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
           /* var p1 = document.createElement("p")
            p1.innerHTML = item.title;
            body.appendChild(p1)
            console.log(item.title)
            console.log(item.id)
            var image = document.createElement("img");
            image.src = item.image;
            body.appendChild(image);*/
            fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=9b19014764264e228cd8cfd7de2b2457")
            .then(response => response.json())
            .then( recipe => { console.log(recipe)
                var p = document.querySelector("#dd");
                    p.innerHTML = recipe.title
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