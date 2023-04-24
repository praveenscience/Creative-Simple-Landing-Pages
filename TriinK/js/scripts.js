//FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
  });
});
$(window).load(function() {
  $(function() {
    var pull = $('#pull');
    var menu = $('nav ul');

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });
  $(window).resize(function() {
    var menu = $('nav ul');
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});

// SMOOTH NAV SCROLL 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


// WAYPOINTS
$(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

});
