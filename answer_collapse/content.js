//This message only shows in quora website
console.log("Hello quora");
//var answer = $(".feed_type_answer");
//console.log(answer);


$(document).ready(function() {


    var answers = [];
    var answerlen = answers.length;

    function pull() {
        answers = $(".feed_type_answer");
        //console.log(answers.length);
        for (var i = answerlen; i < answers.length; i++) {
            answers[i].addEventListener("dblclick", listnerFunc)
        }
        answerlen = answers.length;
    }

    function listnerFunc() {
        var store = $(".Expandable.SimpleToggle.Toggle.AnswerInFeedExpandable.AnswerExpandable");
        $("#" + store[0].id).removeClass("hidden");
        $("#" + store[1].id).addClass("hidden");
    }

    var answerPolls = setInterval(pull, 2000);
});
