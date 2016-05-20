// alert("background alert")
// alert(document.location)

chrome.runtime.onMessage.addListener(function(response, sender, sendMessage){
	alert(response)
});