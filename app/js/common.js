$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="tooltip"]').hover(function () {
        $(this).parent('.name').toggleClass('tool-hover');
    });

    $('.btn-burger').click(function () {
        $(this).toggleClass('close-mobile__menu');
        $('.overlay-menu').fadeToggle();
        $('.sidebar').toggleClass('open');
    });


    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".transaction-content");
        if (checkWidth > 576) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 576) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items : 2,
                smartSpeed: 1000,
                slideSpeed: 700,
                autoplay: true,
                dots: true,
                autoWidth:true,
                loop: true,
                nav: false
            });
        }
    }

    postsCarousel();
    $(window).resize(postsCarousel);

});

$(document).ready(function () {
    var speedCanvas = document.getElementById("speedChart").getContext('2d'),
        gradient = speedCanvas.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, 'rgba(15, 193, 171, 0.11)');
    gradient.addColorStop(0.45, 'rgba(15, 193, 171, 0.06)');
    gradient.addColorStop(0.91, 'rgba(15, 193, 171, 0)');

    Chart.defaults.global.defaultFontFamily = "Rubik";
    Chart.defaults.global.defaultFontSize = 14;

    var speedData = {
        labels: ["Sep 21", "Sep 28", "Oct 5", "Oct 12", "Oct 19", "Oct 26"],
        datasets: [{
            label: "Oct 7, 15:28",
            data: [0, 10, 15, 12, 20, 18],
            backgroundColor: gradient,
            borderColor: "#0FC1AB",
            borderWidth: 2
        }],

    };

    var chartOptions = {
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    color: '#E9EEF2',
                    lineWidth: 1.2
                }
            }],
            yAxes: [{
                gridLines: {
                    color: '#E9EEF2',
                    lineWidth: 1.2
                }
            }]
        },
        point: {
            backgroundColor: 'white',
            borderColor: '#0FC1AB',
            borderWidth: 2,
        },
        tooltips: {
            bodyFontFamily: 'Rubik',
            bodyFontSize: 14,
            bodyFontColor: '#4C5461',
            titleMarginBottom: 8,
            titleFontFamily: 'Rubik',
            titleFontSize: 16,
            titleFontStyle: 'normal',
            backgroundColor: '#FFFFFF',
            titleFontColor: '#000',
            caretSize: 5,
            cornerRadius: 2,
            xPadding: 10,
            yPadding: 20
        }
    };

    var lineChart = new Chart(speedCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
    });

});
