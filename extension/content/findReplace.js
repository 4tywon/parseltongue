console.log("Running find and replace.");

const n = 10000
const allText = $('body').text().substring(0, n);

var translations = {
    "terminal": {
        "word": "terminal",
        "translation": "终奌站"
    }
}

const url = "https://parseltongue.lib.id/parseltongue@dev/"
const data = {
    "text": allText,
    "language": "fr",
    "p": 0.30
}
$.post(url, data,
    function(data, status) {
        console.log(data);
        for (var i = 0; i < Object.keys(data).length; i++) {
            const word = Object.keys(data)[i];

            if (data[word].indexOf(word) != -1) {
                // console.log("Skipping", word, data[word])
                continue;
            } else {
                translations[word] = {
                    "word": word,
                    "translation": data[word]
                }
            }
        }

        console.log("Replacing words:");
        console.log(translations);
        replaceWords(translations);
    });

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
    markup.push("<parsel style='color:red'")

    const size = 30;
    var tooltipHTML = `<p>${word}</p>`

    // Feedback button
    tooltipHTML += `<button id='${word}' onclick='log(this, true)'>√</button>`
    tooltipHTML += `<button id='${word}' onclick='log(this, false)'>x</button>`

    markup.push(`title="${tooltipHTML}"`)

    markup.push(`> ${translation} </parsel>`)

    return markup.join('')
}

var replaceWords = function(translations) {
    // Replace every instance of word
    var elements = document.getElementsByTagName('*');

    for (var k = 0; k < Object.keys(translations).length; k++) {
        const translation = translations[Object.keys(translations)[k]]
        console.log(`Completed: ${k}/${Object.keys(translations).length}`);

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];

                // Text
                if (node.nodeType === 3) {
                    var text = node.nodeValue;

                    if (text.indexOf(` ${translation.word} `) != -1) { // If contains
                        console.log(`Found ${translation.word} in ${text}`);

                        const replacedText = text.replace(new RegExp(` ${translation.word} `, 'gi'), replaceWord(translation.word, translation.translation, translation.image));
                        var newNode = document.createElement("SPAN");
                        newNode.innerHTML = replacedText;

                        element.replaceChild(newNode, node);
                        // node.innerHTML = replacedText
                    }
                }
            }
        }
    }

    console.log("Complete");

    $( "parsel" ).tooltip({
        trigger: "click",
        html: "true"
    });
}
