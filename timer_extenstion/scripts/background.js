chrome.runtime.onMessage.addListener(fucntion(request, sender, sendResponse) {
    if (request.command === "startTimer") {
        startTimer();
        sendResponse({
            message: "Timer started"
        });
    }
});

function startTimer() {
    var start = moment();
    setInterval(function() {
        var diff = moment().diff(start, 'seconds');
        updateTime(diff);
    }, 1000);
}

function updateTime(diff) {
    chrome.runtime.sendMessage({
        "command": "updateTime",
        "time": diff
    });
}
