    $(document).ready(function(){
	  $(".language_btn").click(function(){
         $(".top_bar_language").toggle();
      });
      $(".top_bar_language div").click(function(){
         $(".top_bar_language").hide();
      });
      $(".top_btn").click(function(){
         var clickIndex = $(".top_btn").index(this);
         $($(".top_btn_window")[clickIndex]).slideToggle();
      });
	  $(".top_btn").mouseleave(function(){
         $(".top_btn_window").slideUp();
      });
	  $(".top_btn_choice_icon").click(function(){
         $(".top_btn_container").css("right","0px");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".pup_window_bg").click(function(){
         $(".top_btn_container").css("right","-390px");
		 $(".pup_window_bg").fadeOut(500);
      });
      $(".go_top").click(function(){
         $("html,body").animate({scrollTop:0},1000);
      });
	  $(".login_member").click(function(){
         $(".login_window").css("top","70px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".login_window_close,.pup_window_bg").click(function(){
         $(".login_window").css("top","-275px").removeClass("pup_window_show");
		 $(".pup_window_bg").fadeOut(500);
      });
	  $(".reg_member").click(function(){
         $(".reg_window").css("top","70px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".reg_window_close,.pup_window_bg").click(function(){
         $(".reg_window").css("top","-380px").removeClass("pup_window_show");
		 $(".pup_window_bg").fadeOut(500);
      });
	  $(".download_area").click(function(){
         $(".tip_window").css("top","70px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".tip_window_close,.pup_window_bg").click(function(){
         $(".tip_window").css("top","-225px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeOut(500);
      });  
	  $(".reg_epaper").click(function(){
         $(".epaper_window").css("top","70px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".epaper_window_close,.pup_window_bg").click(function(){
         $(".epaper_window").css("top","-225px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeOut(500);
      }); 
	         
	  $(".ask_price").click(function(){
         $(".ask_window").css("top","70px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".ask_window_close,.pup_window_bg").click(function(){
         $(".ask_window").css("top","-438px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeOut(500);
      });
	  	          
	  $(".video_watch").click(function(){
         $(".video_window").css("top","70px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeIn(500);
      });
	  $(".video_window_close,.pup_window_bg").click(function(){
         $(".video_window").css("top","-626px").addClass("pup_window_show");
		 $(".pup_window_bg").fadeOut(500);
      });
	  	  
	  $(".page_road_container").click(function(){
         $(".page_left_btn_container").slideToggle();
      });
      $(".page_right_td2_2 a").click(function(){
         var clickIndex = $(".page_right_td2_2 a").index(this);
         $($(".page_right_td2_answer")[clickIndex]).slideToggle();
      });
    });
	
	
	
	