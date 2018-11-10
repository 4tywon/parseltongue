$(document).ready(function(){
    $(".btn-primary").click(function(){
        $("parsel").tooltip('show');
    });
    $(".btn-warning").click(function(){
        $("parsel").tooltip('hide');
    });
    $(".btn-success").click(function(){
        $("parsel").tooltip('toggle');
    });
    $(".btn-danger").click(function(){
       $("parsel").tooltip('destroy');
    });
});

var log = function(word, correct) {
    if (correct) {
        console.log(word, "correct");
    } else {
        console.log(word, "incorrect");
    }
}

var replaceWord = function(word, translation) {
    var markup = []
    markup.push("<parsel ")

    const size = 30;
    var tooltipHTML = `<p>${translation}</p>`

    // Feedback button
    var buttonHTML = `<button id='${word}' onclick='log(this, true)'>Yes</button>`
    tooltipHTML += buttonHTML

    markup.push(`title="${tooltipHTML}"`)

    markup.push(`>${translation}</parsel>`)

    return markup.join('')
}

$("#parseltongue").replaceWith(replaceWord("University", "Université"))

$( "parsel" ).tooltip({
    trigger: "click",
    html: "true"
});
