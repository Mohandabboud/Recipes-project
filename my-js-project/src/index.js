const user = { "id": 3, "name": "Doe", "age": 26 };
var json = JSON.stringify(user)

// create a user
fetch('http://localhost:3000/users', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: json
})
 .then(response => console.log(response))


 fetch('http://localhost:3000/users')
 .then(response => (response.json()))
 .then(data => console.log(data))
