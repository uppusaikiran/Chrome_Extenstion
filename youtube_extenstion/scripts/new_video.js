// User defined functions to display the time
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("newVideo").addEventListener("click", handlerFunction);
});

// The handler also must go in a .js file
function handlerFunction() {
    // player.loadVideoById(videoId: String,
    //     startSeconds: Number,
    //     suggestedQuality: String): Void
    var video_id = makeid();
    console.log(video_id);
    player.loadVideoById(video_id,0,"large");
    var item = player.getVideoUrl();
    console.log(item);

}

//Making VideoId
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";

    for( var i=0; i < 11; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
