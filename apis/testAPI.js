const url = "https://parseltongue.lib.id/parseltongue@dev"
const data = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo sit amet augue venenatis gravida. Praesent suscipit erat dolor, vitae fringilla nisl condimentum nec. Morbi porta quis lectus ornare tempus. Nunc arcu est, varius in consectetur nec, dignissim a nunc. Donec a orci non lectus porta venenatis. Fusce mattis a sapien ac laoreet. Nulla congue urna id leo varius finibus. Donec viverra vel risus in semper. Sed aliquet vulputate tortor in dapibus. Etiam eget tristique sapien, dignissim aliquet erat. Aliquam dapibus eget est quis aliquet.",
    language: "fr",
    p: 0.1
}

var postData = function(url, data) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data)
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));
