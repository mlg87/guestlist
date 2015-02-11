$(document).on('ready', function() {

///////////////////////////////////////////////
// SET THE BACKGROUND FOR THE MAIN CONTAINER //
///////////////////////////////////////////////

  $('.bg').backstretch('http://i1136.photobucket.com/albums/n488/MasonGoetz/WeddingBurner_Big_30Blue_zps4mbq19fe.jpg');


//////////////////////////////////////////
// CLICK HANDLER FOR LANDING-PAGE LOGIN //
//////////////////////////////////////////

  $('#landing-login').on('click', function() {
    $(this).addClass('inactive');
    $('#main-login-form').show();
    $('#login-email').focus();
  });

/////////////////////////////////////////////////
// CLICK HANDLER FOR LANDING-PAGE REGISTRATION //
/////////////////////////////////////////////////

  $('#landing-page-registration').on('click', function() {
    setTimeout(function() {
      $('#landing-page-reg-modal-email').focus();
    }, 600);
  });
});



