//1.je veux cliquer sur un des liens du menu en haut
//2.je veux retrouver l'identifiant de la section qui correspond au lien que j'ai cliqué
//3.je veux récupérer la position de la section sélectionnée
//4.je veux scroller sur cette position


$(".nav a, nav a").on("click", function(e){        //1
    e.preventDefault();
    var id = $(this).attr("href");                  //2

    // $(".nav a, nav a").removeClass("selected");
    // $(this).addClass("selected");

    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    $("html, body").animate({                       //4
        scrollTop : position - (coverHeight/2+100)
    }, {
        duration : 2000,
        queue : false
    })
});

//selection du menu pendant le scroll
/*$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    var limit = scrollTop + $(window).height();

    var $selectedArticle;
    $("article").each(function(){
    	var positionArticleParcouru = $(this).offset().top;
        if (positionArticleParcouru > limit) {
            return false;
        }
        $selectedArticle = $(this);
        console.log($selectedArticle);
    });

    var id = $selectedArticle.attr("id");
    $("a").removeClass("selected");
    $("a[href=#" + id + "]").addClass("selected");
})*/


//navigation du menu
$("#triggerMenu").on("click", function(){
    $("nav").toggleClass("open");
})

$("#start").on("click", function(){
    $("#welcomePage").removeClass("absolute");
    $("#welcomePage").addClass("relative");
    $("header").addClass("topZero");
    $("header").addClass("fixed")
    $("#welcomeRight").addClass("farRight");
    $("#welcomeLeft").addClass("farLeft");
    $("#start").addClass("hide");
    $("#home").addClass("home");
    //$("#firstSection").addClass("fullWidth");
    $("#welcomeCenter").removeClass("topMargin")    
})

$("a").on("click", function(){
    $("#welcomeLeft").addClass("hide");
    $("#welcomeRight").addClass("hide");
    $("body").removeClass("overFlowHidden")
})

$("#contact").on("click", function(){
    $("#contactForm").addClass("show")
    console.log("click")
})

$("#cross").on("click", function(){
    $("#contactForm").removeClass("show")
})

$('#menu').slicknav({
        prependTo:'#demo1'
});