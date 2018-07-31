/**
 * Created by doulu on 2017/9/24.
 */
$(function(){
    $('.assess-btn').on('click',function(){
        $('.pop-up-layer').show();
    });
    $('.cancel-btn').on('click',function(){
        $('.pop-up-layer').hide();
        $('.activity-loves i').each(function () {
            $(this).css({"background":"url(../img/loves2.png) no-repeat center","background-size":"cover"});
        });
        return false;
    });
    $('.assess-loves-btn').on('click',function(){
        $('.pop-up-layer').hide();
        $('.activity-loves i').each(function () {
            $(this).css({"background":"url(../img/loves2.png) no-repeat center","background-size":"cover"});
        });
    });
    /*用户评价爱心效果*/
    $('.activity-loves i').on('click',function(){
        /*爱心数量效果*/
        $(this).prevAll().each(function(){
            $(this).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
        });
        $(this).css({"background":"url(../img/loves1.png) no-repeat center","background-size":"cover"});
        $(this).nextAll().each(function(){
            $(this).css({"background":"url(../img/loves2.png) no-repeat center","background-size":"cover"});
        });
        $('.activity-loves').attr('data-likes',$(this).prevAll().length+1);
    });
});

$('#evalu').on('click',function(){
	var count = parseInt($('.activity-loves').attr('data-likes'));
	var activityId = document.getElementById("evalu").getAttribute("data-activityId");
	var title = document.getElementById("h1").getAttribute("data-title");
	var pageNo = document.getElementById("h1").getAttribute("data-pageNo");
	var classIfy = document.getElementById("h1").getAttribute("data-classIfy");
	var placeId = document.getElementById("h1").getAttribute("data-placeId");
	var categoryId = document.getElementById("h1").getAttribute("data-categoryId");
	if(isNaN(count)){
		alert("请选择评价等级");
		return;
	}
	$.ajax({
		url : '../global/activityEvalu', 
		type : 'POST',
		data : {
			starLevel : count,
			activityId : parseInt(activityId)
		},
		cache : true,
		dataType : "json",
		async : false,
		success : function(data) {
			if(data.success){
				window.location.href="../global/activityList?title="+title+"&classIfy="+classIfy+"&placeId="+placeId+"&pageNo="+pageNo+"&categoryId="+categoryId;
			}else{
				alert("请在手机微信端操作");
				console.log("评价失败");
				window.location.href="../global/activityList?title="+title+"&classIfy="+classIfy+"&placeId="+placeId+"&pageNo="+pageNo+"&categoryId="+categoryId;
			}
		},
	});
});
function getEvalu(id){
	document.getElementById("evalu").setAttribute("data-activityId",id);
	/*$.ajax({
		url : '../global/getEvalu', 
		type : 'POST',
		data : {
			activityId : id
		},
		cache : true,
		dataType : "json",
		async : false,
		success : function(data) {
			if(data.success){
				console.log(data.starLevel);
				if(data.starLevel >= 1){
					$("#loves").html("感谢您的评价，我们会继续努力！");
					
				}
				document.getElementById("loves").setAttribute("data-num",data.starLevel);
			}else{
				alert("请在手机微信端操作");
				return;
			}
		},
	});*/
}