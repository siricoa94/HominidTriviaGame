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

},{
    question: "What is a human considered out of the following?",
    answers: ["Pongo abelii","Hylobatidae","Homo","Panina"],
    correctAnswer: "Homo"

},{
    question: "How many extant species are included in the Hominidae family?",
    answers: ["Four","Twelve","Five","Eight"],
    correctAnswer: "Eight"

},{
    question: "Out of the four, which was the largest primate known to have ever walked the earth?",
    answers: ["Ankarapithecus","Gigantopithecus","Gigarapithecus","Humongopithicus"],
    correctAnswer: "Australopithecus"

}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 10,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function(){
        game.counter--;
        $("#gameTitle").html("TIME LEFT: "+game.counter);
        if(game.counter<=0){
            game.timeUp();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);

        $("#questionAnswer").html("<h2 id='questionAsk'>"+questions[game.currentQuestion].question+"</h2>");
        for(var i=0; i<questions[game.currentQuestion].answers.length;i++){
            $("#questionAnswer").append("<br>"+"</br>"+'<button class="answer-button" id="button' 
            + i + '"data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.
                currentQuestion].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){
        game.counter = 10;
        $("#gameTitle").html("TIME LEFT: " + game.counter);
        game.currentQuestion++;
        game.loadQuestion();
        
    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#gameTitle").html("<h3>TIME OUT</h3>");
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
    answeredCorrectly: function(){
        clearInterval(timer);
        game.correct ++;
        $("#questionAnswer").html("<h2>GOOD JOB</h2>");
        if(game.currentQuestion == questions.length -1){
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    answeredIncorrectly: function(){
        clearInterval(timer);
        game.incorrect ++;
        $("#questionAnswer").html("<h2>WRONG</h2>");
        $("#questionAnswer").append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        if(game.currentQuestion == questions.length -1){
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 10;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
        // The below work as they should, but the start button that is generated does not respond to the on click command. To be assesed in future updates
        //$("#gameTitle").remove();
        // $("#questionAnswer").remove();
        // $("#reset").remove();
        // $("#container").html('<button id="start">Start</button>')
    },



}