var email="yourAddress@email.com";
var subject="subject line";
var body_start="How you want to begin your body.";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');