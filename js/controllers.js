//注意：这里angular.module('myApp') 第二个参数依赖去掉 
angular.module('myApp')
	//依赖注入$css（这个是angularCSS这个插件中的服务）
	.controller('HomeCtrl', ['$css', 'HomeService','$scope','$timeout', function ($css, HomeService,$scope,$timeout) {
		//引入CSS，路径都是相对于index.html
		$css.add('./css/home.css');
		var self = this;
		//获取用户列表的方法
		self.getUserList = HomeService.getUserList();
		self.getRemai = HomeService.getRemai();
		console.log(self.getRemai)
//		HomeService.getlunbo().success(function (result){
//			self.dat = result;
//			console.log(result)
//		})

		
		$timeout(function () {
			//轮播图
			var mySwiper = new Swiper ('#homelb .swiper-container', {
			  	// 滚动方向 horizontal/vertical
			    direction: 'horizontal',
			    // 自动播放
			    autoplay:1000,
			    // 是否循环播放
			    loop: true,
			    // 如果需要分页器（小圆点）
			    // 是否需要分页器
			    pagination: '.swiper-pagination',
			    // 点击分页器是否切换到对应的图片 是 true 否 false
			    paginationClickable:true,
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    
			    autoplayDisableOnInteraction:false
			     // 如果需要滚动条
			    // scrollbar: '.swiper-scrollbar',
			 })
				//名庄优选滑动
			var mySwiper1 = new Swiper ('.home_floor_menu1 .swiper-container', {
					slidesPerView: 'auto',
				  	paginationClickable: true,
				    spaceBetween: 5
				})
		}, 500);

	}])
	
	//$location是一个内置服务，可以获取地址、跳转路由等功能
	.controller('MarketCtrl', ['$location', '$css',function ($location,$css) {
		var self = this;
		$css.add('./css/market.css');

	}])
	
	//购物车控制器
	.controller('CartCtrl', ['$routeParams','$css', function ($routeParams,$css) {
		//$routeParams 可以获取到通过路由传过来的所有参数，我们可以通过点
		//语法获取相应的参数
		var self = this;
		self.name = $routeParams.name;
		self.age = $routeParams.age;
	}])
	
	//我的控制器
	.controller('MineCtrl', ['$css',function ($css) {
		var self = this;
		$css.add('./css/mine.css');
		
	}])
	//新人领券详情
	.controller('DetailCtrl', ['$css','$routeParams', '$location',function ($css,$routeParams,$location) {
		var self = this;
		$css.add('./css/detail.css')
		//跳转到指定的页面
		self.goBack = function(){
			$location.path('home')
		}
		
	}])
	
	//热卖详情
	.controller('RemaixqCtrl',['$css','$location',function ($css,$location){
		var self = this;
		$css.add('./css/remaixq.css')
		self.goBack = function(){
			$location.path('home')
		}
		
	}])
