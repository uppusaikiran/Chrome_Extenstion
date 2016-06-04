//This message only shows in quora website
console.log("Hello quora");
var answer = $(".feed_type_answer");
//console.log(answer);

answers = []
function pull() {
  var answers = $(".feed_type_answer");
  console.log(answers.length);
}

var answerPolls = setInterval(pull , 2000);
