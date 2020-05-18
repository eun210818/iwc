$(function(){
  // var headerHeight=$('header').height();
  $(document).scroll(function(){
    var docTop=$(document).scrollTop();
    if(docTop>=80){
      $('#link_top').addClass('active')
    }else{
      $('#link_top').removeClass('active');
    }
  });
});