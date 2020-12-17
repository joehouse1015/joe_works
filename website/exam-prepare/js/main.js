$(document).ready(function(){

// 學年級選單
    $(".choice_grade_btn").click(function(){
        $(".choice_grade_window").toggle();
    });
	$(".choice_grade").click(function(){
        $(".choice_grade_window").hide();
    });
// 科目選單
	$(".subject_btn_bar,.subject_btn").click(function(){
        $(".subject_btn_container").toggleClass("subject_btn_show-hide");
    });
	$(".subject_btn_bar").click(function(){
        if($(".subject_btn_bar_text").text() == "科目選項"){
          $(".subject_btn_bar_text").text("收起選項")
        }
        else{
          $(".subject_btn_bar_text").text("科目選項")
        }
    });
    $(".subject_btn").click(function(){
        var clickIndex = $(".subject_btn").index(this);
        var subject = $($(".subject_btn")[clickIndex]).text();
        $(".subject_name").text(subject);
      });
    });
	
// 科目切換	
	$(function(){
		var showTab = 0;
		var defaultLi = $('.subject_btn').eq(showTab).addClass('active');
		$(defaultLi.find('a').attr('href')).siblings().hide();		
		$('.subject_btn').click(function() {
			var $this = $(this),
			    clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(clickTab).stop(false, true).show().siblings().hide();
            return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});

// 回選科目-gotop	
	$(".go_top_btn").click(function(){
		$("html,body").animate({scrollTop:0},500);
		return false;
	});
	
	$(window).scroll(function (event) {				
        var scroll = $(window).scrollTop();
        if(scroll > parseInt($(".subject_title_container").offset().top)){
           $(".go_top_btn").fadeIn();
        }
        else{
           $(".go_top_btn").fadeOut();
        }
    });
	
// 影片彈跳視窗
	$(".subject_video_item").click(function(){
        $(".pup_container").fadeIn();
		$(".video_iframe").html('<iframe src="https://www.youtube.com/embed/W7qKLi_4d1E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    });
	$(".close_icon,.pup_bg").click(function(){
        $(".pup_container").fadeOut();
		$(".video_iframe").empty();
    });

});		
	
	