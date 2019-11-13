(function ($) {
    "use strict"

    $(document).ready(function () {

        /* Menu Active */
        $('.menu_area ul li').on('click', function () {
            var tab_id = $(this).attr('data-tab');
            $('.menu_area ul li').removeClass('active');
            $('.menu_area ul li').removeClass('active');
            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

        /* Write Us Form */
        $('.write_us_btn').on('click', function () {
            $('.write_us_form').addClass('active_form');
            $('.footer_inner .row').fadeOut();
        });
        $('.form_close').on('click', function () {
            $('.write_us_form').removeClass('active_form');
            $('.footer_inner .row').fadeIn();
        });



        /* Responsive mobile menu */
        if ($.fn.slicknav) {
            $("#main-menu").slicknav({
                'label': ' ',
                'prependTo': '.responsive-menu-wrap',
                'allowParentLinks': true
            });

            $("#primary-menu").slicknav({
                'label': ' ',
                'prependTo': '.responsive-menu-wrap',
                'allowParentLinks': true
            });
        }


        /* One Page Nav*/
        if ($.fn.onePageNav) {
            $('#main-menu').onePageNav({
                scrollThreshold: 0.2,
            });
        }


        /* Skillbar Counter */
        if ($('.skillbar').length) {
            $(window).on('scroll.skillbar', function () {
                var stat = $('.skillbar');
                if ($(this).scrollTop() >= stat.offset().top - $(window).height() + 0) {
                    $('.skillbar').skillBars({
                        from: 0,
                        speed: 3000,
                        interval: 100,
                        decimals: 0,
                    });
                    $(window).off('scroll.skillbar');
                }
            });
        }


        /* Testimonial Slick Carousel */
        if ($.fn.slick) {
            $('.testimonial_list').slick({
                autoplay: false,
                arrows: true,
                speed: 2000,
                prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                }
                ]
            });
        };



        /* Client Slick Carousel */
        if ($.fn.slick) {
            $('.client_list').slick({
                autoplay: false,
                arrows: false,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: true
                        }
                },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                }
                ]
            });
        };


        /* AOS Animation */
        if ($.fn.init) {
            AOS.init({
                duration: 1200
            });
        }


        /* fixed menu */
        if ($(this).scrollTop() > 88) {
            $('.header_top_area').addClass("fixed-menu")
        } else(
            $('.header_top_area').removeClass("fixed-menu")
        );

    });



    $(window).on("load", function () {

        /* Portfolio Isotope */
        $('.portfolio_list').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.portfolio_item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.portfolio_item'
            }
        });


        /* Blog Isotope */
        $('.blog_list').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.blog_item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.blog_item'
            }
        });




    });



    $(window).on("scroll", function () {

        /* fixed menu */
        if ($(this).scrollTop() > 88) {
            $('.header_top_area').addClass("fixed-menu")
        } else(
            $('.header_top_area').removeClass("fixed-menu")
        );


    });


}(jQuery));
