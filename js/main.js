new WOW().init();

// $('.navbar-toggle').click(function() {
//     $(span).toggleClass('btn-close');
// })
$('.ctn').click(function() {
    $(this).toggleClass("change");
})

// $('.dropdown').click(function() {
//     $('#caret-menu').toggleClass('btn-down');
// })
$('.dropdown').click(function() {
    $('#cr').toggleClass('fa fa-chevron-down').toggleClass('fa fa-chevron-up');
})

// scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#top').fadeIn(1000);
    } else {
        $('#top').fadeOut(1000);
    }
})
$('#top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
})

// fixed menu bar
$(window).scroll(function() {
    if ($(this).scrollTop() > 180) {
        $('.menu_Bar').addClass('navbar-fixed-top');
    } else {
        $('.menu_Bar').removeClass('navbar-fixed-top');
    }
})