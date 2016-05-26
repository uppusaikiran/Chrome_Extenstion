document.addEventListener('DOMContentLoader', function() {
    //Get current tab to extract url
    chrome.tabs.getSelected(null, function(tab) {

        var url = 'http://ip-api.com/json/' + extractDomain(tab.url);
        httpGetAsyn(url, function(response) {

            //Get the dom elements and add the data
            var org = document.getElementById('organisation');
            var location = document.getElementById('location');

            org.innerHTML = data.org;
            location.innerHTML = data.city + ',' + data.region + ',' + data.contry;
        });
    });
});

var extractDomain = function(url) {
    var domain = '';

    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2]; //returs a split array
    } else {
        domain = url.split('/')[0];
    }

    //google.com:80 and to split without the port number
    domain = domain.split(':')[0];
    return domain;
}

var httpGetAsyn = function(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText)
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
