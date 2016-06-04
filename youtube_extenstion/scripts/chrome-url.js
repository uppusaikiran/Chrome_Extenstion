var tablink = "";
chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
    console.log(tablink);
});
