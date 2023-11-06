$('.filter-img').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.filter ul li').click(function(){
    $('.filter ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.filter-img').isotope({
        filter:selector
    });
    return false;
  });

// aos library
AOS.init();