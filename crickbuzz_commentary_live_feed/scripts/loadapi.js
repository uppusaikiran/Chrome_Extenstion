console.log("Hello api call");

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.cricbuzz.com/cricket-match/live-scores', true);
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    //document.getElementById('y').innerHTML= this.responseText;
    //console.log(this.responseText);

    //  var $parseText = this.responseText;
    //console.log($parseText);

    var $parseText = $(this.responseText);
    var ele = $(".cb-col.cb-col-100.cb-lv-main", $parseText);
    console.log(ele);
    for(var i =0 ;i < ele.length; i++){
      console.log(ele[i].textContent);
      $("#inside-pane").append('<div class="col-md-4">');
      $("#inside-pane").append(ele[i].textContent);

      $("#inside-pane").append("</div>");
    }
};
xhr.send();
