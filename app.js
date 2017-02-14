//主入口文件
//依赖于路由和css两个模块
angular.module('myApp', ['ngRoute', 'angularCSS'])
	//run方法，是在模块加载的时候初始化一些功能
	.run(['$window', '$rootScope' , function ($window, $rootScope) {
		$rootScope.$on('$locationChangeSuccess', function () {
			$window.location.href.indexOf()
			//如果浏览器地址包含 market（闪送超市）那么就隐藏footer
			if ($window.location.href.indexOf('remaixq') != -1) {
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		});
	}])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
//			template : '<h1>首页</h1>',
			templateUrl : './view/home.html',
			controller : 'HomeCtrl as homeCtrl'
		})
		.when('/market', {
//			template : '<h1>闪送超市</h1>',
			templateUrl : './view/market.html',
			controller : 'MarketCtrl as marketCtrl'
		})
		//带参数 (name和age是形参，不要忘记冒号)
		.when('/cart/:name/:age', {
//			template : '<h1>购物车</h1>'
			templateUrl : './view/cart.html',
			controller : 'CartCtrl as cartCtrl'
		})
		.when('/mine', {
//			template : '<h1>我的</h1>'
			templateUrl : './view/mine.html',
			controller : 'MineCtrl as mineCtrl'
		})
		//详情
		.when('/detail', {
			templateUrl : './view/detail.html',
			controller : 'DetailCtrl as detailCtrl'
		})	
		//热卖详情
		.when('/remaixq',{
			templateUrl : './view/remaixq.html',
			controller : 'RemaixqCtrl as remaixqCtrl'
		})
		.otherwise({
			redirectTo : '/home'
		})
	}])
	
