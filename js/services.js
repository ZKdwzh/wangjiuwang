//这里统一管理service(服务)
angular.module('myApp')
	.factory('HomeService', ['$http',function ($http) {
		var list = [
					{ lunbo_url: "http://img3.wangjiu.com/ad/20170120/default/1484882632479600"},
					{ lunbo_url: "http://img3.wangjiu.com/ad/20170213/default/1486969396687893"},
					{ lunbo_url: "http://img1.wangjiu.com/ad/20170112/default/1484211294893392" },
					{ lunbo_url: "http://img2.wangjiu.com/ad/20161223/default/1482490659629987" },
					{ lunbo_url: "http://img1.wangjiu.com/ad/20170208/default/1486520842999337" },
				];
		var remai =[
					{rm_url:"http://img0.wangjiu.com/product-image/20160506/26786257402640665!400x400",rm_ms:"【名庄】丽冠巴顿庄园正牌干红葡萄酒 2012",rm_jg:"399.00",rm_id:"001"},
					{rm_url:"http://img1.wangjiu.com/product-image/20160829/default/1472462053501854!400x400",rm_ms:"拉菲传奇梅多克干红葡萄酒2012*2",rm_jg:"299.00",rm_id:"002"},
					{rm_url:"http://img3.wangjiu.com/product-image/20160516/27649780230450266!400x400",rm_ms:"干露鬼脸佳美娜红葡萄酒2015*6",rm_jg:"159.00",rm_id:"003"},
					{rm_url:"http://img3.wangjiu.com/product-image/20160406/24207693929156675!400x400",rm_ms:"喜力啤酒 330ml/瓶*6",rm_jg:"45.00",rm_id:"004"},
					{rm_url:"http://img2.wangjiu.com/product-image/20160811/default/1470911019905949!400x400",rm_ms:"52度泸州老窖 国窖1573 浓香型白酒500ml/瓶",rm_jg:"668.00",rm_id:"005"},
					{rm_url:"http://img1.wangjiu.com/product-image/20160621/30755278854005160!400x400",rm_ms:"斯图加特白啤 德国原装进口 500ml/听*12",rm_jg:"57.00",rm_id:"006"},
				];
		return {
			getUserList : function () {
				// 模拟获取用户列表数据
				return list;
			},
			getRemai : function (){
				
				return remai;
			}
			//实验
//			getlunbo:function (){
//				return $http.get('http://webapi.wangjiu.com/api/board/query/space.jsonp?callback=jQuery21406907872825212138_1486986187320&client_sig=wap&format=jsonp&space_id=395&_=1486986187324')
//			}
		}
	
	}])
	
	//获取详情信息的服务
	.factory('RemaixqCtrl', [function () {
		var list = [
					{ personId: 1001, name : 'b', age : '18' },
					{ personId: 1002, name : 'a', age : '15' },
					{ personId: 1003, name : 'c', age : '20' },
					{ personId: 1004, name : 'd', age : '17' }
				];
		return {
			//获取用户详情信息的接口
			getUserDetailInfo : function (personId) {
				for (var personObj of list) {
					if (personObj.personId == personId) {
						return personObj;
					}
				}
				return null;
			}
		}
	}])