var contextsList =["selection","link","image","page"];

for (var i = 0; i <contextsList.length; i++) {
	
	var context = contextsList[i];
	var titleX = "Twitter toolkit:Share this"+context+" on the twitter profile";
	    chrome.contextMenus.create({
	        title: titleX,
	        id: context, 
	        contexts: [context],

	    });
	}

chrome.contextMenus.onClicked.addListener(function (data,tab) {
    switch (data.menuItemId) {
		case 'selection':
		    chrome.window.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel"});
			break;
		case 'link':
		    chrome.window.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.linkUrl),type:"panel"});
			break;
		case 'image':
		    chrome.window.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.srcUrl),type:"panel"});
			break;
		case 'page':
		    chrome.window.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url"=(data.pageUrl,type:"panel"});
			break;
		default:
			console.log('"default case executed')
			break;
	}
});