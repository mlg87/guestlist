//////////////////////////////////
// APP CLASSES AND CONSTRUCTORS //
//////////////////////////////////

var WeddingHost = function(name, age, type, fianceName, weddingLocation, weddingTime, weddingDate, couplePhoto, weddingVenue, rehearsalDinnerVenue, rehearsalDinnerTime, rehearsalDinnerDate, weddingSite) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.fianceName = fianceName;
  this.weddingLocation = weddingLocation;
  this.weddingTime = weddingTime;
  this.weddingDate = weddingDate;
  this.couplePhoto = couplePhoto;
  this.weddingVenue = weddingVenue;
  this.rehearsalDinnerVenue = rehearsalDinnerVenue;
  this.rehearsalDinnerTime = rehearsalDinnerTime;
  this.rehearsalDinnerDate = rehearsalDinnerDate;
  this.weddingSite = weddingSite;
};

WeddingHost.prototype.hostRender = function() {
  this.$el = $('.host-display-window')
    .append('<h2 class="host-name btm-spacer">' + this.name + ' & ' + this.fianceName + '</h2>')
    .append('<div class="host-display-img-container"><img class="host-prof-pic" src=' + this.couplePhoto +' alt=' + this.name + ' & ' + this.fianceName + '></div>');

  return this.$el;
};

WeddingHost.prototype.infoRender = function() {
  this.$el = $('.wedding-location')
    .append('<p class="p-spacer text-muted">' + this.weddingLocation + '</p');
  this.$el = $('.wedding-venue')
    .append('<p class="p-spacer text-muted">' + this.weddingVenue + '</p');
  this.$el = $('.wedding-date')
    .append('<p class="p-spacer text-muted">' + this.weddingDate + '</p>');
  this.$el = $('.wedding-time')
    .append('<p class="p-spacer text-muted">' + this.weddingTime + '</p>');
  this.$el = $('.rehearsal-dinner-venue')
    .append('<p class="p-spacer text-muted">' + this.rehearsalDinnerVenue + '</p>');
  this.$el = $('.rehearsal-dinner-date')
    .append('<p class="p-spacer text-muted">' + this.rehearsalDinnerDate + '</p>');
  this.$el = $('.rehearsal-dinner-time')
    .append('<p class="p-spacer text-muted">' + this.rehearsalDinnerTime + '</p>');

    return this.$el;
};

var WeddingGuest = function(name, age, hometown, friendsOf, backgroundStory, weddingStory, profilePic) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
  this.friendsOf = friendsOf;
  this.backgroundStory = backgroundStory;
  this.weddingStory = weddingStory;
  this.profilePic = profilePic;
};

WeddingGuest.prototype.snippetRender = function() {
  this.$el = $('<div class="col-md-3">')
    .append('<div class="guest-display-img-container"><img src=' + this.profilePic + '></div>')
    .append('<p>' + this.name + '</p>');

    return this.$el;
};

WeddingGuest.prototype.guestRender = function() {
  this.$el = $('.guest-portal-display-window')
    .append('<h2 class="middle btm-spacer">' + this.name + '</h2>')
    .append('<div class="guest-portal-img-container"><img class="guest-prof-pic" src=' + this.profilePic +' alt=' + this.name + '></div>');

  return this.$el;
};

WeddingGuest.prototype.guestProfileRender = function() {
  this.$el = $('.guest-portal-display-window')
    .append('<div class="guest-portal-img-container"><img class="guest-prof-pic" src=' + this.profilePic +' alt=' + this.name + '></div>')
    .append('<h1 class="middle btm-spacer">' + this.name + '</h1>');

  return this.$el;
};

WeddingGuest.prototype.portalInfoRender = function() {
  this.$el = $('.guest-friends-of')
    .append('<p class="p-spacer text-muted">' + this.friendsOf + '</p');
  this.$el = $('.guest-background-story')
    .append('<p class="p-spacer text-muted">' + this.backgroundStory + '</p');
  this.$el = $('.guest-wedding-story')
    .append('<p class="p-spacer text-muted">' + this.weddingStory + '</p');
};

WeddingGuest.prototype.profileInfoRender = function() {
  this.$el = $('.prof-info-hometown')
    .append('<p class="p-spacer text-muted">' + this.hometown + '</p>');
  this.$el = $('.prof-info-age')
    .append('<p class="p-spacer text-muted">' + this.age + '</p>');
  this.$el = $('.prof-info-friend')
    .append('<p class="p-spacer text-muted">' + this.friendsOf + '</p>');
  this.$el = $('.prof-info-background-story')
    .append('<p class="p-spacer text-muted">' + this.backgroundStory + '</p>');
  this.$el = $('.prof-info-wedding-story')
    .append('<p class="p-spacer text-muted">' + this.weddingStory + '</p>');
};

var WeddingParty = function(guests) {
  this.guests = [];
};

WeddingParty.prototype.addGuest = function() {
  this.guests = this.guests.concat([].slice.call(arguments));
};

WeddingParty.prototype.glRender = function() {
  var allGuests = this.guests;
  var display = $('.guest-display');

  allGuests.forEach(function(guest, i) {
    display.append(guest.snippetRender(i+1));
  });
};

var WeddingInfo = function(host) {
  this.location = host.weddingLocation;
  this.time = host.weddingTime;
  this.date = host.weddingDate;
  this.weddingVenue = host.weddingVenue;
  this.rehearsalDinnerVenue = host.rehearsalDinnerVenue;
  this.rehearsalDinnerTime = host.rehearsalDinnerTime;
  this.rehearsalDinnerDate = host.rehearsalDinnerDate;
  this.weddingSite = host.weddingSite;
};


/////////////////
// SAMPLE DATA //
/////////////////

// sample WeddingHost
var drewAndSarah = new WeddingHost('Sarah', 25, 'Bride', 'Drew', 'Colorado Springs', '4:00PM', '10/02/2015', 'http://fc08.deviantart.net/fs25/i/2008/034/c/9/couple_example2_by_syccas_stock.jpg', 'Garden of the Gods', 'North (Cherry Creek)', '8:00PM', '10/01/2015', 'http://www.theknot.com/wedding/Robertson-Barczuk');

// sample WeddingGuests
var mason = new WeddingGuest('Mason', 27, 'Denver', 'Groom', 'I grew up with Drew. We used to do a lot of dumb shit. Actually, we still do.', 'My best story about Drew and Sarah would probably be the time poured a beer on my girlfriend at the happy hour to celebrate their engagement. Good times.', 'http://www.truthcontrol.com/files/truthcontrol/styles/large/public/images/9841.jpg');
var aly = new WeddingGuest('Aly', 25, 'Denver', 'Bride', 'I became friends with Sarah because this absurdly handsome and charming guy I knew was friends with Drew. The guy that introduced all of us is probably the funniest person I have ever met. He is also absurdly smart.', 'Drew and Sarah once walked in on me and my boyfriend having sex in the bathroom. Good times.', 'http://cdnimg.visualizeus.com/thumbs/48/a3/random,girl,beautifulwoman,woman,beauty,face-48a31c5aac34ae37f0e4a983a0a11819_h.jpg?ts=93246');
var sally = new WeddingGuest('Sally', 40, 'Portland', 'Groom', 'I\'m an idiot', 'So dumb.', 'http://cdnimg.visualizeus.com/thumbs/24/69/brunette,girl,portrait,soft,faces,stock-2469b8ee58799175f67daeaccabccf82_h.jpg?ts=93246');
var tim = new WeddingGuest('Timmy', 21, 'New York', 'Groom', 'Who is the groom again?', 'I banged the bride once', 'http://static.tumblr.com/0afd5fb9fa088e32989e6ec4f5746ae3/7djnmw0/O8Zmiyrxn/tumblr_static_ugly_man-250x300.jpg');
var john = new WeddingGuest('John', 30, 'Santa Fe', 'Bride', 'I met the bride when I was hooking up with her sister.', 'I once had a threesome with the couple. Good stuff.', 'http://cdn1.belfasttelegraph.co.uk/migration_catalog/article28863053.ece/54e6f/ALTERNATES/h342/N%20Ireland%20News%207-1.jpg');
var susan = new WeddingGuest('Susan', 38, 'Los Angeles', 'Groom', 'I met Drew after I got done with a threeway with Sarah and some other guy.', 'I am currently Drew and Sarah\'s surrogate', 'http://susers.thatsmyface.com/n/nrubdarb/Random_Woman_front_fQnAiuYTNH-largeThumb_158bdd29.jpg');
var demetri = new WeddingGuest('Demetri', 29, 'Moscow', 'Bride', 'I am the one that sold Sarah to Drew.', 'When Drew met me at Newark Airport to pick up Sarah, he had no idea what he was getting into. I completely falsified all of her measurements on the internet. It was hilarious.', 'http://www.thephuketnews.com/photo/listing/1380538088_1.jpg');
var julie = new WeddingGuest('Julie', 33, 'Tampa', 'Bride', 'I met Sarah in the container on the ship over from Murmansk.', 'My husband is Drew\'s cousin. They bought a groupon together and were able to get a better per unit price on brides', 'http://www.cindyagency.net/newbrides/russian-brides-photos.jpg');

// sample WeddingParty
var drewAndSarahParty = new WeddingParty();

// add the sample guests to drewAndSarahParty
drewAndSarahParty.addGuest(mason, aly, sally, tim, john, susan, demetri, julie);

// sample WeddingInfo
var drewAndSarahInfo = new WeddingInfo(drewAndSarah);