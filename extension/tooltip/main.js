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

$( "parsel" ).tooltip({
    trigger: "click",
    html: "true"
});

var replaceWord = function(word, translation, image) {
    var markup = []
    markup.append("<parsel ")

    const size = 30;
    var tooltipHTML = `<p>${translation}</p><img width='${size}' height='${size}' src='${image}' />`
    markup.append(`title="${tooltipHTML}"`)

    markup.append(`>${word}</parsel>`)

    return markup.join('')
}
