const translate = require('translate');
const pos = require('pos');
const random = require('random')

translate.engine = 'google';
translate.key = "never again";

async function translate_(text, lang, p) {
    var words = new pos.Lexer().lex(text);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    var nouns = []
    for (i in taggedWords) {
	var taggedWord = taggedWords[i];
	if (taggedWord[1] == 'NN' && random.float(min = 0, max = 1) < p) {
	    nouns.push(taggedWord[0])
	}
    }
    var query = nouns.join(" , ")
    console.log(query)

    var translated = await translate(query,{from: 'en', to: lang})

    console.log(translated)
    translated = translated.split(",").join("").split(" ")
    var toret= {}

    var step;
    for (step = 0; step < translated.length; step++) {
	toret[nouns[step]] = translated[step]
    }

    return toret
}
