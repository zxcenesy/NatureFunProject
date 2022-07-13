$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.gallery__items').slick({
      mobileFirst: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 992,
            settings: "unslick"
         }, {
            breakpoint: 750,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         }
      ]
   });

   $('.works__body').slick({
      mobileFirst: true,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 992,
            settings: "unslick"
         }, {
            breakpoint: 497,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         }
      ]
   });

   $('.portfolio__gallery').on('click', '.portfolio__gallery-item-pic-min', function (event) {
      let src = $(this).attr('src');
      $(this).closest('.portfolio__gallery').find('.big-portfolio__gallery-item img').attr('src', src);
   });

   document.querySelectorAll('a.header__link').forEach(link => {
      link.addEventListener('click', function (e) {
         e.preventDefault()
         const href = this.getAttribute('href').substring(1)

         const scrollTarget = document.getElementById(href)

         const topOffset = 0
         const elementPosition = scrollTarget.
            getBoundingClientRect().top
         const offsetPosition = elementPosition - topOffset

         window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
         })

      });
   });

});
