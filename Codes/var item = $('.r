var item = $('.slide-control-button-next')

var default_color = $(item).css("background")

$(item).css("background", "white")

setTimeout(function(){$(item).css("background", default_color)}, 500)

setTimeout(function(){$(item).css("background", "white")}, 1000)

setTimeout(function(){$(item).css("background", default_color)}, 1500)

setTimeout(function(){$(item).css("background", "white")}, 2000)

setTimeout(function(){$(item).css("background", default_color)}, 2500)