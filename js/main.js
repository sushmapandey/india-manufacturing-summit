

jQuery(document).ready(function() {


	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
    });
    

    
    /*----------  close menu bar  ----------*/    
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    

});

/*=============================================
=            count            =
=============================================*/

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

/*=====  End of count  ======*/


/*=============================================
=            owl carousel            =
=============================================*/

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  autoplay: false,
  dots: false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      }
  }
})

/*=====  End of owl carousel  ======*/

