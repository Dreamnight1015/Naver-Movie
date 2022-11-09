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
    $('.towrapper').slick({
        rows: 1,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:$('.toslider .next'),
        prevArrow:$('.toslider .prev')
    })
    $('.exwrapper').slick({
        rows: 1,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:$('.exslider .next'),
        prevArrow:$('.exslider .prev')
    });
    $(".sec3Linner1").mouseenter(function(){
        $(this).css('height','200px');
        $('.sec3Linner1 .reviewtitle').css('border-bottom','1px solid #03FC5D');
        $('.sec3Linner1 .reviewposter').css('height', '180px');
        $('.sec3Linner1 .sec3LRul').css('display','block');
        $('.sec3Linner2').css('height','100px');
        $('.sec3Linner2 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner2 .reviewposter').css('height', '90px');
        $('.sec3Linner2 .sec3LRul').css('display','none');
        $('.sec3Linner3').css('height','100px');
        $('.sec3Linner3 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner3 .reviewposter').css('height', '90px');
        $('.sec3Linner3 .sec3LRul').css('display','none');
        $('.sec3Linner4').css('height','100px');
        $('.sec3Linner4 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner4 .reviewposter').css('height', '90px');
        $('.sec3Linner4 .sec3LRul').css('display','none');
    });
    $(".sec3Linner2").mouseenter(function(){
        $(this).css('height','200px');
        $('.sec3Linner2 .reviewtitle').css('border-bottom','1px solid #03FC5D');
        $('.sec3Linner2 .reviewposter').css('height', '180px');
        $('.sec3Linner2 .sec3LRul').css('display','block');
        $('.sec3Linner1').css('height','100px');
        $('.sec3Linner1 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner1 .reviewposter').css('height', '90px');
        $('.sec3Linner1 .sec3LRul').css('display','none');
        $('.sec3Linner3').css('height','100px');
        $('.sec3Linner3 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner3 .reviewposter').css('height', '90px');
        $('.sec3Linner3 .sec3LRul').css('display','none');
        $('.sec3Linner4').css('height','100px');
        $('.sec3Linner4 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner4 .reviewposter').css('height', '90px');
        $('.sec3Linner4 .sec3LRul').css('display','none');
    });
    $(".sec3Linner3").mouseenter(function(){
        $(this).css('height','200px');
        $('.sec3Linner3 .reviewtitle').css('border-bottom','1px solid #03FC5D');
        $('.sec3Linner3 .reviewposter').css('height', '180px');
        $('.sec3Linner3 .sec3LRul').css('display','block');
        $('.sec3Linner1').css('height','100px');
        $('.sec3Linner1 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner1 .reviewposter').css('height', '90px');
        $('.sec3Linner1 .sec3LRul').css('display','none');
        $('.sec3Linner2').css('height','100px');
        $('.sec3Linner2 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner2 .reviewposter').css('height', '90px');
        $('.sec3Linner2 .sec3LRul').css('display','none');
        $('.sec3Linner4').css('height','100px');
        $('.sec3Linner4 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner4 .reviewposter').css('height', '90px');
        $('.sec3Linner4 .sec3LRul').css('display','none');
    });
    $(".sec3Linner4").mouseenter(function(){
        $(this).css('height','200px');
        $('.sec3Linner4 .reviewtitle').css('border-bottom','1px solid #03FC5D');
        $('.sec3Linner4 .reviewposter').css('height', '180px');
        $('.sec3Linner4 .sec3LRul').css('display','block');
        $('.sec3Linner1').css('height','100px');
        $('.sec3Linner1 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner1 .reviewposter').css('height', '90px');
        $('.sec3Linner1 .sec3LRul').css('display','none');
        $('.sec3Linner3').css('height','100px');
        $('.sec3Linner3 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner3 .reviewposter').css('height', '90px');
        $('.sec3Linner3 .sec3LRul').css('display','none');
        $('.sec3Linner2').css('height','100px');
        $('.sec3Linner2 .reviewtitle').css('border-bottom','0px solid #03FC5D');
        $('.sec3Linner2 .reviewposter').css('height', '90px');
        $('.sec3Linner2 .sec3LRul').css('display','none');
    });
    
});
