function page_load() {
    $("#WModalMsg").show(), $("#marquee").marquee().mouseover((function() {
        $(this).trigger("stop")
    })).mouseout((function() {
        $(this).trigger("start")
    }));
    var owl = $("#clients-slider");
    owl.owlCarousel({
        items: 3,
        itemsDesktop: [1e3, 5],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: !1,
        autoPlay: !0
    }), owl.magnificPopup({
        delegate: "img",
        type: "image",
        gallery: {
            enabled: !0
        }
    });
    var owl1 = $("#clients-slider-tpc");
    owl1.owlCarousel({
        items: 3,
        itemsDesktop: [1e3, 5],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: !1,
        autoPlay: !0
    }), owl1.magnificPopup({
        delegate: "img",
        type: "image",
        gallery: {
            enabled: !0
        }
    });
    var owl2 = $("#clients-slider-cd");
    if (owl2.owlCarousel({
            items: 3,
            itemsDesktop: [1e3, 5],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 2],
            itemsMobile: !1,
            autoPlay: !0
        }), owl2.magnificPopup({
            delegate: "img",
            type: "image",
            gallery: {
                enabled: !0
            }
        }), $("#carousel123").carousel({
            interval: 2e3
        }), $("#carouselABC").carousel({
            interval: 3600
        }), $(".carousel-showmanymoveone .item").each((function() {
            for (var itemToClone = $(this), i = 1; i < 6; i++)(itemToClone = itemToClone.next()).length || (itemToClone = $(this).siblings(":first")), itemToClone.children(":first-child").clone().addClass("cloneditem-" + i).appendTo($(this))
        })), $(".footerLogoSlider").length) var footerLogoSlider = new Swiper(".footerLogoSlider .swiper-container", {
        speed: 1100,
        spaceBetween: 0,
        slidesPerView: 4,
        lazy: !0,
        loop: !0,
        simulateTouch: !1,
        autoplay: !0,
        navigation: {
            nextEl: ".footerLogoSlider-next",
            prevEl: ".footerLogoSlider-prev"
        },
        breakpoints: {
            639: {
                slidesPerView: 1,
                simulateTouch: !0,
                centerSlide: !0
            },
            992: {
                slidesPerView: 2,
                simulateTouch: !0,
                centerSlide: !0
            },
            1024: {
                slidesPerView: 3,
                simulateTouch: !0,
                centerSlide: !0
            },
            1169: {
                slidesPerView: 4,
                simulateTouch: !0,
                centerSlide: !0
            }
        }
    })
}

function page_click() {
    $(document).on("click", "#btnclose", (function(e) {
        e.preventDefault(), $("#WModalMsg").hide()
    })), $(document).on("click", ".Calendar", (function(e) {
        e.preventDefault();
        var btn = $(this),
            oldText = btn.html();
        btn.text("Processing....."), btn.attr("disabled", !0), btn.addClass("disabled"), $.ajax({
            url: $("#hdfBaseUrl").val() + "Home/_Calendar",
            type: "GET",
            cache: !1,
            dataType: "html"
        }).done((function(result) {
            $.confirm({
                icon: "fa fa-spinner fa-spin",
                title: "<u>Examinations Calendar</u>",
                backgroundDismiss: !0,
                columnClass: "col-lg-12 col-md-06 col-sm-06 col-xs-03",
                useBootstrap: !0,
                animationBounce: 1.5,
                content: result,
                buttons: {
                    close: function() {}
                }
            }), btn.html(oldText), btn.removeAttr("disabled"), btn.removeClass("disabled")
        }))
    }))
}

function addZero(i) {
    return i < 10 && (i = "0" + i), i
}
$(document).ready((function() {
    page_load(), page_click()
})), setInterval((function() {
    var now = new Date,
        month = new Array;
    month[0] = "January", month[1] = "February", month[2] = "March", month[3] = "April", month[4] = "May", month[5] = "June", month[6] = "July", month[7] = "August", month[8] = "September", month[9] = "October", month[10] = "November", month[11] = "December";
    var h, m, s, time = addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds()),
        weekday = new Array(7);
    weekday[0] = "Sunday", weekday[1] = "Monday", weekday[2] = "Tuesday", weekday[3] = "Wednesday", weekday[4] = "Thursday", weekday[5] = "Friday", weekday[6] = "Saturday";
    var day = weekday[now.getDay()];
    document.getElementById("PPCount").innerHTML = day + ", " + month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear() + " - " + time + " IST"
}), 1e3);