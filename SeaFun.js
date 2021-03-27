function ChangeHref() {
var x = document.querySelector("#input").value;
var url = new URL("http://127.0.0.1:8000/searchResult2.html")
url.searchParams.append("search", x)
var b = document.querySelector(".btn")
b.href = url;
//b.setAttribute("onclick", "location.href="+url);
console.log(url)
}


function timeFunction1() {
    var url = new URL("http://127.0.0.1:8000/searchResult3.html")
    var b = document.querySelector("#myForm")
    b.action = url;
}

function timeFunction2() {
    var url = new URL("http://127.0.0.1:8000/searchResult4.html")
    var b = document.querySelector("#myForm")
    b.action = url;
}

function timeFunction3() {
    var url = new URL("http://127.0.0.1:8000/searchResult5.html")
    var b = document.querySelector("#myForm")
    b.action = url;
}