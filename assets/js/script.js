/*
 * Home pg awards slider
 */
$(document).ready(function () {
    $(".awards-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

/*
 * Home pg counter animation
 */
var counted = 0;
$(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },

                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    },
                }
            );
        });
        counted = 1;
    }
});

/*
 * News Room pg Press Release slider
 */
$(document).ready(function () {
    $(".news-room-press-release").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $("#testimonials").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    // life ate lowes pg slider
    var $status = $(".pagingInfo");
    var $slickElement = $(".volundeering-slider");

    $slickElement.on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + "/" + slick.slideCount);
    });

    $slickElement.slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      
    });

    // life ate lowes pg slider
    $(".testimonial-slider").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // catalyze pg five focus slider
    $("#five-focus-card-slider").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        row: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    })
    .on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });

    // life ate lowes pg EMPOWERING EXCELLENCE section slider
    $(".right-content-slider").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: true,
    });

    /* life at lowes page social media section load more btn start*/
       $(".social-media-card-load-more").slice(0, 3).show();
    if ($(".social-media-card:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".social-media-card:hidden").slice(0, 3).slideDown();
        if ($(".social-media-card:hidden").length == 0) {
            $("#loadMore").fadeOut("slow");
        }
    });
    /* life at lowes page social media section load more btn end*/
});

/* lowes at life section 2 video play pause start */
var ppbutton = document.getElementById("video-button");
ppbutton.addEventListener("click", playPause);

myVideo = document.getElementById("video");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.innerHTML = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_106_80)">
        <path d="M40.834 0.847656H0.833984V40.8477H40.834V0.847656Z" fill="#004990"/>
        <path d="M23 28V14H27V28H23ZM15 28V14H19V28H15Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_106_80">
        <rect width="41" height="41" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `;
    } else {
        myVideo.pause();
        ppbutton.innerHTML = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" transform="translate(0.833984 0.847656)" fill="#004990"/>
        <path d="M28.1543 20.8477L15.1641 28.3476L15.1641 13.3477L28.1543 20.8477Z" fill="white"/>
        </svg>`;
    }
}
/* lowes at life section 2 video play pause end */

/* life at lowes page social media section load more btn start*/
// $(document).ready(function () {
//     $(".social-media-card-load-more").slice(0, 3).show();
//     if ($(".social-media-card:hidden").length != 0) {
//         $("#loadMore").show();
//     }
//     $("#loadMore").on("click", function (e) {
//         e.preventDefault();
//         $(".social-media-card:hidden").slice(0, 3).slideDown();
//         if ($(".social-media-card:hidden").length == 0) {
//             $("#loadMore").fadeOut("slow");
//         }
//     });
// });
/* life at lowes page social media section load more btn end*/


