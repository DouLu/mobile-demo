/**
 * Created by doulu on 2017/9/24.
 */
/*顶部切换按钮*/
$(function(){
    $('.top-menu').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#'+$(this).attr('data-identify')).show().siblings().hide();
    });
});
var page = document.getElementById("city_list").getAttribute("data-page");
var classIfy = document.getElementById("domestic").getAttribute("data-classIfy");
var title = document.getElementById("domestic").getAttribute("data-title");
if(classIfy == null || classIfy == ""){
	classIfy = 0;
}

/*城市排序*/
$(function(){
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var city_list = document.getElementById('city_list');
    $.ajax({
    	url : '../global/getPlaceList',
        type : 'POST',
        data : {
        	type : "domestic"
        },
        cache : false,
        dataType : "json",
        async : true,
        success : function(data) {
            var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            for(var c=0;c<letters.length;c++){
                var ul = document.createElement('ul');
                var isFirst = true;/*判断是否为每列的第一个以及是否有某字母开头的城市*/
                for(var i=0;i<data.place.length;i++){
                    var initials = data.place[i].placeSpell.substr(0, 1).toUpperCase();
                    if(initials==letters[c]){
                        if(isFirst){
                            var li = document.createElement('li');
                            li.innerHTML = initials;
                            li.setAttribute('id',initials.toLowerCase());
                            ul.appendChild(li);
                            var li1 = document.createElement('li');
                            var a = document.createElement('a');
                            a.innerHTML = data.place[i].placeName;
                            if(page == "index"){
                            	a.setAttribute('href','../global/index?placeId='+data.place[i].id+'&pageNo=1');
                            }else{
                            	a.setAttribute('href','../global/activityList?classIfy=0&placeId='+data.place[i].id+'&title=&pageNo=1');
                            }
                            
                            a.setAttribute('id',parseInt(data.place[i].id));
                            a.setAttribute('data-name',data.place[i].placeSpell);
                            li1.appendChild(a);
                            ul.appendChild(li1);
                            isFirst = false;
                        }else {
                            var li = document.createElement('li');
                            var a = document.createElement('a');
                            a.innerHTML = data.place[i].placeName;
                            if(page == "index"){
                            	a.setAttribute('href','../global/index?placeId='+data.place[i].id+'&pageNo=1');
                            }else{
                            	a.setAttribute('href','../global/activityList?classIfy=0&placeId='+data.place[i].id+'&title=&pageNo=1');
                            }
                            a.setAttribute('id',parseInt(data.place[i].id));
                            a.setAttribute('data-name',data.place[i].placeSpell);
                            li.appendChild(a);
                            ul.appendChild(li);
                        }
                    }
                }
                if(!isFirst){
                    city_list.appendChild(ul);
                }
            }
        },error : function(data) {}
    });
    /*动态加载A到Z*/
    var $c_position = $('#domestic').find('.city-position ul');
    for(var c=0;c<letters.length;c++){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href','#'+letters[c].toLowerCase());
        a.innerHTML = letters[c];
        li.appendChild(a);
        $c_position.get(0).appendChild(li);
    }
    var foreign_city = document.getElementById('foreign_city');
    $.ajax({
    	url : '../global/getPlaceList',
        type : 'POST',
        data :{
        	type : "foreign"
        },
        cache : false,
        dataType : "json",
        async : true,
        success : function(data) {
            var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            for(var c=0;c<letters.length;c++){
                var ul = document.createElement('ul');
                var isFirst = true;/*判断是否为每列的第一个以及是否有某字母开头的城市*/
                for(var i=0;i<data.place.length;i++){
                    var initials = data.place[i].placeSpell.substr(0, 1).toUpperCase();
                    if(initials==letters[c]){
                        if(isFirst){
                            var li = document.createElement('li');
                            li.innerHTML = initials;
                            li.setAttribute('id','f'+initials.toLowerCase());
                            ul.appendChild(li);
                            var li1 = document.createElement('li');
                            var a = document.createElement('a');
                            a.innerHTML = data.place[i].placeName;
                            if(page == "index"){
                            	a.setAttribute('href','../global/index?placeId='+data.place[i].id+'&pageNo=1');
                            }else{
                            	a.setAttribute('href','../global/activityList?classIfy=0&placeId='+data.place[i].id+'&title=&pageNo=1');
                            }
                            a.setAttribute('id',parseInt(data.place[i].id));
                            a.setAttribute('data-name',data.place[i].placeSpell);
                            li1.appendChild(a);
                            ul.appendChild(li1);
                            isFirst = false;
                        }else {
                            var li = document.createElement('li');
                            var a = document.createElement('a');
                            a.innerHTML = data.place[i].placeName;
                            if(page == "index"){
                            	a.setAttribute('href','../global/index?placeId='+data.place[i].id+'&pageNo=1');
                            }else{
                            	a.setAttribute('href','../global/activityList?classIfy=0&placeId='+data.place[i].id+'&title=&pageNo=1');
                            }
                            a.setAttribute('id',parseInt(data.place[i].id));
                            a.setAttribute('data-name',data.place[i].placeSpell);
                            li.appendChild(a);
                            ul.appendChild(li);
                        }
                    }
                }
                if(!isFirst){
                    foreign_city.appendChild(ul);
                }
            }
        },error : function(data) {}
    });
    /*动态加载A到Z*/
    var $f_position = $('#foreign').find('.city-position ul');
    for(var f=0;f<letters.length;f++){
        var li = document.createElement('li');
        li.setAttribute('class','f'+letters[f].toLowerCase());
        var a = document.createElement('a');
        a.setAttribute('href','#f'+letters[f].toLowerCase());
        a.innerHTML = letters[f];
        li.appendChild(a);
        $f_position.get(0).appendChild(li);
    }
    /*元素添加到DOM里面后绑定事件*/
    /*$('.city-position ul li').on('click',function(){
        var $sbox = $('#'+$(this).attr('class'));
            console.log($sbox.position().top,$sbox.offset().top);
        $('.content').animate({scrollTop: $sbox.offset().top}, 1000);
            $('.content').animate({scrollTop: $sbox.offset().top-80}, 1000);
    });*/
});
/*国内城市搜索*/
function chinaSearchCity() {
    var searchCityName = $(".search-box input").val();
    if (searchCityName == "") {
        console.log("空的");
    } else {
        $('#city_list ul li a').each(function(){
            var cityName = $(this).html();
            var pinyin = $(this).attr("data-name");
            var cid = $(this).attr('id');
            if (pinyin.indexOf(searchCityName) != -1|| cityName.indexOf(searchCityName) != -1) {
                //$('.content').animate({scrollTop: $(this).offset().top}, 1000);
                javascript:document.getElementById(cid).scrollIntoView();
                console.log("搜索成功",$(this),cid);
            } else {
                console.log("匹配搜索失败");
            }
        });
    }
}
/*国外城市搜索*/
function foreignSearchCity() {
    var searchCityName = $(".search-box input").val();
    if (searchCityName == "") {
        console.log("空的");
    } else {
        $('#foreign_city ul li a').each(function(){
            var cityName = $(this).html();
            var pinyin = $(this).attr("data-name");
            var cid = $(this).attr('id');
            if (pinyin.indexOf(searchCityName) != -1|| cityName.indexOf(searchCityName) != -1) {
                //$('.content').animate({scrollTop: $(this).offset().top}, 1000);
                javascript:document.getElementById(cid).scrollIntoView();
                console.log("搜索成功",$(this),cid);
            } else {
                console.log("匹配搜索失败");
            }
        });
    }
}
/*
$('#searchCityName').bind('input propertychange', function() {
    searchCity();
});*/
$('#search_btn').on('click',function(){
	if($('#foreign').is(':hidden')){
		chinaSearchCity();
	}else{
		foreignSearchCity();
	}
});
$("#search").keyup(function(event){
    if(event.keyCode ==13){
    	if($('#foreign').is(':hidden')){
    		chinaSearchCity();
    	}else{
    		foreignSearchCity();
    	}
    }
});