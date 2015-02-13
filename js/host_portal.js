drewAndSarah.hostRender();
drewAndSarah.infoRender();
drewAndSarahParty.glRender();

// queryString pulls components from the url string after submitted through a form

/*var queryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  }
    return query_string;
} ();*/

$(document).on('ready', function() {

////////////////////////////////////////////////////////////////////////////////
// CLICK HANDLER FOR ADDING ANOTHER GUEST EMAIL ON INVITE MODAL (HOST PORTAL) //
////////////////////////////////////////////////////////////////////////////////

  $('#guest-invite-additional-email').on('click', function() {
    var newEmail = $('.orig-guest-email-field').first().clone();
    $('.orig-guest-email-field').last().after(newEmail);
  });

// this mouseover does some magic when you mouseover a guest snippet
  $('.guest-snippet').mouseover(function() {
    $(this).addClass('snippet-overlay');
  });

  $('#host-portal-update-info').on('click', function() {
    if($('#host-profile-pic').val().length >= 1) {
      drewAndSarah.couplePhoto = $('#host-profile-pic').val();
      drewAndSarah.hostReRender();
    }
    if($('#host-wedding-location').val().length >= 1) {
      drewAndSarah.weddingLocation = $('#host-wedding-location').val();
    }
    if($('#host-wedding-venue').val().length >= 1) {
      drewAndSarah.weddingVenue = $('#host-wedding-venue').val();
    }
    if($('#host-wedding-date').val().length >= 1) {
      drewAndSarah.weddingDate = $('#host-wedding-date').val();
    }
    if($('#host-wedding-time').val().length >= 1) {
      drewAndSarah.weddingTime = $('#host-wedding-time').val();
    }
    if($('#host-rehearsal-dinner-venue').val().length >= 1) {
      drewAndSarah.rehearsalDinnerVenue = $('#host-rehearsal-dinner-venue').val();
    }
    if($('#host-rehearsal-dinner-date').val().length >= 1) {
      drewAndSarah.rehearsalDinnerDate = $('#host-rehearsal-dinner-date').val();
    }
    if($('#host-rehearsal-dinner-time').val().length >= 1) {
      drewAndSarah.rehearsalDinnerTime = $('#host-rehearsal-dinner-time').val();
    }
    if($('#host-wedding-site').val().length >= 1) {
      drewAndSarah.weddingSite = $('#host-wedding-site').val();
    }
    drewAndSarah.infoReRender();
    $('#host-edit-info-modal').modal('hide');
    $('#host-wedding-location').val('');
    $('#host-wedding-venue').val('');
    $('#host-wedding-date').val('');
    $('#host-wedding-time').val('');
    $('#host-rehearsal-dinner-venue').val('');
    $('#host-rehearsal-dinner-date').val('');
    $('#host-rehearsal-dinner-time').val('');
    $('#host-wedding-site').val('');
  });

});
