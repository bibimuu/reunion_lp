// service-flowのnext
$(function(){
  $(".next--coordinator").click(function(){
    var result = $('.service-flow__slider__position--coordinator').eq(0).css('right');
    var result1 = $('.service-flow__slider__position--coordinator').eq(1).css('right');
    var result2 = $('.service-flow__slider__position--coordinator').eq(2).css('right');
    if(result === "0px"){
      $(".service-flow__slider__position--coordinator").eq(0).animate({right:'100%',}, "slow");
      $(".service-flow__slider__position--coordinator").eq(1).animate({right:'0%',},"slow");
      $(".back--coordinator").removeClass("disabled");
      $(".back--coordinator").addClass("effect__hover--scale");
    } else if(result1 === "0px") {
      $(".service-flow__slider__position--coordinator").eq(1).animate({right:'100%',}, "slow");
      $(".service-flow__slider__position--coordinator").eq(2).animate({right:'0%',},"slow");
      $(".next--coordinator").removeClass("effect__hover--scale");
      $(".next--coordinator").addClass("disabled");
    }
  });
});

$(function(){
  $(".next--participant").click(function(){
    var result = $('.service-flow__slider__position--participant').eq(0).css('right');
    var result1 = $('.service-flow__slider__position--participant').eq(1).css('right');
    var result2 = $('.service-flow__slider__position--participant').eq(2).css('right');
    if(result === "0px"){
      $(".service-flow__slider__position--participant").eq(0).animate({right:'100%',}, "slow");
      $(".service-flow__slider__position--participant").eq(1).animate({right:'0%',},"slow");
      $(".back--participant").removeClass("disabled");
      $(".back--participant").addClass("effect__hover--scale");
    } else if(result1 === "0px") {
      $(".service-flow__slider__position--participant").eq(1).animate({right:'100%',}, "slow");
      $(".service-flow__slider__position--participant").eq(2).animate({right:'0%',},"slow");
      $(".next--participant").removeClass("effect__hover--scale");
      $(".next--participant").addClass("disabled");
    }
  });
});

// service-flowのback

$(function(){
  $(".back--coordinator").click(function(){
    var result = $('.service-flow__slider__position--coordinator').eq(0).css('right');
    var result1 = $('.service-flow__slider__position--coordinator').eq(1).css('right');
    var result2 = $('.service-flow__slider__position--coordinator').eq(2).css('right');
    if(result2 === "0px"){
      $(".service-flow__slider__position--coordinator").eq(2).animate({right:'-100%',}, "slow");
      $(".service-flow__slider__position--coordinator").eq(1).animate({right:'0%',},"slow");
      $(".next--coordinator").removeClass("disabled");
      $(".next--coordinator").addClass("effect__hover--scale");
    } else if(result1 === "0px") {
      $(".service-flow__slider__position--coordinator").eq(1).animate({right:'-100%',}, "slow");
      $(".service-flow__slider__position--coordinator").eq(0).animate({right:'0%',},"slow");
      $(".back--coordinator").removeClass("effect__hover--scale");
      $(".back--coordinator").addClass("disabled");
    }
  });
});

$(function(){
  $(".back--participant").click(function(){
    var result = $('.service-flow__slider__position--participant').eq(0).css('right');
    var result1 = $('.service-flow__slider__position--participant').eq(1).css('right');
    var result2 = $('.service-flow__slider__position--participant').eq(2).css('right');
    if(result2 === "0px"){
      $(".service-flow__slider__position--participant").eq(2).animate({right:'-100%',}, "slow");
      $(".service-flow__slider__position--participant").eq(1).animate({right:'0%',},"slow");
      $(".next--participant").removeClass("disabled");
      $(".next--participant").addClass("effect__hover--scale");
    } else if(result1 === "0px") {
      $(".service-flow__slider__position--participant").eq(1).animate({right:'-100%',}, "slow");
      $(".service-flow__slider__position--participant").eq(0).animate({right:'0%',},"slow");
      $(".back--participant").removeClass("effect__hover--scale");
      $(".back--participant").addClass("disabled");
    }
  });
});

// service-flowの矢印
$(function(){
  $(".arrow-left").click(function(){
    console.log("left")
    $(".service-flow--coordinator__box").animate({left:'0%',}, "slow");
    $(".service-flow--participant__box").animate({right:'0%',},"slow");
  });
});

$(function(){
  $(".arrow-right").click(function(){
    var result = $('.service-flow__slider__position--participant').eq(0).css('right');
    var result1 = $('.service-flow__slider__position--participant').eq(1).css('right');
    var result2 = $('.service-flow__slider__position--participant').eq(2).css('right');

    if(result !== "0px" && result1 !== "0px"){
      $(".service-flow__slider__position--participant").eq(0).css("right","-100%");
      $(".service-flow__slider__position--participant").eq(1).css("right","-100%");
    } else if(result !== "0px"){
      console.log(123)
      $(".service-flow__slider__position--participant").eq(0).css("right","-100%");
    }
    $(".service-flow--participant__box").animate({right:'-100%',},"slow");
    $(".service-flow--coordinator__box").animate({left:'0%',},"slow");
  });
});

// スクロール

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// headerの出現

$(function() {
  var $win = $(window),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 600 ) {
      $("header").removeClass("header");
      $("header").addClass(showClass);
    } else {
      $("header").addClass("header");
    }
  });
});

$(function() {
  var $win = $(window),
      $header = $('header'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });
});


// 参加者 幹事のアニメーション

$(document).ready(function(){
  $('.service-flow-items').slick({
    arrows:true,
    swipe:false
  }
  );
});