$(document).ready(function() {
    $('#demo2').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      autoplaySpeed: 2000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 2,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    })
  })