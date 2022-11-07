$(document).ready(function(){
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    if($(window).width() > 1024){
        $(".gnb > ul > li").hover(function(){
            $(this).children('.snb').slideToggle();    
        });
    }
    $(".gnb > ul > li > a").click(function(){
        $(this).addClass('on').next().slideToggle(200);
        $(".gnb > ul > li > a").not(this).removeClass('on').next().slideUp(200);
        return false;
    });
    $(".material-icons").click(function(){
        $(".material-icons").toggle();
        $(".gnb > ul").toggleClass('on');
    });
    $(".rankinglist li:nth-child(1)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/블랙팬서와칸다포에버.jpg").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(2)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/자백.jpg").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(3)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","../영화슬라이드/리멤버.jfif").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(4)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/에브리씽.jfif").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(5)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/블랙아담.jpg").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(6)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/동감(2022).jfif").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(7)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/고속도로가족.jfif").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(8)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/짱구는못말려.jpg").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(9)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/인생은아름다워.jpg").animate({opacity:1}, 500)
    })
    $(".rankinglist li:nth-child(10)").click(function(){
        $(".poster").css('opacity','0.5').stop().attr("src","./영화슬라이드/미시즈.jfif").animate({opacity:1}, 500)
    })
    $('.post-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
      });
});
