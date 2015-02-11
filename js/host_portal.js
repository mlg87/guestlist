drewAndSarah.hostRender();
drewAndSarah.infoRender();
drewAndSarahParty.glRender();

$(document).on('ready', function() {

////////////////////////////////////////////////////////////////////////////////
// CLICK HANDLER FOR ADDING ANOTHER GUEST EMAIL ON INVITE MODAL (HOST PORTAL) //
////////////////////////////////////////////////////////////////////////////////

  $('#guest-invite-additional-email').on('click', function() {
    var newEmail = $('.orig-guest-email-field').first().clone();
    $('.orig-guest-email-field').last().after(newEmail);
  });
});