$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            }, 800
        )
    }
})
$('#navbar #hambac').click(function (){
    $('#navbar ul').slideToggle("slow");
})


// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('#navbar li, .mobile-nav');

$(window).on('scroll', function() {

    var cur_pos = $(this).scrollTop() + 200;


    if (cur_pos > 550) {
        document.querySelector('#navbar').style.opacity = 0.9;
        document.querySelector('#showcase .source').style.display = "none";
    }
    else {
        document.querySelector('#navbar').style.opacity = 1;
        document.querySelector('#showcase .source').style.display = "block";
    }

    nav_sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }

        if (cur_pos < 300) {
            $("#navbar ul li a").removeClass('active');
        }
    });


});