/**
 * Created by doulu on 2017/9/24.
 */
$("#search").keyup(function(event){
    if(event.keyCode ==13){
    	var title = $("#search").val();
    	var categoryId = document.getElementById("search_btn").getAttribute("data-categoryId");
    	var classIfy = document.getElementById("search_btn").getAttribute("data-classIfy");
    	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
    	var table = document.body.querySelector('.content-wrap');
    	console.log("标题搜索"+categoryId);
    	$.ajax({
    		url : '../global/activity_load', 
    		type : 'POST',
    		data : {
    			classIfy : classIfy,
    			pageNo : 1,
    			placeId : placeId,
    			title : title,
    			categoryId : categoryId
    		},
    		cache : false,
    		dataType : "json",
    		async : false,
    		success : function(data) {
    			table.innerHTML = "";
    			for (var i =0; i < data.summarys.length; i++) {
    	            var div = document.createElement('div');
    	            div.className = 'activity-item clearfix';
    	            var div1 = document.createElement('div');
    	            div1.setAttribute('class','activity-img');
    	            div1.innerHTML = '<img src="'+data.summarys[i].imgUrl+'" alt="活动图片">';
    	            var div2 = document.createElement('div');
    	            div2.setAttribute('class','activity-content');
    	            div2.innerHTML = '<p class="activity-title">'+data.summarys[i].name+'</p>'+
    	                '<p class="activity-time">时间：'+data.summarys[i].beginDate+'—'+data.summarys[i].endDate+'</p>';
    	            if(data.summarys[i].openEvalue){
    	            	div2.innerHTML += '<p class="activity-loves" data-num="'+parseInt(data.summarys[i].avg_starLevel)+'"><i></i><i></i><i></i><i></i><i></i></p>';
    	            }
    	            if(data.summarys[i].praise){
    	 	            if(data.summarys[i].p_id == null){
    	 	            	div2.innerHTML += '<p class="activity-sports"><span id="praise" data-activityId="'+data.summarys[i].activityId+'">'+data.summarys[i].count_parise+'</span></p>';
    	 	            }else{
    	 	            	div2.innerHTML += '<p class="activity-sports">'+
    	 	            		'<span id="praise" data-activityId="'+data.summarys[i].activityId+'" class="like" style="background: url(\'/htmlWeixin/img/sport1.png\') left top / 22px 22px no-repeat;">'+data.summarys[i].count_parise+'</span>'+
    	                 	'</p>';
    	 	            }
    	            }
    	            var a = document.createElement('a');
    	            a.setAttribute('class','activity-detail');
    	            a.setAttribute('href','../global/getActivity?activityId='+data.summarys[i].activityId+'&classIfy='+data.classIfy+'&placeId='+data.placeId+'&title='+data.title+'&pageNo='+data.pageNo);
    	            a.innerHTML = '活动详情';
    	            div.appendChild(div1);
    	            div.appendChild(div2);
    	            div.appendChild(a);
    	            table.appendChild(div);
    	        }
    				document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
    		    	document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
    		    	document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
    		    	document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
    		    	document.getElementById("search_btn").setAttribute("data-title",data.title);
    		    	 $(".a-city").html(data.city);
    				 $("#search").val(data.title);
    			},
    	});
    	/*爱心数量效果*/
        $('.activity-loves').each(function(){
            var count = parseInt($(this).attr("data-num"));
            $(this).find('i').slice(0,count).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
        });
        sp();
        $(".all-area").css("display","none");
    }
});
//搜索框搜素
$("#search_btn").on('click',function(){
	var title = $("#search").val();
	var categoryId = document.getElementById("search_btn").getAttribute("data-categoryId");
	var classIfy = document.getElementById("search_btn").getAttribute("data-classIfy");
	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
	var table = document.body.querySelector('.content-wrap');
	console.log("标题搜索"+categoryId);
	$.ajax({
		url : '../global/activity_load', 
		type : 'POST',
		data : {
			classIfy : classIfy,
			pageNo : 1,
			placeId : placeId,
			title : title,
			categoryId : categoryId
		},
		cache : false,
		dataType : "json",
		async : false,
		success : function(data) {
			table.innerHTML = "";
			for (var i =0; i < data.summarys.length; i++) {
	            var div = document.createElement('div');
	            div.className = 'activity-item clearfix';
	            var div1 = document.createElement('div');
	            div1.setAttribute('class','activity-img');
	            div1.innerHTML = '<img src="'+data.summarys[i].imgUrl+'" alt="活动图片">';
	            var div2 = document.createElement('div');
	            div2.setAttribute('class','activity-content');
	            div2.innerHTML = '<p class="activity-title">'+data.summarys[i].name+'</p>';
	            if(data.summarys[i].endDate == null){
			       div2.innerHTML = '<p class="activity-time">时间：自'+data.summarys[i].endDate+'起即可参与</p>';
	            }else{
		           div2.innerHTML = '<p class="activity-time">时间：'+data.summarys[i].beginDate+'至'+data.summarys[i].endDate+'</p>';
	            }
	            if(data.summarys[i].openEvalue){
	            	div2.innerHTML += '<p class="activity-loves" data-num="'+parseInt(data.summarys[i].avg_starLevel)+'"><i></i><i></i><i></i><i></i><i></i></p>';
	            }
	            if(data.summarys[i].praise){
	 	            if(data.summarys[i].p_id == null){
	 	            	div2.innerHTML += '<p class="activity-sports"><span id="praise" data-activityId="'+data.summarys[i].activityId+'">'+data.summarys[i].count_parise+'</span></p>';
	 	            }else{
	 	            	div2.innerHTML += '<p class="activity-sports">'+
	 	            		'<span id="praise" data-activityId="'+data.summarys[i].activityId+'" class="like" style="background: url(\'/htmlWeixin/img/sport1.png\') left top / 22px 22px no-repeat;">'+data.summarys[i].count_parise+'</span>'+
	                 	'</p>';
	 	            }
	            }
	            var a = document.createElement('a');
	            a.setAttribute('class','activity-detail');
	            a.setAttribute('href','../global/getActivity?activityId='+data.summarys[i].activityId+'&classIfy='+data.classIfy+'&placeId='+data.placeId+'&title='+data.title+'&pageNo='+data.pageNo);
	            a.innerHTML = '活动详情';
	            div.appendChild(div1);
	            div.appendChild(div2);
	            div.appendChild(a);
	            table.appendChild(div);
	        }
				document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
		    	document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
		    	document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
		    	document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
		    	document.getElementById("search_btn").setAttribute("data-title",data.title);
		    	 $(".a-city").html(data.city);
				 $("#search").val(data.title);
			},
	});
	/*爱心数量效果*/
    $('.activity-loves').each(function(){
        var count = parseInt($(this).attr("data-num"));
        $(this).find('i').slice(0,count).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
    });
    sp();
    $(".all-area").css("display","none");
});

/*更改城市*/
function changePlace(placeId){
	var title = "";
	var table = document.body.querySelector('.content-wrap');
	$.ajax({
		url : '../global/activity_load', 
		type : 'POST',
		data : {
			classIfy : 0,
			pageNo : 1,
			placeId : placeId,
			title : title
		},
		cache : false,
		dataType : "json",
		async : false,
		success : function(data) {
			table.innerHTML = "";
			for (var i =0; i < data.summarys.length; i++) {
	            var div = document.createElement('div');
	            div.className = 'activity-item clearfix';
	            var div1 = document.createElement('div');
	            div1.setAttribute('class','activity-img');
	            div1.innerHTML = '<img src="'+data.summarys[i].imgUrl+'" alt="活动图片">';
	            var div2 = document.createElement('div');
	            div2.setAttribute('class','activity-content');
	            div2.innerHTML = '<p class="activity-title">'+data.summarys[i].name+'</p>';
	            if(data.summarys[i].endDate == null){
			       div2.innerHTML = '<p class="activity-time">时间：自'+data.summarys[i].endDate+'起即可参与</p>';
	            }else{
		           div2.innerHTML = '<p class="activity-time">时间：'+data.summarys[i].beginDate+'至'+data.summarys[i].endDate+'</p>';
	            }
	            if(data.summarys[i].openEvalue){
	            	div2.innerHTML += '<p class="activity-loves" data-num="'+parseInt(data.summarys[i].avg_starLevel)+'"><i></i><i></i><i></i><i></i><i></i></p>';
	            }
	            if(data.summarys[i].praise){
	 	            if(data.summarys[i].p_id == null){
	 	            	div2.innerHTML += '<p class="activity-sports"><span id="praise" data-activityId="'+data.summarys[i].activityId+'">'+data.summarys[i].count_parise+'</span></p>';
	 	            }else{
	 	            	div2.innerHTML += '<p class="activity-sports">'+
	 	            		'<span id="praise" data-activityId="'+data.summarys[i].activityId+'" class="like" style="background: url(\'/htmlWeixin/img/sport1.png\') left top / 22px 22px no-repeat;">'+data.summarys[i].count_parise+'</span>'+
	                 	'</p>';
	 	            }
	            }
	                
	            var a = document.createElement('a');
	            a.setAttribute('class','activity-detail');
	            a.setAttribute('href','../global/getActivity?activityId='+data.summarys[i].activityId+'&classIfy='+data.classIfy+'&placeId='+data.placeId+'&title='+data.title+'&pageNo='+data.pageNo);
	            a.innerHTML = '活动详情';
	            div.appendChild(div1);
	            div.appendChild(div2);
	            div.appendChild(a);
	            table.appendChild(div);
	        }
				document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
		    	document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
		    	document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
		    	document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
		    	document.getElementById("search_btn").setAttribute("data-title",data.title);
		    	$(".a-city").html(data.city);
				$("#search").val(data.title);
			},
				
	});
	/*爱心数量效果*/
    $('.activity-loves').each(function(){
        var count = parseInt($(this).attr("data-num"));
        $(this).find('i').slice(0,count).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
       
    });
  //点赞操作
    sp();
    $(".all-area").css("display","none");
}

function changeClassIfy(classIfy){
	var categoryId = document.getElementById("search_btn").getAttribute("data-categoryId");
	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
	var title = document.getElementById("search_btn").getAttribute("data-title");
	var table = document.body.querySelector('.content-wrap');
	console.log("切换类型"+categoryId);
	$.ajax({
		url : '../global/activity_load', 
		type : 'POST',
		data : {
			classIfy : classIfy,
			pageNo : 1,
			placeId : placeId,
			title : title,
			categoryId : categoryId
		},
		cache : false,
		dataType : "json",
		async : false,
		success : function(data) {
			table.innerHTML = "";
			for (var i =0; i < data.summarys.length; i++) {
	            var div = document.createElement('div');
	            div.className = 'activity-item clearfix';
	            var div1 = document.createElement('div');
	            div1.setAttribute('class','activity-img');
	            div1.innerHTML = '<img src="'+data.summarys[i].imgUrl+'" alt="活动图片">';
	            var div2 = document.createElement('div');
	            div2.setAttribute('class','activity-content');
	            div2.innerHTML = '<p class="activity-title">'+data.summarys[i].name+'</p>';
	            if(data.summarys[i].endDate == null){
			       div2.innerHTML = '<p class="activity-time">时间：自'+data.summarys[i].endDate+'起即可参与</p>';
	            }else{
		           div2.innerHTML = '<p class="activity-time">时间：'+data.summarys[i].beginDate+'至'+data.summarys[i].endDate+'</p>';
	            }
	            if(data.summarys[i].openEvalue){
	            	div2.innerHTML += '<p class="activity-loves" data-num="'+parseInt(data.summarys[i].avg_starLevel)+'"><i></i><i></i><i></i><i></i><i></i></p>';
	            }
	            if(data.summarys[i].praise){
	 	            if(data.summarys[i].p_id == null){
	 	            	div2.innerHTML += '<p class="activity-sports"><span id="praise" data-activityId="'+data.summarys[i].activityId+'">'+data.summarys[i].count_parise+'</span></p>';
	 	            }else{
	 	            	div2.innerHTML += '<p class="activity-sports">'+
	 	            		'<span id="praise" data-activityId="'+data.summarys[i].activityId+'" class="like" style="background: url(\'/htmlWeixin/img/sport1.png\') left top / 22px 22px no-repeat;">'+data.summarys[i].count_parise+'</span>'+
	                 	'</p>';
	 	            }
	            }
	                
	            var a = document.createElement('a');
	            a.setAttribute('class','activity-detail');
	            a.setAttribute('href','../global/getActivity?activityId='+data.summarys[i].activityId+'&classIfy='+data.classIfy+'&placeId='+data.placeId+'&title='+data.title+'&pageNo='+data.pageNo);
	            a.innerHTML = '活动详情';
	            div.appendChild(div1);
	            div.appendChild(div2);
	            div.appendChild(a);
	            table.appendChild(div);
	        }
				document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
		    	document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
		    	document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
		    	document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
		    	document.getElementById("search_btn").setAttribute("data-title",data.title);
		    	 $(".a-city").html(data.city);
				 $("#search").val(data.title);
			},
				
	});
	/*爱心数量效果*/
    $('.activity-loves').each(function(){
        var count = parseInt($(this).attr("data-num"));
        $(this).find('i').slice(0,count).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
       
      
    });
  //点赞操作
    sp();
    $(".all-class").css("display","none");
}


/*顶部菜单按钮事件*/
$(function(){
    /*初始化城市*/
    $(".city-collapse-content").each(function(){
        var count = $(this).find('a').length;
        $(this).find('a').slice(12,count).hide();
    });
    $('.top-menu').on('click',function(){
        if((event.target.getAttribute('class')=='top-menu')||(event.target.getAttribute('class')=='top-menu active')){
            $(this).find('ul').slideToggle()
                .parent().siblings().find('ul').hide();
            $(this).addClass('active').siblings().removeClass('active');
            return false;
        }
    });
	/*链接转成AJAX*/
/*	$('.all-class li').on('click',function(){
		if(event.target.tagName=='A'){
			console.log("点击了链接");
			return false;
		}
	});
	
	$('.city-collapse div').on('click',function(){
		if(event.target.tagName=='A'){
			console.log("点击了链接");
			return false;
		}
	});*/
    /*绑定事件,因为事件冒泡与事件捕捉，所以先判断触发事件的根元素*/
    $('.area-menu').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if(event.target.tagName=='LI'){
            $(this).children('.city-collapse').slideToggle()
                .parent().siblings().children('.city-collapse').hide();
            return false;
        }else if(event.target.tagName=='A'){
           
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


$(function(){
    /*爱心数量效果*/
    $('.activity-loves').each(function(){
        var count = parseInt($(this).attr("data-num"));
        $(this).find('i').slice(0,count).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
       
    });
  //点赞操作
    sp();
});
function sp(){
	//点赞操作
    mui(".activity-sports").on('tap','span',function (event) {
    	console.log("点赞");
		var type = "";
		if($(this).hasClass('like')){
			type = 'remove';
		}else{
			type = 'add';
		}
		var activityId = this.getAttribute("data-activityId");
		var $span = $(this);
    	$.ajax({
    		url : '../global/activityPraise', 
    		type : 'POST',
    		data : {
    			activityId : activityId,
    			type : type
    		},
    		cache : false,
    		dataType : "json",
    		async : false,
    		success : function(data) {
    			console.log(data);
    			if(data.message != null){
    				return;
    			}
				if($span.hasClass('like')){
					$span.css({"background":"url(../img/sport.png) no-repeat left top","background-size":"22px 22px"})
						.html(parseInt(data.praiseNum)).removeClass('like');
				}else {
					$span.css({"background":"url(../img/sport1.png) no-repeat left top","background-size":"22px 22px"})
						.html(parseInt(data.praiseNum)).addClass('like');
				}
    		},
    		error : function(data){
    			alert("操作失败");
    			return;
    		}
    	});
	});
}
/*上拉刷新*/
mui.init({
    pullRefresh: {
        container: '#content',
        up: {
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
});
mui('#content').on('tap','a',function(){
    document.location.href = this.href;
});
/**
 * 上拉加载具体业务实现
 */

function pullupRefresh() {
    setTimeout(function() {
    	
    	var classIfy = document.getElementById("search_btn").getAttribute("data-classIfy");
    	var placeId = document.getElementById("search_btn").getAttribute("data-placeId");
    	var pageNo = document.getElementById("search_btn").getAttribute("data-pageNo");
    	var pageNum = document.getElementById("search_btn").getAttribute("data-pageNum");
    	var title = document.getElementById("search_btn").getAttribute("data-title");
    	var categoryId = document.getElementById("search_btn").getAttribute("data-categoryId");
    	console.log("上拉加载"+categoryId);
    	if(parseInt(pageNo)+1 > pageNum){
			mui('#content').pullRefresh().endPullupToRefresh((true));
			return; //参数为true代表没有更多数据了。
		}else{
			mui('#content').pullRefresh().endPullupToRefresh((false)); //参数为true代表没有更多数据了。
		
		}
        var table = document.body.querySelector('.content-wrap');
        $.ajax({
			url : '../global/activity_load', 
			type : 'POST',
			data : {
				classIfy : parseInt(classIfy),
				pageNo : parseInt(pageNo)+1,
				title : title,
				placeId : parseInt(placeId),
				categoryId : categoryId
			},
			cache : false,
			dataType : "json",
			async : true,
			success : function(data) {
				for (var i =0; i < data.summarys.length; i++) {
	            var div = document.createElement('div');
	            div.className = 'activity-item clearfix';
	            var div1 = document.createElement('div');
	            div1.setAttribute('class','activity-img');
	            div1.innerHTML = '<img src="'+data.summarys[i].imgUrl+'" alt="活动图片">';
	            var div2 = document.createElement('div');
	            div2.setAttribute('class','activity-content');
	            div2.innerHTML = '<p class="activity-title">'+data.summarys[i].name+'</p>';
	            if(data.summarys[i].endDate == null){
			       div2.innerHTML = '<p class="activity-time">时间：自'+data.summarys[i].endDate+'起即可参与</p>';
	            }else{
		           div2.innerHTML = '<p class="activity-time">时间：'+data.summarys[i].beginDate+'至'+data.summarys[i].endDate+'</p>';
	            }
	            if(data.summarys[i].openEvalue){
	            	div2.innerHTML += '<p class="activity-loves" data-num="'+parseInt(data.summarys[i].avg_starLevel)+'"><i></i><i></i><i></i><i></i><i></i></p>';
	            }
	            if(data.summarys[i].praise){
	 	            if(data.summarys[i].p_id == null){
	 	            	div2.innerHTML += '<p class="activity-sports"><span id="praise" data-activityId="'+data.summarys[i].activityId+'">'+data.summarys[i].count_parise+'</span></p>';
	 	            }else{
	 	            	div2.innerHTML += '<p class="activity-sports">'+
	 	            		'<span id="praise" data-activityId="'+data.summarys[i].activityId+'" class="like" style="background: url(\'/htmlWeixin/img/sport1.png\') left top / 22px 22px no-repeat;">'+data.summarys[i].count_parise+'</span>'+
	                 	'</p>';
	 	            }
	            }
	                 
	            var a = document.createElement('a');
	            a.setAttribute('class','activity-detail');
	            a.setAttribute('href','../global/getActivity?activityId='+data.summarys[i].activityId+'&classIfy='+data.classIfy+'&placeId='+data.placeId+'&title='+data.title+'&pageNo='+data.pageNo);
	            a.innerHTML = '活动详情';
	            div.appendChild(div1);
	            div.appendChild(div2);
	            div.appendChild(a);
	            table.appendChild(div);
	        }
				document.getElementById("search_btn").setAttribute("data-classIfy",data.classIfy);
		    	document.getElementById("search_btn").setAttribute("data-placeId",data.placeId);
		    	document.getElementById("search_btn").setAttribute("data-pageNo",data.pageNo);
		    	document.getElementById("search_btn").setAttribute("data-pageNum",data.pageNum);
		    	document.getElementById("search_btn").setAttribute("data-title",data.title);
		    	document.getElementById("search_btn").setAttribute("data-categoryId",data.categoryId);

		    	$(".a-city").html(data.city);
				 $("#search").val(data.title);
			},
			error:function(data){
				console.log(data);
			},
        });
       
    }, 1500);
    sp();
}