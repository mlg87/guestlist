drewAndSarah.weddingProfileRender();
drewAndSarah.infoRender();
drewAndSarahParty.glRender();

demetri.chatterMsg();
julie.chatterMsg();
tim.chatterMsg();

$(document).on('ready', function() {
  $('.guest-snippet').mouseover(function() {
    $(this).addClass('snippet-overlay');
  });
});