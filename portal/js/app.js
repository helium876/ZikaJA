app.run(['$rootScope', function($rootScope){
    // $rootScope.log = null;
}]);

app.controller("AuthCtrl", ["$scope", "Auth", "$window","$rootScope",


  function($scope, Auth, $window, $rootScope) {

  	function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
    $scope.login = function(email,password) {
      $scope.message = null;
      $scope.error = null;

      console.log(email);

    Auth.$signInWithEmailAndPassword(email,password).then(function(authData) {
      $scope.message= "Logged in as:" + authData.uid;
      setCookie('log','true',1);
      console.log($rootScope.log);
      $window.location.href = 'index.html';
    }).catch(function(error) {
      $scope.error = "Authentication failed: " +error;
      setCookie('log','false',1);
    });
  }}
]);

app.controller('GetSurData', function($scope, $firebaseObject){
	var ref = firebase.database().ref('data/');
	var list = ref.push();
	$scope.TData = {
       	rash: false,
		eyepain: false,
		redeye: false,
		jpain: false,
		vomit: false
     };

	$scope.SendData = function (TData) {
		var timeStamp = new Date().valueOf();
		console.log(timeStamp);
		 list.set({
		 	//timestamp: timeStamp,
		 	fname: TData.fname,
		 	age: TData.age,
		 	address: TData.address,
		 	aware: TData.aware,
		 	past: TData.past,
		 	rash: TData.rash,
		 	eyepain: TData.eyepain,
		 	redeye: TData.redeye,
		 	jpain: TData.jpain,
		 	vomit: TData.vomit
		 }).then(function() {
        swal("Submitted!", "A medical personnel will get in touch with you!");
      }).catch(function(error) {
        //swal("Good job!", "You clicked the button!", "success");
      });
	}
});


app.controller('ListData',function($scope, $firebaseObject, $rootScope, $window){
	// console.log($rootScope.log);
	// if ($rootScope.log != true) {
	// 	$window.location.href = 'login.html';
	// }else
	// {

	// }
	var ref = firebase.database().ref('data/');
	$scope.stuff = $firebaseObject(ref);


});

app.controller('ListVec',function($scope, $firebaseObject, $rootScope, $window){


	var ref = firebase.database().ref('Vector/workers/');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('ListHome',function($scope, $firebaseObject, $rootScope, $window){
	
	

	var ref = firebase.database().ref('Vector/home/');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('Grie',function($scope, $firebaseObject, $rootScope, $window){
	
	
	var ref = firebase.database().ref('report');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('Notify',function($scope, $firebaseObject, $rootScope, $window){
	
	

	var ref = firebase.database().ref('notify/');
	$scope.stuff = $firebaseObject(ref);

});


app.controller('Notify', function($scope, $firebaseObject, $rootScope, $window){
	
	

	var ref = firebase.database().ref('notify/');
	var list = ref.push();
	// $scope.TData = {
 //       	rash: false,
	// 	eyepain: false,
	// 	redeye: false,
	// 	jpain: false,
	// 	vomit: false
 //     };

	$scope.SendData = function (TData) {
		var timeStamp = new Date().valueOf();
		console.log(timeStamp);
		 list.set({
		 	//timestamp: timeStamp,
		 	area: TData.area,
		 	time: TData.time,
		 	msg: TData.msg,
		 }).then(function() {
        swal("Submitted!", "The Public has been notified!");
      }).catch(function(error) {
        //swal("Good job!", "You clicked the button!", "success");
      });
	}
});
