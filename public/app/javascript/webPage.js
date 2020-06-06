$(document).ready(function(){
  setTimeout(function(){
    $(".coverTitle").addClass("coverTitleFull")
    setTimeout(function(){
      $(".coverTitle").removeClass("coverTitleFull")
      $("#webDesignPage .title h1").toggleClass("unfade");
    },600)
  },800)

  // setTimeout(function(){
  //   $(".webDesignPage .title span").removeClass("unfade");
  // }, 5000)

  setTimeout(function(){
    $(".container").toggleClass("unfade");
    $("#cross").removeClass("fade");
    $(".inUnderContainer").addClass("unfade")
    $("#webDesignPage").addClass("whiteBackground")
  }, 3500)

  setTimeout(function(){
    $(".introduction").addClass("unfade")
  }, 4200)

  setTimeout(function(){
    $(".picWebSite").removeClass("windowUp");
    $(".picWebSite img").removeClass("invisible");

  }, 3800)

  $("#webDesignPage .title").toggleClass("widthAuto");
})

$('#cross').click(function(){
  window.location="index.html#services";
});

var clicked = false

$(".picWebSite").on("click", function(){
  console.log(clicked)
  if (clicked == false){
    var text = $(this).data('text');
    clicked = true;
    typeWriter(text, 0);
  }
})

function typeWriter(text, n) {
  if (n < (text.length)) {
    $("#webText").html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n);
    }, 100);
  }
  else{
    clicked = false
  }
}


$(window).on("scroll", function(){
  var scrollTop = $(window).scrollTop();
  console.log(scrollTop)
  if($(window).width() < 450){
    if(scrollTop > 600){
      $("#cross span").css({background: "rgb(29, 32, 47)"})
    }
    else{
      $("#cross span").css({background: "white"})
    }
  }

})



//
// $(window).on("load", function(){
//   console.log("window on load .....")
//   setTimeout(function(){
//     console.log("b4 coverTitle")
//     $(".coverTitle").addClass("coverTitleFull")
//     setTimeout(function(){
//       console.log("b4 coverTitleFull")
//       $(".coverTitle").removeClass("coverTitleFull")
//       $(".webDesignPage .title span").toggleClass("unfade");
//     },800)
//   },800)
  //
  // setTimeout(function(){
  //   $(".webDesignPage .title span").removeClass("unfade");
  // }, 3000)

  // setTimeout(function(){
  //   $(".inContainer").toggleClass("unfade");
  // }, 3500)

//
//   $(".webDesignPage .title").toggleClass("widthAuto");
// })
