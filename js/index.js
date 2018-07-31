/**
 * Created by doulu on 2017/9/24.
 */
$("#search").keyup(function(event){
    if(event.keyCode ==13){
    	var table = document.body.querySelector('.lists');
    	var title = $("#search").val();
    	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
    	$.ajax({
    		url : '../global/category_load', 
    		type : 'POST',
    		data : {
    			pageNo : 1,
    			placeId : placeId,
    			title : title
    		},
    		cache : false,
    		dataType : "json",
    		async : true,
    		success : function(data) {
    			console.log(data);
    			table.innerHTML='';
    			 for (var i = 0; i < data.activityCategorys.length; i++) {
    		            var a = document.createElement('a');
    		            a.className = 'item';
    		            a.setAttribute('href','../global/activityList?classIfy=0&placeId='+placeId+'&categoryId='+data.activityCategorys[i].id+'&title=');
    		            a.innerHTML = '<img src="'+data.activityCategorys[i].imgUrl+'" alt="item-photo">'+
    		                '<p class="item-title">'+data.activityCategorys[i].name+'</p>';
    		            table.appendChild(a);
    		        }
    			 document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
    			 document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
    			 document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
    			 document.getElementById("search_btn").setAttribute("data-title",data.title);
    			 $(".a-city").html(data.city);
    			 $("#search").val(data.title);
    		}
    });
    }
});
$('#search_btn').on('click',function(){
	var table = document.body.querySelector('.lists');
	var title = $("#search").val();
	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
	$.ajax({
		url : '../global/category_load', 
		type : 'POST',
		data : {
			pageNo : 1,
			placeId : placeId,
			title : title
		},
		cache : false,
		dataType : "json",
		async : true,
		success : function(data) {
			console.log(data);
			table.innerHTML='';
			 for (var i = 0; i < data.activityCategorys.length; i++) {
		            var a = document.createElement('a');
		            a.className = 'item';
		            a.setAttribute('href','../global/activityList?classIfy=0&placeId='+placeId+'&categoryId='+data.activityCategorys[i].id+'&title=');
		            a.innerHTML = '<img src="'+data.activityCategorys[i].imgUrl+'" alt="item-photo">'+
		                '<p class="item-title">'+data.activityCategorys[i].name+'</p>';
		            table.appendChild(a);
		        }
			 document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
			 document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
			 document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
			 document.getElementById("search_btn").setAttribute("data-title",data.title);
			 $(".a-city").html(data.city);
			 $("#search").val(data.title);
}
});
});
function getPlace(placeId){
	document.getElementById("no-btn").setAttribute("data-placeId",placeId);
}
function changePlace(){
	//改变地址时  将类别 与标题搜索  进行初始化
	var placeId = document.getElementById("no-btn").getAttribute("data-placeId");
	var classIfy = 0;
	var title = "";
	var table = document.body.querySelector('.lists');
		 $.ajax({
				url : '../global/category_load', 
				type : 'POST',
				data : {
					classIfy : 0,
					pageNo : 1,
					placeId : placeId,
					title : title
				},
				cache : false,
				dataType : "json",
				async : true,
				success : function(data) {
					console.log("轮播图："+data);
					table.innerHTML='';
					 for (var i = 0; i < data.activityCategorys.length; i++) {
				            var a = document.createElement('a');
				            a.className = 'item';
				            a.setAttribute('href','../global/activityList?classIfy=0&placeId='+placeId+'&categoryId='+data.activityCategorys[i].id+'&title=');
				            a.innerHTML = '<img src="'+data.activityCategorys[i].imgUrl+'" alt="item-photo">'+
				                '<p class="item-title">'+data.activityCategorys[i].name+'</p>';
				            table.appendChild(a);
				        }
					 var slides = "";
					 for(var i = 0;i < data.slidesShows.length;i++){
						slides += "<a href='"+data.slidesShows[i].activityUrl+"' class='swiper-slide'>"+
		                    	"<img src='"+data.slidesShows[i].imgUrl+"' alt='轮播图'></a>";
					 }
					 $(".swiper-wrapper").html("");
					 $(".swiper-wrapper").html(slides);
					 document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
					 document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
					 document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
					 document.getElementById("search_btn").setAttribute("data-title",data.title);
					 $(".a-city").html(data.city);
					 $("#search").val("");
				},
				error : function(data) {
					console.log("失败"+data);
				}
	});
}
/*mui(".classIfys1").on('tap','a',function (event) {
	
	console.log("更改类别");
	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
	var title = document.getElementById("search_btn").getAttrbute("data-title");
	var table = document.body.querySelector('.lists');
		 $.ajax({
				url : '../global/category_load', 
				type : 'POST',
				data : {
					classIfy : parseInt(classIfy),
					pageNo : 1,
					placeId : placeId,
					title : title
				},
				cache : false,
				dataType : "json",
				async : true,
				success : function(data) {
					table.innerHTML='';
					 for (var i = 0; i < data.activityCategorys.length; i++) {
				            var a = document.createElement('a');
				            a.className = 'item';
				            a.setAttribute('href','../global/activityList?classIfy='+classIfy+'&placeId='+placeId+'&categoryId='+data.activityCategorys[i].id+'&title=');
				            a.innerHTML = '<img src="'+data.activityCategorys[i].imgUrl+'" alt="item-photo">'+
				                '<p class="item-title">'+data.activityCategorys[i].name+'</p>';
				            table.appendChild(a);
				        }
					 document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
					 document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
					 document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
					 document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
					 document.getElementById("search_btn").setAttribute("data-title",data.title);
					 $(".a-city").html(data.city);
					 $("#search").val(data.title);
		}
	});
});*/
//更改衣食居旅  类别
/*function changeClassIfy(classIfy){
	console.log("点击事件");
	console.log("更改类别");
	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
	var title = document.getElementById("search_btn").getAttribute("data-title");
	var table = document.body.querySelector('.lists');
		 $.ajax({
				url : '../global/category_load', 
				type : 'POST',
				data : {
					classIfy : parseInt(classIfy),
					pageNo : 1,
					placeId : placeId,
					title : title
				},
				cache : false,
				dataType : "json",
				async : true,
				success : function(data) {
					table.innerHTML='';
					 for (var i = 0; i < data.activityCategorys.length; i++) {
				            var a = document.createElement('a');
				            a.className = 'item';
				            a.setAttribute('href','../global/activityList?classIfy='+classIfy+'&placeId='+placeId+'&categoryId='+data.activityCategorys[i].id+'&title=');
				            a.innerHTML = '<img src="'+data.activityCategorys[i].imgUrl+'" alt="item-photo">'+
				                '<p class="item-title">'+data.activityCategorys[i].name+'</p>';
				            table.appendChild(a);
				        }
					 document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
					 document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
					 document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
					 document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
					 document.getElementById("search_btn").setAttribute("data-title",data.title);
					 $(".a-city").html(data.city);
					 $("#search").val(data.title);
					 $(".menu-box").css("display","none");
		}
	});
}*/
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    centeredSlides:true,
    paginationClickable: true,
    autoplayDisableOnInteraction : false,
    spaceBetween: 10,
    loop: true,
    autoplay: 2000
});
/*底部菜单按钮事件*/
$(function(){
    $('#menu_btn').on('click',function(){
        if(event.target.tagName=='A'){

        }else {
            $('.menu-box').slideToggle();
            return false;
        }
    });
});
/*顶部菜单按钮事件*/
$(function(){
    /*初始化城市*/
    $(".city-collapse-content").each(function(){
        var count = $(this).find('a').length;
        $(this).find('a').slice(12,count).hide();
    });
    /*绑定事件,因为事件冒泡与事件捕捉，所以先判断触发事件的根元素*/
    $('.top-menu').on('click',function(){
        if(event.target.tagName=='LI'){
            if($(this).children('.city-collapse').is(':visible')){
                $(this).removeClass('active');
            }else {
                $(this).addClass('active').siblings().removeClass('active');
            }
            $(this).children('.city-collapse').slideToggle()
                .parent().siblings().children('.city-collapse').hide();
            return false;
        }else if(event.target.tagName=='A'){
            /*切换城市按钮*/
            $('.pop-up-layer').show();
            return false;/*阻止A链接跳转*/
        }else if(event.target.tagName=='BUTTON'){
            var cCount = $(this).children().find('.city-collapse-content').children().length;
            var $thisCity = $(this).children().find('.city-collapse-content').children().slice(12,cCount);
            if($thisCity.is(":visible")){
                $thisCity.hide();
                $(this).children().find('.unfolded-btn').removeClass("folded");
            }else{
                $thisCity.show();
                $(this).children().find('.unfolded-btn').addClass("folded");
            }
            return false;
        }
    });
});
/*弹出框按钮*/
$(function(){
    $('.no-btn').on('click',function(){
        $('.pop-up-layer').hide();
        return false;/*阻止A链接跳转*/
    });
    $('.yes-btn').on('click',function(){
        $('.pop-up-layer').hide();
        window.location.href = 'city-activity.html';
        //$('.city-collapse').hide();
    });
});
/*上拉刷新*/
mui.init({
    pullRefresh: {
        container: '#item_content',
        up: {
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
});
mui('.lists').on('tap','a',function(){
    document.location.href = this.href;
});
/**
 * 上拉加载具体业务实现
 */
var count = 0;
function pullupRefresh() {
    setTimeout(function() {
    	var pageNo = document.getElementById("search_btn").getAttribute("data-pageNo");
    	var pageNum = document.getElementById("search_btn").getAttribute("data-pageNum");
    	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
    	var title = document.getElementById("search_btn").getAttribute("data-title");
    	if(parseInt(pageNo)+1 > pageNum){
        	mui('#item_content').pullRefresh().endPullupToRefresh(true); //参数为true代表没有更多数据了。
        	return;
    	}else{
        	mui('#item_content').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。

    	}
        var table = document.body.querySelector('.lists');
        $.ajax({
			url : '../global/category_load', 
			type : 'POST',
			data : {
				pageNo : parseInt(pageNo)+1,
				placeId : placeId,
				title : title
			},
			cache : false,
			dataType : "json",
			async : true,
			success : function(data) {
				 for (var i = 0; i < data.activityCategorys.length; i++) {
			            var a = document.createElement('a');
			            a.className = 'item';
			            a.setAttribute('href','../global/activityList?classIfy=0&placeId='+placeId+'&categoryId='+data.activityCategorys[i].id+'&title=');
			            a.innerHTML = '<img src="'+data.activityCategorys[i].imgUrl+'" alt="item-photo">'+
			                '<p class="item-title">'+data.activityCategorys[i].name+'</p>';
			            table.appendChild(a);
				 }
				 document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
				 document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
				 document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
				 document.getElementById("search_btn").setAttribute("data-title",data.title);
				 $(".a-city").html(data.city);
				 $("#search").val(data.title);
				
			},
			error:function(){
				
			}
		});
       
    }, 1500);
};
