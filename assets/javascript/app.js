$(document).ready(function () {

    // JQuery side-nav function call 
    $(document).ready(function () {
        $('.sidenav').sidenav();
    });

   // Owl carousel function
   var owl = $('.owl-carousel');
   owl.owlCarousel({
       items:4,
       loop:true,
       margin:10,
       autoplay:true,
       autoplayTimeout:1000,
       autoplayHoverPause:true,
       responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        480 : {
            itmes:2
        },
        // breakpoint from 768 up
        768 : {
            items:2
         },
         // breakpoint from 1000 up
        1000 : {
            items:4
         }
    }
   
    });
   $('.play').on('click',function(){
       owl.trigger('play.owl.autoplay',[1000])
   })
   $('.stop').on('click',function(){
       owl.trigger('stop.owl.autoplay')
   })
  
});