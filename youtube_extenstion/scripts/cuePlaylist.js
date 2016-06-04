document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("playlistVideo").addEventListener("click", playlistFunction);
});

function playlistFunction() {
  // player.loadPlaylist(playlist:String|Array,
                //  index:Number,
                //  startSeconds:Number,
                //  suggestedQuality:String):Void


    //To get the url of current page

    //https://www.youtube.com/watch?v=DU6IdS2gVog&list=PL_yIBWagYVjyyqx_qPkbat5zufWZOyZEZ
    player.loadPlaylist("PL_yIBWagYVjyyqx_qPkbat5zufWZOyZEZ",0,0,"large");


    //Displaying video url in console
    var item = player.getVideoUrl();
    console.log(item);

}
