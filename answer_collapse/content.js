//This message only shows in quora website
console.log("Hello quora");
var answer = $(".feed_type_answer");
//console.log(answer);

answers = []

function pull() {
    var answers = $(".feed_type_answer");
    //console.log(answers.length);
    for (var i = 0; i < answers.length; i++) {
      answers[i].addEventListener("dblclick",listnerFunc)
    }
}
function listnerFunc() {
  alert(this.id);
}

var answerPolls = setInterval(pull, 2000);
