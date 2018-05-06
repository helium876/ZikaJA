// Initialize Firebase
var app = angular.module("Zika", ["firebase"]);

app.config(function() {
  var config = {
	  apiKey: "AIzaSyAMzHybgf07qvt0Q6ARyFLIN7CRJvQFECI",
	  authDomain: "hackzika-dc674.firebaseapp.com",
	  databaseURL: "https://hackzika-dc674.firebaseio.com",
	  storageBucket: "hackzika-dc674.appspot.com"
  };
  firebase.initializeApp(config);
});

// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     var ref = new Firebase("https://hackzika-dc674.firebaseio.com");
//     return $firebaseAuth(ref);
//   }
// ]);

// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     var ref = new Firebase("https://codesharks.firebaseio.com/");
//     return $firebaseAuth(ref);
//   }
// ]);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
