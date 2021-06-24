$(document).ready(function(){
    $('.slider-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        fade: true,
        speed: 1200
      });
    $('.slider-inner').on('beforeChange', function(){
        $(".slider-inner .item img").css("clip-path", "polygon(0 0, 100% 0, 100% 0%, 0 0%)");
        setTimeout(function () {
            $('.slider-inner .item img').css("clip-path", "polygon(0 0, 100% 0, 100% 0%, 0 0%)");
        },100);

        $(".slider-inner h1").css("transform", "scale(0)")
    });
    $('.slider-inner').on('afterChange', function(){
        $(".slider-inner .item img").css("clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%)");
        setTimeout(function () {
            $('.slider-inner .item img').css("clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%)");
        },100);

        $(".slider-inner h1").css("transform", "scale(1)")
    });
});



$(`#play-video`).on('click', function(e){
    e.preventDefault();
    $(`#video-overlay`).addClass('open');
    $(`#video-overlay`).append('<iframe width="50%" height="500" src="https://www.youtube.com/embed/pbW2Wqyy8Hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
});

$(document).keyup(function(e){
    if(e.keycode === 27) {close_video();}
});

function close_video(){
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};