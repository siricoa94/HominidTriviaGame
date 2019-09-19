$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
});

$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
});