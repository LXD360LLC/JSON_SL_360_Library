<HTML>
<BODY>
<div id="myplayer">Loading video...</div>
<script>
// 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
 // after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
//Use playerVars to control your player.
 player = new YT.Player('myplayer', {
 height: '500',
 width: '100%',
 videoId: 'hJpyMhbqNbc',
 playerVars: { 'autoplay': 1, 'controls': 0, 'rel':0 },
 events: {
 'onReady': onPlayerReady,
 'onStateChange': onPlayerStateChange
 }
 });
 }
// 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
 event.target.playVideo();
 }
// 5. The API calls this function when the player's state changes.
 // When the video is over (or you could use any given time) it tells Storyline.
 var done = false;
 function onPlayerStateChange(event) {
 
 
 
 if (event.data == YT.PlayerState.ENDED && !done) {
 parent.ended();
 done = true;
 }
 
 }
 
 // Video player functions
 function pauseVideo() {
 player.pauseVideo();
 }
 function playVideo() {
 player.playVideo();
 }
 function restartVideo() {
 player.stopVideo();
 player.seekTo(0);
 player.playVideo();
 }
 
 function playVideoFrom(sec) {
 
 player.seekTo(sec);
 player.playVideo();
 }
 
 // This would be better calling the available playback rate options first. The sp (speed) is just the suggested speed. 
 function speedVideo(sp)
 {
 player.setPlaybackRate(sp)
 }
 
</script>