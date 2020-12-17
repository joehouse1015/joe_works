$(document).ready(function(){

// 選單
    $(".btn_bar_mobile_switch").click(function(){
        $(".btn_bar_mobile_bg").fadeIn();
		$(".btn_bar_bottom").addClass("btn_bar_bottom_show");
    });
	$(".btn_bar_mobile_bg").click(function(){
        $(".btn_bar_mobile_bg").fadeOut();
		$(".btn_bar_bottom").removeClass("btn_bar_bottom_show");
    });
	
// 選單-副選項	
	$(".btn_bar_bottom_btn span").click(function(){
         var clickIndex = $(".btn_bar_bottom_btn span").index(this);
         $($(".bottom_btn_window")[clickIndex]).slideToggle();
      });
	$(".btn_bar_top_text").click(function(){
        $(".btn_bar_top_text_window").slideToggle();
      });
	
// 內頁-選項-mobile	
    $(".page_bar_mobile_btn").click(function(){
        $(".page_main_left").slideToggle();
    });
	
// 置頂 gotop	
	$(".go_top_container").click(function(){
		$("html,body").animate({scrollTop:0},500);
		return false;
	});
	
	$(window).scroll(function (event) {				
    var scroll = $(window).scrollTop();
    if(scroll > parseInt($(".banner_container,.page_banner_container").offset().top)){
      $(".go_top_container").fadeIn();
    }
    else{
      $(".go_top_container").fadeOut();
    }
  });

});		
	
	