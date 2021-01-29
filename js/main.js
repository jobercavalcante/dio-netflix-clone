$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});
