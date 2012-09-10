var img_html = "<img class=\"img-voted\"/>";

$(document).ready(function() {
  
  $('.voting a').hover(function() {
    $(this).find('i').toggleClass('icon-white');
  });
  
  $('.voting > li a').click(function() {
    var vote = $(this).data('vote');
    
    $('.voting > li a .img-voted').remove();
    $(this).addClass('voted');
    
    var $img = $(img_html);
    $img.attr('src', 'img/icons/'+vote+'.png');
    $(this).append($img);
  })
  
});