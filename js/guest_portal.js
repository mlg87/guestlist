demetri.guestRender();
demetri.portalInfoRender();

drewAndSarahParty.glRender();

$(document).on('ready', function() {

  // when live, this will need to be changed to target the guest that is logged in as opposed to demetri
  $('#guest-portal-update-info').on('click', function() {
    if($('#guest-profile-pic').val().length >= 1) {
      demetri.profilePic = $('#guest-profile-pic').val();
      demetri.guestReRender();
    }
    if($('#guest-hometown').val().length >= 1) {
      demetri.hometown = $('#guest-hometown').val();
    }
    if($('#guest-age').val().length >=1 ) {
      demetri.age = $('#guest-age').val();
    }
    if($('#guest-friends-of').val() !== demetri.friendsOf) {
      demetri.friendsOf = $('#guest-friends-of').val();
    }
    if($('#guest-background-story').val().length >= 1) {
      demetri.backgroundStory = $('#guest-background-story').val();
    }
    if($('#guest-wedding-story').val().length >= 1) {
      demetri.weddingStory = $('#guest-wedding-story').val();
    }
    demetri.portalInfoReRender();
    $('#guest-edit-info-modal').modal('hide');
    $('#guest-profile-pic').val('');
    $('#guest-hometown').val('');
    $('#guest-age').val('');
    $('#guest-friends-of').val('');
    $('#guest-background-story').val('');
    $('#guest-wedding-story').val('');
  });

});

/*var WeddingGuest = function(name, age, hometown, friendsOf, backgroundStory, weddingStory, profilePic, email) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
  this.friendsOf = friendsOf;
  this.backgroundStory = backgroundStory;
  this.weddingStory = weddingStory;
  this.profilePic = profilePic;
  this.email = email;
  this.threads = [];
};*/