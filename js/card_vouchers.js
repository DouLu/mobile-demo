/**
 * Created by doulu on 2017/10/5.
 */
$(function(){
    /*初始化未使用的卡券显示出来*/
    var $unused = $('#unused');
    var $expired = $('#expired');
    var $used = $('#used');
    $unused.show();
    $('.fixed-menu p').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).attr('class').split(" ")[0]=='unused'){
            $unused.show();
            $expired.hide();
            $used.hide();
        }else if($(this).attr('class').split(" ")[0]=='expired'){
            $expired.show();
            $unused.hide();
            $used.hide();
        }else if($(this).attr('class').split(" ")[0]=='used'){
            $used.show();
            $expired.hide();
            $unused.hide();
        }
    });
});