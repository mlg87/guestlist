demetri.guestProfileRender();
demetri.profileInfoRender();

$(document).on('ready', function() {
  $('#navbar-send-message').text('Message '+ demetri.name);
  $('#message-user-title').text('Send ' + demetri.name + ' A Message');
  $('#navbar-send-message').on('click', function() {
    setTimeout(function() {
      $('#guest-profile-message-body').focus();
      }, 600);
    });
});