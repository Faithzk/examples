define(['app'],function(app){//注入app模块
	app.controller('userCtrl',['$scope',function($scope){
		$scope.name = 'user';
		
	}]).controller('classCtrl',['$scope',function($scope){
		$scope.name = 'class';
		
		
	}]).controller('myCtrl',['$scope',function($scope){
		$scope.name = 'my';
		
		
	}]);
});

