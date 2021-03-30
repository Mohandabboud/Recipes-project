function ChangeHref() {
var x = document.querySelector("#input").value;
var url = new URL("http://127.0.0.1:8000/searchBarResult.html")
url.searchParams.append("search", x)
var b = document.querySelector("#btn")
b.href = url;
//b.setAttribute("onclick", "location.href="+url);
console.log(url)
}


function timeFunction1() {
    var url = new URL("http://127.0.0.1:8000/checkBox30MinResult.html")
    var b = document.querySelector("#myForm")
    b.action = url;
}

function timeFunction2() {
    var url = new URL("http://127.0.0.1:8000/checkBox45MinResult.html")
    var b = document.querySelector("#myForm")
    b.action = url;
}

function timeFunction3() {
    var url = new URL("http://127.0.0.1:8000/checkBox60MinResult.html")
    var b = document.querySelector("#myForm")
    b.action = url;
}

/*
const searchBar = document.getElementById("input");
console.log(searchBar)
searchBar.addEventListener("keyup" , (e) =>{
   const searchString = e.target.value;
   const ingredientName =  b.filter( (ingredient) => {
      return (
        ingredient.name.includes(searchString)
      ) 
   })
   console.log(ingredientName)
})
*/
/*
var a = fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=25542d9b625e4ec485dfcad49b30e5b8&number=2")
.then(response => response.json())
.then( recipe => {
    recipe.results.forEach( function (item) {
    fetch(" https://api.spoonacular.com/recipes/"+ item.id +"/information?apiKey=81d2fb7ce8bb447e8d0e372ccf4d79d0")
    .then(response => response.json())
    .then( data => {   var b =  data.extendedIngredients;
                        b.forEach( function (item) {
                        console.log(item.name)
        })

    })
    })
})
*/