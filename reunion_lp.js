// NEXT
// service-flow--coordinatorのnext--web
$(function(){
  $(".next--coordinator").click(function(){
    var result = $('.service-flow--coordinator__number').eq(0).css('left');
    var result1 = $('.service-flow--coordinator__number').eq(1).css('left');
    if(result === "0px"){
      $(".service-flow--coordinator__number").eq(0).animate({opacity:'1',left:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(1).animate({opacity:'1'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(1).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__app").eq(0).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(0).animate({opacity:'1',right:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(1).animate({opacity:'1'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(1).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".back--coordinator").removeClass("disabled");
      $(".back--coordinator").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--coordinator__number").eq(1).animate({opacity:'1',left:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(2).animate({opacity:'1'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(2).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--coordinator__app").eq(1).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app").eq(2).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--coordinator__description__contents").eq(1).animate({opacity:'1',right:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(2).animate({opacity:'1'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(2).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--coordinator").removeClass("underline");
      $(".next--coordinator").addClass("disabled");
    }
  });
});

// service-flow--coordinatorのnext--tablet
$(function(){
  $(".next--coordinator").click(function(){
    var result = $('.service-flow--coordinator__number--tablet').eq(0).css('left');
    var result1 = $('.service-flow--coordinator__number--tablet').eq(1).css('left');
    if(result === "0px"){
      $(".service-flow--coordinator__number--tablet").eq(0).animate({opacity:'1',left:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(1).animate({opacity:'1'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(1).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__app--tablet").eq(0).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app--tablet").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(0).animate({opacity:'1',right:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(1).animate({opacity:'1'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(1).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".back--coordinator").removeClass("disabled");
      $(".back--coordinator").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--coordinator__number--tablet").eq(1).animate({opacity:'1',left:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(2).animate({opacity:'1'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(2).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--coordinator__app--tablet").eq(1).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app--tablet").eq(2).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--coordinator__description__contents--tablet").eq(1).animate({opacity:'1',right:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(2).animate({opacity:'1'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(2).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--coordinator").removeClass("underline");
      $(".next--coordinator").addClass("disabled");
    }
  });
});

// service-flow--participantのnext--web
$(function(){
  $(".next--participant").click(function(){
    var result = $('.service-flow--participant__number').eq(0).css('right');
    var result1 = $('.service-flow--participant__number').eq(1).css('right');
    if(result === "0px"){
      $(".service-flow--participant__number").eq(0).animate({opacity:'0',right:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(1).animate({opacity:'0'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(1).animate({opacity:'1',right:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app").eq(0).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents").eq(0).animate({opacity:'0',right:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(1).animate({opacity:'0'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(1).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });

      $(".back--participant").removeClass("disabled");
      $(".back--participant").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--participant__number").eq(1).animate({opacity:'1',right:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(2).animate({opacity:'1'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(2).animate({opacity:'1',right:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app").eq(1).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app").eq(2).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents").eq(1).animate({opacity:'1',right:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(2).animate({opacity:'1'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(2).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--participant").removeClass("underline");
      $(".next--participant").addClass("disabled");
    }
  });
});

// service-flow--participantのnext--tablet
$(function(){
  $(".next--participant").click(function(){
    var result = $('.service-flow--participant__number--tablet').eq(0).css('left');
    var result1 = $('.service-flow--participant__number--tablet').eq(1).css("left");
    if(result === "0px"){
      $(".service-flow--participant__number--tablet").eq(0).animate({opacity:'0',left:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(1).animate({opacity:'0'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(1).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app--tablet").eq(0).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app--tablet").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents--tablet").eq(0).animate({opacity:'0',left:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(1).animate({opacity:'0'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(1).animate({opacity:'1',left:'0%',}, { duration: 500, easing: 'swing', });

      $(".back--participant").removeClass("disabled");
      $(".back--participant").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--participant__number--tablet").eq(1).animate({opacity:'1',left:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(2).animate({opacity:'1'},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(2).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app--tablet").eq(1).animate({left:'-100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app--tablet").eq(2).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents--tablet").eq(1).animate({opacity:'1',left:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(2).animate({opacity:'1'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(2).animate({opacity:'1',left:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--participant").removeClass("underline");
      $(".next--participant").addClass("disabled");
    }
  });
});




// BACK
// service-flow--coordinatorのback--web

$(function(){
  $(".back--coordinator").click(function(){
    var result1 = $('.service-flow--coordinator__number').eq(1).css('left');
    var result2 = $('.service-flow--coordinator__number').eq(2).css('left');

    if(result2 === "0px"){
      $(".service-flow--coordinator__number").eq(2).animate({opacity:"1",left:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(1).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(1).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--coordinator__app").eq(2).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--coordinator__description__contents").eq(2).animate({opacity:"1",right:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(1).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(1).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--coordinator").removeClass("disabled");
      $(".next--coordinator").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--coordinator__number").eq(1).animate({opacity:"1",left:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(0).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number").eq(0).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--coordinator__app").eq(1).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app").eq(0).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--coordinator__description__contents").eq(1).animate({opacity:"1",right:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(0).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents").eq(0).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".back--coordinator").removeClass("underline");
      $(".back--coordinator").addClass("disabled");
    }
  });
});

// service-flow--participantのback--web
$(function(){
  $(".back--participant").click(function(){
    var result1 = $('.service-flow--participant__number').eq(1).css('right');
    var result2 = $('.service-flow--participant__number').eq(2).css('right');

    if(result2 === "0px"){
      $(".service-flow--participant__number").eq(2).animate({opacity:"1",right:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(1).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(1).animate({opacity:'1',right:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app").eq(2).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents").eq(2).animate({opacity:"1",right:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(1).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(1).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--participant").removeClass("disabled");
      $(".next--participant").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--participant__number").eq(1).animate({opacity:"1",right:'-100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(0).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number").eq(0).animate({opacity:'1',right:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app").eq(1).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app").eq(0).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents").eq(1).animate({opacity:"1",right:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(0).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents").eq(0).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".back--participant").removeClass("underline");
      $(".back--participant").addClass("disabled");
    }
  });
});

// service-flow--coordinatorのback--tablet
$(function(){
  $(".back--coordinator").click(function(){
    var result1 = $('.service-flow--coordinator__number--tablet').eq(1).css('left');
    var result2 = $('.service-flow--coordinator__number--tablet').eq(2).css('left');

    if(result2 === "0px"){
      $(".service-flow--coordinator__number--tablet").eq(2).animate({opacity:"1",left:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(1).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(1).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--coordinator__app--tablet").eq(2).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app--tablet").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--coordinator__description__contents--tablet").eq(2).animate({opacity:"1",right:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(1).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(1).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--coordinator").removeClass("disabled");
      $(".next--coordinator").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--coordinator__number--tablet").eq(1).animate({opacity:"1",left:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(0).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--coordinator__number--tablet").eq(0).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--coordinator__app--tablet").eq(1).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__app--tablet").eq(0).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--coordinator__description__contents--tablet").eq(1).animate({opacity:"1",right:'-100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(0).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--coordinator__description__contents--tablet").eq(0).animate({opacity:'1',right:'0%',}, { duration: 500, easing: 'swing', });
      $(".back--coordinator").removeClass("underline");
      $(".back--coordinator").addClass("disabled");
    }
  });
});

// service-flow--participantのback--tablet
$(function(){
  $(".back--participant").click(function(){
    var result1 = $('.service-flow--participant__number--tablet').eq(1).css('left');
    var result2 = $('.service-flow--participant__number--tablet').eq(2).css('left');

    if(result2 === "0px"){
      $(".service-flow--participant__number--tablet").eq(2).animate({opacity:"1",left:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(1).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(1).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app--tablet").eq(2).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app--tablet").eq(1).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents--tablet").eq(2).animate({opacity:"1",left:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(1).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(1).animate({opacity:'1',left:'0%',}, { duration: 500, easing: 'swing', });
      $(".next--participant").removeClass("disabled");
      $(".next--participant").addClass("underline");
    } else if(result1 === "0px") {
      $(".service-flow--participant__number--tablet").eq(1).animate({opacity:"1",left:'100%',},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(0).animate({opacity:"1"},  { duration: 500, easing: 'swing', } );
      $(".service-flow--participant__number--tablet").eq(0).animate({opacity:'1',left:'0%',},  { duration: 500, easing: 'swing', } );

      $(".service-flow--participant__app--tablet").eq(1).animate({left:'100%'}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__app--tablet").eq(0).animate({left:'0%',}, { duration: 500, easing: 'swing', });

      $(".service-flow--participant__description__contents--tablet").eq(1).animate({opacity:"1",left:'100%',}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(0).animate({opacity:"1"}, { duration: 500, easing: 'swing', });
      $(".service-flow--participant__description__contents--tablet").eq(0).animate({opacity:'1',left:'0%',}, { duration: 500, easing: 'swing', });
      $(".back--participant").removeClass("underline");
      $(".back--participant").addClass("disabled");
    }
  });
});



// service-flowの矢印
$(function(){
  $(".arrow-left").click(function(){
    $(".service-flow--coordinator__box").animate({left:'0%',}, "slow");
    $(".service-flow--participant__box").animate({right:'0%',},"slow");
  });
});

$(function(){
  $(".arrow-right").click(function(){
    var result = $('.service-flow__slider__position--participant').eq(0).css('right');
    var result1 = $('.service-flow__slider__position--participant').eq(1).css('right');

    if(result !== "0px" && result1 !== "0px"){
      $(".service-flow__slider__position--participant").eq(0).css("right","-100%");
      $(".service-flow__slider__position--participant").eq(1).css("right","-100%");
    } else if(result !== "0px"){
      $(".service-flow__slider__position--participant").eq(0).css("right","-100%");
    }
    $(".service-flow--participant__box").animate({right:'-100%',},"slow");
    $(".service-flow--coordinator__box").animate({left:'0%',},"slow");
  });
});

// 幹事/参加者タブ
$(function(){
  $(".service-flow--coordinator__subject__tab--2").click(function(){
    $(".service-flow--participant__box--tablet").css("display","block");
    $(".service-flow--coordinator__box--tablet").css("display","none");
    $(".service-flow__layout--coordinator--tablet").css("background-color","#d56042");
    $(".service-flow--participant__number--tablet").css("color","#c34b2c")
  })
})

$(function(){
  $(".service-flow--coordinator__subject__tab--1").click(function(){
    $(".service-flow--participant__box--tablet").css("display","none");
    $(".service-flow--coordinator__box--tablet").css("display","block");
    $(".service-flow__layout--coordinator--tablet").css("background-color","#c34b2c");
    $(".service-flow--coordinator__number--tablet").css("color","#d56042")
  })
})

// スクロール

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    $(".header__menu--show").animate({left:'-100%',}, "slow");
    return false;
  });
});

// header for web

$(function() {
  var $win = $(window),
      showClass = 'is-show__web';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 600 ) {
      $(".header__web--toggle").removeClass("header");
      $(".header__web--toggle").addClass(showClass);
    } else {
      $(".header__web--toggle").addClass("header");
    }
  });
});

$(function() {
  var $win = $(window),
      $header = $('.header__web--toggle'),
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

// header for tab/phone

// $(function() {
//   var $win = $(window),
//       showClass = 'is-show--tablet';

//   var result = $('.is-show--tablet').css('display');
//   if(result !== "none"){
//     console.log(123)
//     $win.on('load scroll', function() {
//       var value = $(this).scrollTop();
//       if ( value > -10 ) {
//         console.log(456)
//         $(".header__tablet--toggle").removeClass("header__tablet");
//         $(".header__tablet--toggle").addClass(showClass);
//       } else {
//         console.log(789)
//         $(".header__tablet--toggle").addClass("header__tablet");
//       }
//     });
//   }
// });

// $(function() {
//   var $win = $(window),
//       $header = $('header__tablet'),
//       headerHeight = $header.outerHeight(),
//       startPos = 0;

//   $win.on('load scroll', function() {
//     var value = $(this).scrollTop();
//     if ( value > startPos && value > headerHeight ) {
//       $header.css('top', '-' + headerHeight + 'px');
//     } else {
//       $header.css('top', '0');
//     }
//     startPos = value;
//   });
// });

// メニューバー出し入れ
$(function(){
  $(".icon__container").click(function(){
    $(".header__menu--show").animate({left:"0%",},"slow");
  })
})

$(function(){
  $(".close-icon__container").click(function(){
    $(".header__menu--show").animate({left:'-100%',}, "slow");
  })
})