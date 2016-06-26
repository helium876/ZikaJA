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


app.controller('ListData',function($scope, $firebaseObject){
	var ref = firebase.database().ref('data/');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('ListVec',function($scope, $firebaseObject){
	var ref = firebase.database().ref('Vector/workers/');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('ListHome',function($scope, $firebaseObject){
	var ref = firebase.database().ref('Vector/home/');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('Grie',function($scope, $firebaseObject){
	var ref = firebase.database().ref('report');
	$scope.stuff = $firebaseObject(ref);

});

app.controller('Notify',function($scope, $firebaseObject){
	var ref = firebase.database().ref('notify/');
	$scope.stuff = $firebaseObject(ref);

});


app.controller('Notify', function($scope, $firebaseObject){
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
