/**
 * Created by doulu on 2017/10/1.
 */
/*顶部轮播*/
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
$(function(){
    /*用户解绑手机号按钮事件*/
    $('#no_binding_btn').on('click',function(){
        $('#unbind_protocol').show();
        return false;/*阻止A链接跳转*/
    });
    /*不允许*/
    $('#bind_no').on('click',function(){
        $('#unbind_protocol').hide();
        return false;/*阻止A链接跳转*/
    });
    /*允许*/
    $('#bind_yes').on('click',function(){
        $('#unbind_protocol').hide();
    });
});
/*实时交易协议*/
$(function(){
    $('#r_t_trading').on('click',function(){
        $('#user_protocol').show();
        $('#wrap').css('overflow-y','hidden');
    });
    /*不同意*/
    $('#up_no').on('click',function(){
        $('#user_protocol').hide();
        $('#r_t_trading').addClass('r_t_trading');
        $('#wrap').css('overflow-y','scroll');
        return false;/*阻止A链接跳转*/
    });
    /*同意*/
    $('#up_yes').on('click',function(){
        $('#user_protocol').hide();
        $('#r_t_trading').removeClass('r_t_trading');
        //$('#r_t_trading').removeClass('r_t_trading').unbind('click');
        $('#wrap').css('overflow-y','scroll');
        return false;/*阻止A链接跳转*/
    });
});
