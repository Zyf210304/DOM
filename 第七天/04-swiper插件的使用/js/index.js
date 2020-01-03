window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
	
	Swiper.on('slideChangeTransitionEnd', function () {
	
	 var imgurl = $('.swiper-slide-active img').attr("src");  
	
	var txt = $('.swiper-slide-active').html();  
	
	console.log("内容："+txt+"===索引值："+Swiper.activeIndex+"===图片地址："+imgurl);
	
	});
	

	
})