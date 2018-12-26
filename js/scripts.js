jQuery(document).ready(function($) {
  jQuery('#accordion').on('shown.bs.collapse', function (e) {
    jQuery(".card").removeClass("current");
    jQuery(e.target).parent().addClass('current');
  });

  $('.play-video').click(function(){
    $('.video-mask').hide();
    $('.video.first').addClass('video-playing');
    let firstSource = $('.video.first').find('img').first().attr('src');
    let matches = firstSource.match(/https:\/\/img.youtube.com(\/[a-z]+\/)(.+)(\/.+)/);
    let urlVideo = 'https://www.youtube.com/embed/'+matches[2]+'?autoplay=1';
    $('#mainVideo').attr('src', urlVideo);

  });

  var btn = $('.btn-play');
  btn.click(function() {
    $('.video-mask').hide();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#mainVideo").offset().top
    }, 1500);
    let videoSource = $(this).parent().find('img').first().attr('src');
    let matches = videoSource.match(/https:\/\/img.youtube.com(\/[a-z]+\/)(.+)(\/.+)/);
    let videoId = matches ? matches[2] : '';
    let urlEmbed = 'https://www.youtube.com/embed/'+videoId+'?autoplay=1';
    $('#mainVideo').attr('src', urlEmbed);
    $('.video').removeClass('video-playing');
    $($(this).parent().parent()).addClass('video-playing');
  })

  // play intro video
  $('.btn-play-video').click(function() {
    let btn = $(this);
    let url = btn.data('href'),
        mask = btn.parent().parent();

    mask.hide();
    mask.next().css('display', 'block');
    mask.next().attr('src', url+'?autoplay=1');
  })
});

function cargarVideo(idframe, idvideo) {
  document.getElementById(idframe).src = 'https://www.youtube.com/embed/' + idvideo + '?rel=0';
}