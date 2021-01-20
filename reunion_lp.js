// service-flowのnext

$(function(){
  $("#next").click(function(){
    $('.service-flow--coordinator--1').fadeOut(500);
    $('.service-flow--coordinator--2').css('display','flex').hide().delay(500).fadeIn(500);
  })
});

// service-flowのback

$(function(){
  $("#back").click(function(){
    $('.service-flow--coordinator--2').fadeOut(500);
    $('.service-flow--coordinator--1').css('display','flex').hide().delay(500).fadeIn(500);
  })
});

// service-flowの矢印
$(function(){
  $(".arrow-left").click(function(){
    $(".service-flow--coordinator__box").animate({left:'0%',}, "slow");
    $(".service-flow--participant__box").animate({right:'0%',},"slow");
  });
});

// animate( { width: 'toggle',}, 'slow' )

$(function(){
  $(".arrow-right").click(function(){
    $(".service-flow--participant__box").animate({right:'-100%',},"slow");
    $(".service-flow--coordinator__box").css({left:'0%',},"slow");
  });
});

// $(function(){
//   $("#arrow-left").click(function(){
//     if($(".service-flow--participant--1").hasClass("service-flow--participant")){
//       $('.service-flow--participant--1').removeClass('service-flow--participant');
//       $('.service-flow--participant--1').addClass('service-flow--hide');
//       $(".service-flow--coordinator--1").removeClass("service-flow--hide");
//       $(".service-flow--coordinator--1").addClass("service-flow--coordinator");
//     }
//   });
// });

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