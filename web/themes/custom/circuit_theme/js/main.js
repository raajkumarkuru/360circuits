(function ($) {

  Drupal.behaviors.circuit = {
    attach: function (context, settings) {

      $(window).resize(function () {
        let padding = $('body').css('padding-top');
        $('header, .menu-drawer').css('top', padding);
      });

      $('.close-menu').click(function () {
        $('.menu-drawer').css('transform', 'translateX(0%)');
      });

      $('.toggle-menu').click(function () {
        $('.menu-drawer').css('transform', 'translateX(-100%)');
      });


      $(document).ready(function () {
        $(window).trigger('resize');

        // $('.video-gallery-container video').on('click', function () {
        //   let src = $(this).find('source').attr('src');
        //   $('.overlay').toggleClass('overlay-toggle');
        //   $("#overlayVideo").html('<source src="' + src + '" type=""></source>');
        //   $("#overlayVideo").play();
        // });

        // $('.close-video').on('click', function () {
        //   $('.overlay').toggleClass('overlay-toggle');
        //   $('#overlayVideo').attr('src', '');
        // });

        $('.client-brands-items').owlCarousel({
          loop: true,
          margin: 40,
          responsiveClass: true,
          dots: false,
          navText: ['', ''],
          nav: true,
          autoplay: true,
          autoplaySpeed: 2000,
          fluidSpeed: 30000,
          dragEndSpeed: 0,
          autoplayHoverPause: true,
          autoplayTimeout: 2000,
          responsive: {
            0: {
              items: 6,
            },
            400: {
              items: 8,
            },
            600: {
              items: 10,
            },
            1000: {
              items: 12,
            },
            1920: {
              items: 14
            }
          }
        });

        $('.quotes').owlCarousel({
          items: 1,
          nav: false,
          dots: true,
          loop: true,
          mouseDrag: true,
        });

        var figure = $(".video").hover(hoverVideo, hideVideo);
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

function lightboxOpen(id) {
  var video = document.getElementById(id).children[0].src;
  var el = document.querySelector('.overlay');
  el.classList.toggle('overlay-toggle');
  var play = document.getElementById("overlayVideo");
  play.children[0].src = video;
  play.load();
  play.play();
}

function lightboxClose() {
  var el = document.querySelector('.overlay');
  el.classList.toggle('overlay-toggle');
  var play = document.getElementById("overlayVideo");
  play.pause();
}