//1.je veux cliquer sur un des liens du menu en haut
//2.je veux retrouver l'identifiant de la section qui correspond au lien que j'ai cliqué
//3.je veux récupérer la position de la section sélectionnée
//4.je veux scroller sur cette position

$(".nav a, nav a").on("click", function(e){        //1
    e.preventDefault();
    var id = $(this).attr("href");
    console.log(id)               //2

    $(".nav a, nav a").removeClass("selected");
    $(this).addClass("selected");
    $("#contact").removeClass("selected");

    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    $("html, body").animate({                       //4
        scrollTop : position - (coverHeight/2+100)
    }, {
        duration : 2000,
        queue : false
    })
});

$(".arrowDown").on("click", function(){        //1
    var id = "#about";                  //2
    $("#aboutMenu").addClass("selected");


    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    $("html, body").animate({                       //4
        scrollTop : position - (coverHeight/2+50)
    }, {
        duration : 2000,
        queue : false
    })
});

////selection du menu pendant le scroll
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    var limit = scrollTop + $(window).height();
    // 
    // console.log("$(window).scrollTop()",$(window).scrollTop())
    // console.log("$(window).height()",$(window).height())

    if ($(window).scrollTop() > 150) {
        $(".welcomeRight").addClass("big")
        $(".welcomeLeft").addClass("small")
        $("nav li").addClass("center")
        $("body").removeClass("overFlowHidden")
        $("#contactForm").removeClass("show")
        $("nav ul").addClass("menuUp")
        $(".arrowDown").addClass("hide")
        $("#arrowUp").removeClass("hide")
    }
    else{
        $(".welcomeRight").removeClass("big")
        $(".welcomeLeft").removeClass("small")
        $("nav li").removeClass("center")
        $("nav ul").removeClass("menuUp")
        $(".arrowDown").removeClass("hide")
        $("#arrowUp").addClass("hide")
        //$(".nav a, nav a").removeClass("selected");
    }
    // var $selectedArticle;
    //
    // if (scrollTop < 100) {
    //     $selectedArticle = "#about"
    // }
    //
    // $("article").each(function(){
    // 	var positionArticleParcouru = $(this).offset().top;
    //     if (positionArticleParcouru > limit) {
    //         return false;
    //     }
    //     $selectedArticle = $(this);
    //     console.log($selectedArticle);
    // });
    // // if(limit <= $(window).height() - 100)
    // var id = $selectedArticle.attr("id");
    // $("a").removeClass("selected");
    // $("#" + id).addClass("selected");
})

$("#arrowUp").on("click" , function(){
    $(".nav a, nav a").removeClass("selected");
    $("html, body").animate({                       //4
        scrollTop : 0
    }, {
        duration : 2000,
        queue : false
    })
})

$("#contact").on("click", function(){
    $("#contactForm").addClass("show")
    $(".nav a, nav a").removeClass("selected");
    $("#contact").addClass("selected");
    console.log("click")
})

$("#cross").on("click", function(){
    $("#contactForm").removeClass("show")
    $("#contact").removeClass("selected");
})



//
// $("nav li a").on("click", function(){
//     $("#welcomeLeft").addClass("hide");
//     $("#welcomeRight").addClass("hide");
//
// })
//navigation du menu
// $("#triggerMenu").on("click", function(){
//     $("nav").toggleClass("open");
// })

// $("#start").on("click", function(){
//     $("#welcomePage").removeClass("absolute");
//     $("#welcomePage").addClass("relative");
//     $("header").addClass("topZero");
//     $("header").addClass("fixed")
//     $("#welcomeRight").addClass("farRight");
//     $("#welcomeLeft").addClass("farLeft");
//     $("#start").addClass("hide");
//     $("#home").addClass("home");
//     //$("#firstSection").addClass("fullWidth");
//     $("#welcomeCenter").removeClass("topMargin")
//     $("body").removeClass("overFlowHidden")
//     setTimeout(function(){
//      $("#welcomeRight").addClass("hide");
//      $("#welcomeLeft").addClass("hide");
//     }, 1000);
// })

// $("a").on("click", function(){
//     $("#welcomeLeft").addClass("hide");
//     $("#welcomeRight").addClass("hide");
//
// })



// $('#menu').slicknav({
//         prependTo:'#demo1'
// });
