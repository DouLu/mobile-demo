/**
 * Created by doulu on 2017/10/2.
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