var Mixpanel = require("mixpanel");
var mixpanel = Mixpanel.init("id");

function user(user) {
  // Track user details based on uuid
  // mixpanel.people.set(user);
  // user.isNew
  //   ? mixpanel.track("Sign Up", user)
  //   : mixpanel.track("Sign On", user);
}

// register event handlers
// mixpanel.user = user;
// mixpanel.view = view;

export default mixpanel;
