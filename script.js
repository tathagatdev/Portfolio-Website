$(document).ready(function(){     
    /* $(selector).action()
 $(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".


$(document).ready(function(){--->This is to prevent any jQuery code from running before the document is finished loading (is ready).
    */
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scroll >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removelass("show");
         }
    });
    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
       $('.navbar.menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
    });
    // typing animation script
    var typed=new Typed(".typing",{
        strings:["Pursuing BTech in Electronics and Communication Engineering "],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed=new Typed(".typing-2",{
        strings:["Pursuing BTech in Electronics and Communication Engineering at NIT Sikkim"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

// owl carousel script
$('.carousel').owlCarousel({
margin:20,
loop:true,
autoplayTimeOut:2000,
autoplayHoverPause:true,
responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        nav:false
    }



}

});
});