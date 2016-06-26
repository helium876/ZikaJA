angular.module('starter.controllers', ["firebase"])

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, $state) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    var email = $scope.loginData.email, password = $scope.loginData.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(authData) {
      $state.go('app.form2');
    }).catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // [START_EXCLUDE]
          // if (errorCode === 'auth/wrong-password') {
          //   alert('Wrong password.');
          // } else {
            $scope.error = error;
          // }
          // [END_EXCLUDE]
    });
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('Form1', function($scope, $state) {
  var ref = firebase.database().ref('Vector/home/');
  var list = ref.push();
  $scope.Form1 = {
    item1: false,
    item2: false,
    item3: false

     };
  // $scope.Form1.item1 = false;
  // $scope.Form1.item2 = false;
  // $scope.Form1.item3 = false;

  $scope.SendData = function (TData) {
    var timeStamp = new Date().valueOf();
    console.log(timeStamp);
     list.set({
      timestamp: timeStamp,
      address: TData.address,
      // parish: TData.parish,
      item1: TData.item1,
      item2: TData.item2,
      item3: TData.item3,
      comments: TData.comments
     });
     $state.go("app.home");
  }
})

.controller('Form2', function($scope, $stateParams, $state) {
  var ref = firebase.database().ref('Vector/workers/');
  var list = ref.push();
  $scope.Form2 = {
    item1: false,
    item2: false,
    item3: false

     };

  $scope.SendData = function (TData) {
    var timeStamp = new Date().valueOf();
    console.log(timeStamp);
     list.set({
      timestamp: timeStamp,
      address: TData.address,
      // parish: TDatarish,
      item1: TData.item1,
      item2: TData.item2,
      item3: TData.item3,
      comments: TData.comments
     });
     $state.go("app.home");
     
  }
});



