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
    answers: ["8 million years","12 million years","4 million years","Two days ago"],
    correctAnswer: "8 million years"
},{
    question: "When is it thought that the split between the hominin lineage from gorillas and chimpanzees occured?",
    answers: ["8 million years","12 million years","4 million years","Two days ago"],
    correctAnswer: "8 million years"

}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function(){
        game.counter--;
        $("#timeLapse").html("TIME LEFT: "+game.counter);
        if(game.counter<=0){
            game.timeUp();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);

        $("#questionAnswer").html("<h2>"+questions[game.currentQuestion].question+"</h2>");
        for(var i=0; i<questions[game.currentQuestion].answers.length;i++){
            $("#questionAnswer").append("<br>"+"</br>"+'<button class="answer-button" id="button' 
            + i + '"data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.
                currentQuestion].answers[i]+'</button>');
        }
    },
}