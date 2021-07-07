(function ($) {

  Drupal.behaviors.circuit = {
    attach: function (context, settings) {
      
      $(window).resize(function() {
        let padding = $('body').css('padding-top');
        $('header, .menu-drawer').css('top', padding);
      });
      
      $('.close-menu').click(function() {
        $('.menu-drawer').css('transform', 'translateX(0%)');
      });
      
      $('.toggle-menu').click(function() {
        $('.menu-drawer').css('transform', 'translateX(-100%)');
      });


      $(document).ready(function(){
        $(window).trigger('resize');
        
        $('.video-gallery-container video').on('click', function() {
          let src = $(this).find('source').attr('src');
          $('.overlay').toggleClass('overlay-toggle');
          $("#overlayVideo").html('<source src="'+src+'" type=""></source>' );
          $("#overlayVideo").play();
        });
        
        $('.close-video').on('click', function(){
          $('.overlay').toggleClass('overlay-toggle');
          $('#overlayVideo').attr('src', '');
        });
        
        $('.client-brands-items').once().marquee({
          duration: 20000,
          delayBeforeStart: 0,
          duplicated: false,
          pauseOnHover:true,
          startVisible:true
        });

        $('.quotes').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 6000,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          prevArrow: false,
          nextArrow: false
        });
        
        var figure = $(".video").hover( hoverVideo, hideVideo );
        function hoverVideo(e) {  
          $('video', this).get(0).play(); 
        }

        function hideVideo(e) {
          $('video', this).get(0).pause(); 
        }
      });
    
    }
  };

}(jQuery));