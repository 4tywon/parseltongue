console.log("Running find and replace.");

const allText = $('body').text();

translations = {
    "terminal": {
        "word": "terminal",
        "translation": "终奌站",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Appleterminal2.png/300px-Appleterminal2.png"
    }
}

// Send the text to the endpoint to get list of words to translate
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

const url = "https://parseltongue.lib.id/parseltongue@dev/"
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
      text: allText,
      language: "fr",
      p: 0.1
  })
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));


// Tooltip Logic
var log = function(word, correct) {
    if (correct) {
        console.log(word, "correct");
    } else {
        console.log(word, "incorrect");
    }
}

var replaceWord = function(word, translation, image) {
    var markup = []
    markup.push("<parsel ")

    const size = 30;
    var tooltipHTML = `<p>${translation}</p><img width='${size}' height='${size}' src='${image}' />`

    // Feedback button
    var buttonHTML = `<button id='${word}' onclick='log(this, true)'>Yes</button>`
    tooltipHTML += buttonHTML

    markup.push(`title="${tooltipHTML}"`)

    markup.push(`>${translation}</parsel>`)

    return markup.join('')
}

var replaceWords = function(translations) {
    // Replace every instance of word
    var elements = document.getElementsByTagName('*');

    for (var k = 0; k < Object.keys(translations).length; k++) {
        const translation = translations[Object.keys(translations)[k]]

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];

                // Text
                if (node.nodeType === 3) {
                    var text = node.nodeValue;

                    if (text.indexOf(translation.word) != -1) { // If contains
                        console.log(`Found ${translation.word} in ${text}`);
                        const replacedText = text.replace(new RegExp(translation.word, 'gi'), replaceWord(translation.word, translation.translation, translation.image));
                        var newNode = document.createElement("SPAN");
                        newNode.innerHTML = replacedText;

                        console.log(newNode);
                        element.replaceChild(newNode, node);
                        // node.innerHTML = replacedText
                    }
                }
            }
        }
    }

    $( "parsel" ).tooltip({
        trigger: "click",
        html: "true"
    });
}
