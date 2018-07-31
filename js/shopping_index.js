/**
 * Created by doulu on 2017/9/30.
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
// /*上拉加载更多*/
// mui.init({
//     pullRefresh: {
//         container: '#scroll_content',
//         up: {
//             contentrefresh: '正在加载...',
//             callback: pullupRefresh
//         }
//     }
// });
mui('.item').on('tap','a',function(){
    document.location.href = this.href;
});
// /**
//  * 上拉加载具体业务实现
//  */
// var count = 0;
// function pullupRefresh() {
//     setTimeout(function() {
//         mui('#scroll_content').pullRefresh().endPullupToRefresh((++count >= 1)); //参数为true代表没有更多数据了。
//         var item_list = document.body.querySelector('.item-list');
//         for (var i = 0; i < 5; i++) {/*每次加载5条记录*/
//             var div = document.createElement('div');
//             div.className = 'item';
//             div.innerHTML = '<a href="#" class="item-img"><div><img src="../img/item-p.png" alt="产品图片"></div>'+
//                 '<p>天然恒温凉感面料，蚕丝美天然恒温凉感面料，蚕丝美</p></a>'+
//                 '<label class="label">新品</label><p class="item-title">天然恒温凉感面料，蚕丝美天然恒温凉感面料，蚕丝美</p>'+
//                 '<p class="item-value">￥155</p>';
//             item_list.appendChild(div);
//         }
//     }, 1500);
// }
