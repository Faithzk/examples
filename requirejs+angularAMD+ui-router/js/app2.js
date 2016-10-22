define(['angularAMD','uiRouter'],function(angularAMD){
	var app = angular.module('myApp',['ui.router']);
	app.config(["$stateProvider","$urlRouterProvider",function($state,$url){
		$state.state('home',{
			url:'/home',
			templateUrl:'views/home.html',
			resolve:{//此处目的是注入控制器
						load:function($q){
							var q = $q.defer();
							require(['js/controller.js'],function(){
								q.resolve();
							});
							return q.promise;
						}
					}
			//此处未写明视图，采用默认视图
		}).state('home.user',{
			url:'/user',
			views:{
				'main':{//main为二级路由视图名称
					templateUrl:'views/user.html',
					controller:'userCtrl'
					
				}
			}
		}).state('home.class',{
			url:'/class',
			views:{
				'main':{
					templateUrl:'views/class.html',
					controller:'classCtrl'
					
				}
			}
		}).state('home.my',{
			url:'/my',
			views:{
				'main':{
					templateUrl:'views/my.html',
					controller:'myCtrl'
					
				}
			}
		});
		
		
		$url.otherwise('/home/user');//默认匹配路径
		
		
	}]);
	
	return angularAMD.bootstrap(app);//使用angularAMD建立一个满足AMD规范的app模块
});