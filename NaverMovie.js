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
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/블랙팬서와칸다포에버.jpg)").animate({opacity:1}, 500)
        $(".info1").css("display",'block');
        $(".info2, .info3, .info4, .info5, .info6, .info7, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(2)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/자백.jpg)").animate({opacity:1}, 500)
        $(".info2").css("display",'block');
        $(".info1, .info3, .info4, .info5, .info6, .info7, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(3)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/리멤버.jfif)").animate({opacity:1}, 500)
        $(".info3").css("display",'block');
        $(".info1, .info2, .info4, .info5, .info6, .info7, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(4)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/에브리씽.jfif)").animate({opacity:1}, 500)
        $(".info4").css("display",'block');
        $(".info1, .info2, .info3, .info5, .info6, .info7, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(5)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/블랙아담.jpg)").animate({opacity:1}, 500)
        $(".info5").css("display",'block');
        $(".info1, .info2, .info3, .info4, .info6, .info7, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(6)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/동감.jfif)").animate({opacity:1}, 500)
        $(".info6").css("display",'block');
        $(".info1, .info2, .info3, .info4, .info5, .info7, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(7)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/고속도로가족.jfif)").animate({opacity:1}, 500)
        $(".info7").css("display",'block');
        $(".info1, .info2, .info3, .info4, .info5, .info6, .info8, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(8)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/짱구는못말려.jpg)").animate({opacity:1}, 500)
        $(".info8").css("display",'block');
        $(".info1, .info2, .info3, .info4, .info5, .info6, .info7, .info9, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(9)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/인생은아름다워.jpg)").animate({opacity:1}, 500)
        $(".info9").css("display",'block');
        $(".info1, .info2, .info3, .info4, .info5, .info6, .info7, .info8, .info10").css("display",'none');
    })
    $(".rankinglist li:nth-child(10)").click(function(){
        $(".poster").css('opacity','0').stop().css("background-image","url(./영화슬라이드/미시즈.jfif)").animate({opacity:1}, 500)
        $(".info10").css("display",'block');
        $(".info1, .info2, .info3, .info4, .info5, .info6, .info7, .info8, .info9").css("display",'none');
    })
    $(".button1").mouseover(function(){
        $(this).css('cursor','pointer');
    })
    $(".button2").mouseover(function(){
        $(this).css('cursor','pointer');
    })
    $('.mainwrapper').slick({
        rows: 1,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:$('.mainslider .next'),
        prevArrow:$('.mainslider .prev'),
        responsive: [
            {
                breakpoint: 1025,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings:{
                    draggable: true,
                    slidesToShow: 3,
                    swipeToSlide: true,
                    arrows: false
                }
            }
        ]
    });
    $('.towrapper').slick({
        rows: 1,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:$('.toslider .next'),
        prevArrow:$('.toslider .prev'),
        responsive: [
            {
                breakpoint: 1025,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings:{
                    draggable: true,
                    slidesToShow: 3,
                    swipeToSlide: true,
                    arrows: false
                }
            }
        ]
    })
    $('.exwrapper').slick({
        rows: 1,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:$('.exslider .next'),
        prevArrow:$('.exslider .prev'),
        responsive: [
            {
                breakpoint: 1025,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings:{
                    draggable: true,
                    slidesToShow: 3,
                    swipeToSlide: true,
                    arrows: false
                }
            }
        ]
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
    if($(window).width() < 640){
        $(".sec3Linner1").mouseenter(function(){
            $(this).css('height','100px');
            $('.sec3Linner1 .reviewtitle').css('border-bottom','1px solid #03FC5D');
            $('.sec3Linner1 .reviewposter').css('height', '80px');
            $('.sec3Linner1 .sec3LRul').css('display','block');
            $('.sec3Linner2').css('height','50px');
            $('.sec3Linner2 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner2 .reviewposter').css('height', '40px');
            $('.sec3Linner2 .sec3LRul').css('display','none');
            $('.sec3Linner3').css('height','50px');
            $('.sec3Linner3 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner3 .reviewposter').css('height', '40px');
            $('.sec3Linner3 .sec3LRul').css('display','none');
            $('.sec3Linner4').css('height','50px');
            $('.sec3Linner4 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner4 .reviewposter').css('height', '40px');
            $('.sec3Linner4 .sec3LRul').css('display','none');
        });
    }
    if($(window).width() < 640){
        $(".sec3Linner2").mouseenter(function(){
            $(this).css('height','100px');
            $('.sec3Linner2 .reviewtitle').css('border-bottom','1px solid #03FC5D');
            $('.sec3Linner2 .reviewposter').css('height', '80px');
            $('.sec3Linner2 .sec3LRul').css('display','block');
            $('.sec3Linner1').css('height','50px');
            $('.sec3Linner1 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner1 .reviewposter').css('height', '40px');
            $('.sec3Linner1 .sec3LRul').css('display','none');
            $('.sec3Linner3').css('height','50px');
            $('.sec3Linner3 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner3 .reviewposter').css('height', '40px');
            $('.sec3Linner3 .sec3LRul').css('display','none');
            $('.sec3Linner4').css('height','50px');
            $('.sec3Linner4 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner4 .reviewposter').css('height', '40px');
            $('.sec3Linner4 .sec3LRul').css('display','none');
        });
    }
    if($(window).width() < 640){
        $(".sec3Linner3").mouseenter(function(){
            $(this).css('height','100px');
            $('.sec3Linner3 .reviewtitle').css('border-bottom','1px solid #03FC5D');
            $('.sec3Linner3 .reviewposter').css('height', '80px');
            $('.sec3Linner3 .sec3LRul').css('display','block');
            $('.sec3Linner2').css('height','50px');
            $('.sec3Linner2 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner2 .reviewposter').css('height', '40px');
            $('.sec3Linner2 .sec3LRul').css('display','none');
            $('.sec3Linner1').css('height','50px');
            $('.sec3Linner1 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner1 .reviewposter').css('height', '40px');
            $('.sec3Linner1 .sec3LRul').css('display','none');
            $('.sec3Linner4').css('height','50px');
            $('.sec3Linner4 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner4 .reviewposter').css('height', '40px');
            $('.sec3Linner4 .sec3LRul').css('display','none');
        });
    }
    if($(window).width() < 640){
        $(".sec3Linner4").mouseenter(function(){
            $(this).css('height','100px');
            $('.sec3Linner4 .reviewtitle').css('border-bottom','1px solid #03FC5D');
            $('.sec3Linner4 .reviewposter').css('height', '80px');
            $('.sec3Linner4 .sec3LRul').css('display','block');
            $('.sec3Linner2').css('height','50px');
            $('.sec3Linner2 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner2 .reviewposter').css('height', '40px');
            $('.sec3Linner2 .sec3LRul').css('display','none');
            $('.sec3Linner3').css('height','50px');
            $('.sec3Linner3 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner3 .reviewposter').css('height', '40px');
            $('.sec3Linner3 .sec3LRul').css('display','none');
            $('.sec3Linner1').css('height','50px');
            $('.sec3Linner1 .reviewtitle').css('border-bottom','0px solid #03FC5D');
            $('.sec3Linner1 .reviewposter').css('height', '40px');
            $('.sec3Linner1 .sec3LRul').css('display','none');
        });
    }
});
