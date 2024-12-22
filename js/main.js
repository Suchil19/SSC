// Preloader
$(window).on('load', function() {
	$('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  });

    /* Video Popup*/

    $(document).ready(function(){
      const videoSrc = $("#player-1").attr("src");
      $(".video-play-btn, .video-popup").on("click" , function(){
        if($(".video-popup").hasClass("open")){
          $(".video-popup").removeClass("open");
          $("#player-1").attr("src" , "");
        }
        else{
          $(".video-popup").addClass("open");
          if($("#player-1").attr("src")==''){
            $("#player-1").attr("src" , videoSrc);
          }
        }
      });
      });

  // Counter

  const animationDuration = 6000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	
	const counter = setInterval( () => {
		frame++;

		const progress = easeOutQuad( frame / totalFrames );

		const currentCount = Math.round( countTo * progress );


		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

	const countupEls = document.querySelectorAll( '.timer' );
	countupEls.forEach( animateCountUp );