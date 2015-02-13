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

  // $('.chatter-img-container').mouseover(function() {
  //   $(this).addClass('snippet-overlay');
  // });

  // listener for clicks on 'reply' buttons within comments

  $('.media-body').on('click', '.comment-reply', function() {
      var commenterName = $(this).siblings('.media-heading').text();
      // var name = $(this).data(this);
      $('#wedding-page-comment-reply-heading').text('Reply to ' + commenterName);
      commentLocation = $(this);
      return commentLocation;
    });

  $('#wedding-page-comment-reply-add').on('click', function() {
    var reply = $('#guest-add-chatter-reply-body').val();
    demetri.addChatterReply(reply);
    $('#wedding-page-comment-reply').modal('hide');
    // var here = demetri.chatterReply.bind(commentLocation);
    // commentLocation.append(here());
    demetri.chatterReply();
  });

  $('#guest-add-chatter-submit').on('click', function() {
    var newComment = $('#guest-add-chatter-body').val();
    demetri.addChatterComment(newComment);
    demetri.chatterMsg();
    $('#wedding-page-add-comment-modal').modal('hide');
    $('#guest-add-chatter-body').val('');
  });

});