document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("urlNewVideo").addEventListener("click", urlFunction);
});

function urlFunction() {
    // player.loadVideoByUrl(mediaContentUrl:String,
    // startSeconds:Number,
    // suggestedQuality:String):Void


    //To get the url of current page

    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
        console.log(tablink);

        //Extracting a part of video url
        var video_id = tablink.substring(32, 43);

        //http://www.youtube.com/v/VIDEO_ID?version=3
        var video_id = "http://www.youtube.com/v/"+video_id+"?version=3";
        player.loadVideoByUrl(video_id ,0 ,"large");
    });


    //Displaying video url in console
    var item = player.getVideoUrl();
    console.log(item);

}
