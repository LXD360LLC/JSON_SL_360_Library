var player = GetPlayer();

setInterval(function() {

player.SetVar(‘dateAndTime’, new Date(new Date().getTime()).toString().split(‘GMT’)[0].trim());

}, 1);