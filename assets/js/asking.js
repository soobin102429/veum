$('.asking-btn-1').click(function(){
    $('.faq-1-list').css('display','block');
    $('.faq-2-list').css('display','none');
    $('.faq-3-list').css('display','none');
    $('.faq-4-list').css('display','none');
    $('.faq-5-list').css('display','none');
    $('.faq-6-list').css('display','none');
});
$('.asking-btn-2').click(function(){
    $('.faq-1-list').css('display','none');
    $('.faq-2-list').css('display','block');
    $('.faq-3-list').css('display','none');
    $('.faq-4-list').css('display','none');
    $('.faq-5-list').css('display','none');
    $('.faq-6-list').css('display','none');
});
$('.asking-btn-3').click(function(){
    $('.faq-1-list').css('display','none');
    $('.faq-2-list').css('display','none');
    $('.faq-3-list').css('display','block');
    $('.faq-4-list').css('display','none');
    $('.faq-5-list').css('display','none');
    $('.faq-6-list').css('display','none');
});
$('.asking-btn-4').click(function(){
    $('.faq-1-list').css('display','none');
    $('.faq-2-list').css('display','none');
    $('.faq-3-list').css('display','none');
    $('.faq-4-list').css('display','block');
    $('.faq-5-list').css('display','none');
    $('.faq-6-list').css('display','none');
});
$('.asking-btn-5').click(function(){
    $('.faq-1-list').css('display','none');
    $('.faq-2-list').css('display','none');
    $('.faq-3-list').css('display','none');
    $('.faq-4-list').css('display','none');
    $('.faq-5-list').css('display','block');
    $('.faq-6-list').css('display','none');
});
$('.asking-btn-6').click(function(){
    $('.faq-1-list').css('display','none');
    $('.faq-2-list').css('display','none');
    $('.faq-3-list').css('display','none');
    $('.faq-4-list').css('display','none');
    $('.faq-5-list').css('display','none');
    $('.faq-6-list').css('display','block');
});
// 리스트 논블럭

var header = document.getElementById("faq-asking-btn");
var btns = header.getElementsByClassName("asking-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("asking-active");
  current[0].className = current[0].className.replace(" asking-active", "");
  this.className += " asking-active";
  });
}

// btn 색 바뀌는거
