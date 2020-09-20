 
  var container = document.querySelector('.our_gallery');
    var mixer = mixitup(container,{
      selectors: {
        control:'[my-mix]'
      }
    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
           
            autoplay:true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,

            loop:true,

            responsive:{
                0:{
                    items:1,
                    
                },
                600:{
                    items:3,
                    
                },
                1000:{
                    items:5,
                    
                    
                }
            }
        });
      });

      $('.top_btn').click(function(){
        $("html,body").animate({
          scrollTop:0
        },2000);
   });

   $('.top_btn').hide();


     $(window).scroll(function(){
       var ourWindow = $(this).scrollTop();

       if(ourWindow<1000){
        $('.top_btn').fadeOut(2000);
       }
       else{
        $('.top_btn').fadeIn(2000);
       }

    //menu fixed

     if(ourWindow>100){
       $('body').addClass('fixed');
     } else{
      $('body').removeClass('fixed');
     }


     });
     

     $(".navbar-nav li").click(function(){
       $(this).addClass('active').siblings().removeClass('active');
     });


     $(".navbar-nav a[href^='#']").click(function(e){
       e.preventDefault();

       var target = this.hash;

       $('html,body').animate({
         scrollTop: $(target).offset().top-75
       },1000);
     });

