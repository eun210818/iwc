$(function(){
  var mySwiper=new Swiper('.swiper-container',{
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay:{
      delay:3000
    },
    pagination:{
      el:'.swiper-pagination',
      type:'bullets',
      clickable:true,
    },  
  });
});