function ChangeHref() {
var x = document.querySelector("#input").value;
var url = new URL("http://127.0.0.1:8000/searchResult.html")
url.searchParams.append("search", x)
var b = document.querySelector(".btn")
b.href = url;
//b.setAttribute("onclick", "location.href="+url);
console.log(url)
}
