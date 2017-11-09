//////////////////////////
/////WELCOME page
/////////////////////////////////

$(window).on("load", function(){
  $(".welcome").addClass("noBlur");

   setTimeout(function(){
        $(".welcome").addClass("color");
        $(".rectangleRuttar, .rectangleWD ").removeClass("zeropx");
        setTimeout(function(){
          $(".rectangleRuttar, .rectangleWD").addClass("zeropx");
        }, 1300)
    }, 1500);

  setTimeout(function(){
      $(".downArrow").removeClass("fade");
      $(".downArrow").addClass("unfade");
  }, 3500);

  setTimeout(function(){
    $(".rectangleMenu").removeClass("farRight");
 }, 3200);

  setTimeout(function(){
    $(".logo, .webDesigner, .arrowDown").removeClass("hide");
  }, 3100)

  setTimeout(function(){
    $("#menuLines").removeClass("hide");
  }, 4500)

})

$(document).ready(function(){
	$('#menuLines').click(function(){
    toggleClass();
	});
});

function toggleClass(){
  $(".menu").toggleClass("show");
  $(".headerItem li").toggleClass("widthAuto");
  $("#menuLines").toggleClass('open');
}

// $(document).ready(function(){
	$('#webDesign').click(function(e){
    e.preventDefault();
    toggleWebDesign();
	});
// });

function toggleWebDesign(){
  $(".greenDiv").toggleClass("show");
  setTimeout(function(){
    window.location="webDesignPage.html";
  },500)
}

$(document).ready(function(){
	$('#webApp').click(function(e){
    e.preventDefault();
    console.log("webapp clicked");
    toggleWebApp();
	});
});

function toggleWebApp(){
  $(".greenDiv").toggleClass("show");
  console.log("after greendiv show")
  setTimeout(function(){
    window.location="webAppPage.html";
  },500)
}

$(".nav a, nav a").on("click", function(e){        //1
    toggleClass();
    e.preventDefault();
    var id = $(this).attr("href");
                 //2

    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    if(id == "#contactForm"){
      $("html, body").animate({                       //4
            scrollTop : position - (coverHeight/2-500)
      }, {
          duration : 2000,
          queue : false
      })
    }
    else{
      $("html, body").animate({                       //4
            scrollTop : position - (coverHeight/2 + 100)
      }, {
          duration : 2000,
          queue : false
      })
    }

});

$("header div a").on("click", function(e){        //1
    e.preventDefault();
    $("html, body").animate({                       //4
            scrollTop : 0
      }, {
          duration : 2000,
          queue : false
      })
});

$(".downArrow").on("click", function(){        //1
    var id = "#about";                  //2
    $("#aboutMenu").addClass("selected");
    $("body").removeClass("overFlowHidden")

    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    $("html, body").animate({                       //4
        scrollTop : position - (coverHeight/2+50)
    }, {
        duration : 2000,
        queue : false
    })
});

$( ".underAbout" ).on("click", function() {
    $(this).find(".comment").toggleClass( "show" );
    $(this).find(".commentSpan").toggleClass( "showPadding" );
  }
);
//
// $("#webApp").hover(function(){
//     var randomRight = Math.floor(Math.random() * 500)+50;
//     var randomTop = -Math.floor(Math.random() * 500)+50;
//     $(this).css("right", randomRight),
//     $(this).css("top", randomTop);
//   });
//
//   $("#webDesign").hover(function(){
//       var randomRight = Math.floor(Math.random() * 500)+50;
//       var randomTop = -Math.floor(Math.random() * 500)+50;
//       $(this).css("left", randomRight),
//       $(this).css("top", randomTop);
//     });
document.addEventListener('mousemove', evenement => {
    var scrollTop = $(window).scrollTop();
    var halfWindow = $(window).width()/2;
    // if(halfWindow > 475){
    //   var diff = $(window).width() - 1024;
      x = evenement.clientX;
      y = evenement.clientY + scrollTop;
      if( y > 3120 && y < 3800){
        if($(window).width() >= 950){
          var diff = $(window).width() - 1024;
          if(x < halfWindow){
            $("#webDesign").css("left", x - 100 - diff/2 );
            $("#webDesign").css("top", y - 3800);
          }
          else{
            $("#webApp").css("right", $(window).width() - x - 100 - diff/2);
            $("#webApp").css("top", y - 3800);
          }
        }
      }
      if( y > 3300 && y < 4000){
        if($(window).width() < 950 && $(window).width() > 500){
          if(x < halfWindow){
            $("#webDesign").css("left", x - 300);
            $("#webDesign").css("top", y - 3700);
          }
          else{
            $("#webApp").css("right", $(window).width() - x - 300);
            $("#webApp").css("top", y - 3700);
          }
        }
      }

    // }
    // else if{
    //   console.log("halfWindow > 475")
    // }

})

//
// if($(window).scrollTop() > 1640){
//   var i = 0;
//   var txt = "Il suffit d'une première graine"; /* The text */
//   var speed = 50; /* The speed/duration of the effect in milliseconds */
//   if (i < txt.length) {
//     document.getElementById("graine").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }


var showingSeed = false
var showingTeam = false
////selection du menu pendant le scroll
$(window).on("scroll", function(){

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    var limit = scrollTop + $(window).height();

    if(scrollTop > 1640 && $(window).scrollTop() < 1660){
      if(showingSeed == false){
        var text = $('#seed').data('text');
        showingSeed = true;
        typeWriterSeed(text, 0);
      }
    }

    function typeWriterSeed(text, n) {
      if (n < (text.length)) {
        $('#seed').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
          typeWriterSeed(text, n)
        }, 150);
      }
      else{
        showingSeed = false;
      }
    }

    if(scrollTop > 2920 && $(window).scrollTop() < 3000){
      if(showingTeam == false){
        var text = $('#team').data('text');
        showingTeam = true;
        typeWriterTeam(text, 0);
        }
      }

    function typeWriterTeam(text, n) {
      if (n < (text.length)) {
        $('#team').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
          typeWriterTeam(text, n)
        }, 150);
      }
      else{
        showingTeam = false;
      }
    }

    //
    // console.log("$(window).scrollTop()",$(window).scrollTop())
    // console.log("$(window).height()",$(window).height())

    if ($(window).scrollTop() > $(window).height()) {
      // console.log($(window).scrollTop())
        $("header").addClass("headerGreen")
        $(".headerLogo span").addClass("showLogo")
        $(".welcomeLeft").addClass("small")
        $("body").removeClass("overFlowHidden")
    }
    else{
        $("header").removeClass("headerGreen")
        $(".headerLogo span").removeClass("showLogo")
    }

        if(scrollTop > 2780 && scrollTop <5000){

          $(".fullscreen-bg").removeClass("hide")
        }
        else{
          $(".fullscreen-bg").addClass("hide")
        }
})

document.getElementById("sendButton").addEventListener("click", function(){
    $("#contact").addClass("thanks")
    document.getElementById("contact").innerHTML = "Merci pour votre message, nous vous contacterons dans les plus brefs délais. ";
});

new WOW().init();






















    // var pos = $(".printerTwo").width();
    // var windowWidth = $(window ).width();
    // if(pos == windowWidth){
    //   setTimeout(function(){
    //     $(".printerTwo").css({width: 0})
    //     $(".printerTwo").css({opacity: 0})
    //     $(".printerOne").css({width: windowWidth})
    //     $(".printerOne").css({opacity: 1})
        // $(".printerOne").addClass("hide")
        // $(".printerOne").css({width: windowWidth})

        // setTimeout(function(){
        //   $(".printerOne").css({width: windowWidth})
        //   $(".printerOne").removeClass("hide")
        //
        // }, 200)
    //   }, 200)
    //
    // }
    // else{
    //   setTimeout(function(){
    //       $(".printerTwo").css({opacity: 1})
    //     $(".printerTwo").css({width: windowWidth})
    //     $(".printerOne").css({width: 0})
    //     $(".printerOne").css({opacity: 0})
        // $(".printerTwo").addClass("hide")
        //
        // // $(".printerOne").css({width: windowWidth})
        //
        // setTimeout(function(){
        //   $(".printerTwo").css({width: windowWidth})
        //   $(".printerTwo").removeClass("hide")
        //
        // },200)
//       }, 200)
//
//
//
//
//
//
//     var windowWidht = $(window ).width()/3;
//

//
//     var randomValueGreen = Math.floor(Math.random() * windowWidht);
//
//     var randomValueblack = Math.floor(Math.random() * windowWidht);
//     var randomValueblack2 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));
//     var randomValueblack3 = Math.floor(windowWidht + (Math.random() * windowWidht));
//
//     var randomValueBrown = Math.floor(Math.random() * windowWidht);
//     var randomValueBrown2 = Math.floor(Math.random() * windowWidht);
//     var randomValueBrown3 = Math.floor(windowWidht + (Math.random() * windowWidht));
//     var randomValueBrown4 = Math.floor(windowWidht + (Math.random() * windowWidht));
//     var randomValueBrown5 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));
//     var randomValueBrown6 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));
//
//     var randomValueRed = Math.floor(Math.random() * windowWidht);
//     var randomValueRed2 = Math.floor(windowWidht + (Math.random() * windowWidht));
//     var randomValueRed3 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));
//
//     $(".red").css({left: randomValueRed});
//     $(".red2").css({left: randomValueRed2});
//     $(".red3").css({left: randomValueRed3});
//
//     $(".green").css({left: randomValueGreen});
//
//     $(".black").css({left: randomValueblack});
//     $(".black2").css({left: randomValueblack2});
//     $(".black3").css({left: randomValueblack3});
//
//     $(".brun").css({left: randomValueBrown});
//     $(".brun2").css({left: randomValueBrown2});
//     $(".brun3").css({left: randomValueBrown3});
//     $(".brun4").css({left: randomValueBrown4});
//     $(".brun5").css({left: randomValueBrown5});
//     $(".brun6").css({left: randomValueBrown6});
// })
