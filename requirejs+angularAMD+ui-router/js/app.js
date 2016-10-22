define(['angularAMD','uiRouter'],function(angularAMD){
	var app = angular.module('myApp',['ui.router']);
	app.config(["$stateProvider","$urlRouterProvider",function($state,$url){
		$state.state('home',{
			url:'/home',
			templateUrl:'views/home.html'
			//此处未写明视图，采用默认视图
			//在此处也可以使用resolve加载依赖文件，如controller
			//若想为每个路由都单独写一个controlle，则可采用下面的方式
		}).state('home.user',{
			url:'/user',
			views:{
				'main':{//main为二级路由视图名称
					templateUrl:'views/user.html',
					controller:'userCtrl',
					resolve:{//此处目的是注入控制器
						load:function($q){
							var q = $q.defer();
							require(['js/controller.js'],function(){
								q.resolve();
							});
							return q.promise;
						}
					}
				}
			}
		}).state('home.class',{
			url:'/class',
			views:{
				'main':{
					templateUrl:'views/class.html',
					controller:'classCtrl',
					resolve:{
						load:function($q){
							var q = $q.defer();
							require(['js/controller.js'],function(){
								q.resolve();
							});
							return q.promise;
						}
					}
				}
			}
		}).state('home.my',{
			url:'/my',
			views:{
				'main':{
					templateUrl:'views/my.html',
					controller:'myCtrl',
					resolve:{
						load:function($q){
							var q = $q.defer();
							require(['js/controller.js'],function(){
								q.resolve();
							});
							return q.promise;
						}
					}
				}
			}
		});
		
		
		$url.otherwise('/home/user');//默认匹配路径
		
		
	}]);
	
	return angularAMD.bootstrap(app);//使用angularAMD建立一个满足AMD规范的app模块
});