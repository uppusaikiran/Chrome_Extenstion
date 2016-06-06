function init() {
    addMessageListeners();
    startTimer();
};

function startTimer() {
    chrome.runtime.sendMessage({
        "command": "startTimer"
    }, function(response) {
        console.log(response.message);
    });
};

function addMessageListeners(){
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.command === "updatTime") {
          var time = requst.time;
          document.getElementById("time").innerHTML = time;
      }
  });
}
document.addEventListener('DOMContentLoaded', init);
