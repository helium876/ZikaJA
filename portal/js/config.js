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