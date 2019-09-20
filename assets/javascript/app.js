$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
});

$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
});

$(document).on("click", "#reset", function(){
    game.reset();
});

var questions = [{
    question: "When is it thought that the split between the hominin lineage from gorillas and chimpanzees occured?",
    answers: ["8 million Years","12 million years","4 million years","Two days ago"]
}]