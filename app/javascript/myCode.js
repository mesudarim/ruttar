//////////////////////////
/////WELCOME page
/////////////////////////////////

$(window).on("load", function(){
  if($(window).width() > 450){
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

 //  setTimeout(function(){
 //    $(".rectangleMenu").removeClass("farRight");
 // }, 3200);

  setTimeout(function(){
    $(".logo, .webDesigner, .arrowDown, #menuLines").removeClass("hide");
  }, 3100)

  }
  else{
      $(".logo, .webDesigner, #menuLines").removeClass("hide");
      $(".downArrow").addClass("unfade");
  }

  // setTimeout(function(){
  //   $("#menuLines").removeClass("hide");
  // }, 4500)

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
    $("body").removeClass("overFlowHidden")
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

    if(scrollTop > 1640 && $(window).scrollTop() < 1800){
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

    if(scrollTop > 2920 && $(window).scrollTop() < 3300){
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
  setTimeout(function () {
    $("#contact").addClass("thanks")
    document.getElementById("contact").innerHTML = "Merci pour votre message, nous vous contacterons dans les plus brefs délais. ";
  }, 1500);

});

new WOW().init();
