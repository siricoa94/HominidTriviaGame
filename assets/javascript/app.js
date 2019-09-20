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
    question: "Out of the four, which is most closely related to the modern human?",
    answers: ["Ankarapithecus","Chororapithecus","Ouranopithecus","Australopithecus"],
    correctAnswer: "Australopithecus"

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
    nextQuestion: function(){
        game.counter = 30;
        $("#timeLapse").html("<h2>OUT OF TIME</h2>");
        $("#questionAnswer").html("<h3>The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        if(game.currentQuestion == questions.length -1){
            setTimeout(game.results, 3 *1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }

    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#timeLapse").html("<h2>OUT OF TIME</h2>");
        $("#questionAnswer").html("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        if(game.currentQuestion == questions.length -1){
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    results: function(){
        clearInterval(timer);
        $("#questionAnswer").html("ALL DONE!");
        $("#questionAnswer").append("<br>"+"</br>"+"Correct: "+game.correct);
        $("#questionAnswer").append("<br>"+"</br>"+"Incorrect: "+game.incorrect);
        $("#questionAnswer").append("<br>"+"</br>"+"Unanswered: "+game.unanswered);
        $("#questionAnswer").append("<br>"+"</br>"+"<button id='reset'>RESET</button>");
    },
    clicked: function(e){
        clearInterval(timer);
        var correctAnswerDisplay = questions[game.currentQuestion].correctAnswer
        var comparison = $(e.target).data("name");
        if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    

}