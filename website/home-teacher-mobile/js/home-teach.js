$(document).ready(function(){
  /* 登入 */  
  $(".open-login-window").click(function(){
  $(".window-black").fadeIn(600);
  $(".login-window").addClass("left-move");
  });
  $(".find-account").click(function(){
  $(".find-account-window").addClass("left-move");
  });
  $(".find-password").click(function(){
  $(".find-password-window").addClass("left-move");
  });
  /* 登入 end */
  
  /* 會員功能 */  
  $(".open-mem-window").click(function(){
  $(".window-black").fadeIn(600);
  $(".mem-window").addClass("left-move");
  });
  $(".open-teacher-list-window").click(function(){
  $(".teacher-list-window").addClass("left-move");
  });
  $(".open-buy-point-window").click(function(){
  $(".buy-point-window").addClass("left-move");
  });
  $(".open-set-class-window").click(function(){
  $(".set-class-window").addClass("left-move");
  });
  $(".open-apply-for-class-window").click(function(){
  $(".apply-for-class-window").addClass("left-move");
  });
  $(".open-class-schedule-window").click(function(){
  $(".class-schedule-window").addClass("left-move");
  });
  $(".open-custom-class-window").click(function(){
  $(".custom-class-window").addClass("left-move");
  });
  /* 會員功能 end */
  
  /* 會員功能-候選教師 */
  $(".match-bu-other").click(function(){
  var clickIndex = $(".match-bu-other").index(this);
  $($(".match-text-other-window")[clickIndex]).show();
  });
  $(".match-text-close").click(function(){
  var clickIndex2 = $(".match-text-close").index(this);
  $($(".match-text-other-window")[clickIndex2]).hide();
  });
  /* 會員功能-候選教師 end * /
  
  /* 會員功能-申請中課程 */
  $(".apply-other-infor").click(function(){
  var clickIndex = $(".apply-other-infor").index(this);
  $($(".apply-other-window-container")[clickIndex]).show();
  });
  $(".apply-window-close").click(function(){
  var clickIndex2 = $(".apply-window-close").index(this);
  $($(".apply-other-window-container")[clickIndex2]).hide();
  });
  /* 會員功能-申請中課程 end * /
   
  /* 左側視窗關閉 */  
  $(".layer-one-close").click(function(){
  $(".window-black").fadeOut(300);
  $(".login-window,.mem-window").removeClass("left-move");
  });
  $(".layer-two-close").click(function(){
  $(".find-account-window,.find-password-window,.teacher-list-window,.buy-point-window,.set-class-window,.custom-class-window,.apply-for-class-window,.class-schedule-window").removeClass("left-move");
  });
  /* 左側視窗關閉 end */
  
  /* 註冊 */
  $(".open-reg-window").click(function(){
  $(".reg-window").show(300);
  }); 
  $(".reg-tip span").click(function(){
  $(".tip-window").show();
  }); 
  $(".bu-tip-close").click(function(){
  $(".tip-window").hide();
  });
  /* 註冊 end */
  
  /* 訊息 */
  $(".open-infor-window").click(function(){
  $(".infor-window").show(300);
  }); 
  $(".infor-view-all").click(function(){
  $(".infor-pup-window").show();
  }); 
  $(".infor-pup-bu-close").click(function(){
  $(".infor-pup-window").hide();
  });    
  /* 訊息 end */

 /* 系統客服 */
  $(".open-system-chat-window").click(function(){
  $(".system-chat-window").show(300);
  }); 
  /* 系統客服 end */
    
 /* 客服信箱 */
  $(".open-mail-window").click(function(){
  $(".mail-window").show(300);
  });  
  /* 客服信箱 end */

 /* 客服信箱 */
  $(".open-write-prove-window").click(function(){
  $(".write-prove-window").show(300);
  });  
 /* 客服信箱 end */
  
  /* 彈跳視窗 關閉 */
  $(".pup-window-close").click(function(){
  $(".reg-window,.infor-window,.system-chat-window,.mail-window,.write-prove-window").hide(300);
  });  
  /* 彈跳視窗 關閉 end */
    
  /* 搜尋 */
  $(".open-search-window").click(function(){
  $(".search-window").show(300);
  }); 
  $(".close-search-window").click(function(){
  $(".search-window").hide(300);
  });  
  /* 搜尋 end */
 
  /* 搜尋條件視窗 */
  $(".search-teach-level").click(function(){
  $(".search-teach-level-window").show();
  }); 
  $(".search-teach-level-ok,.search-teach-level-cancel").click(function(){
  $(".search-teach-level-window").hide();
  });
  $(".search-teach-city").click(function(){
  $(".search-teach-city-window").show();
  }); 
  $(".search-teach-city-ok,.search-teach-city-cancel").click(function(){
  $(".search-teach-city-window").hide();
  });
  $(".search-city-choice").click(function(){
  $(".search-teach-area-window").fadeIn(1000);
  }); 
  $(".search-teach-area-ok,.search-teach-area-cancel").click(function(){
  $(".search-teach-area-window").hide();
  });
  $(".search-teach-subject").click(function(){
  $(".search-teach-subject-window").show();
  }); 
  $(".search-teach-subject-ok,.search-teach-subject-cancel").click(function(){
  $(".search-teach-subject-window").hide();
  });
  $(".search-subject-choice").click(function(){
  $(".search-teach-grade-window").fadeIn(1000);
  }); 
  $(".search-teach-grade-ok,.search-teach-grade-cancel").click(function(){
  $(".search-teach-grade-window").hide();
  });
  $(".search-teach-day").click(function(){
  $(".search-teach-day-window").show();
  }); 
  $(".search-teach-day-ok,.search-teach-day-cancel").click(function(){
  $(".search-teach-day-window").hide();
  });
  /* 搜尋條件視窗 end */

  /* 提示 */
  $(".page-search-tip,.add-teacher-bu").click(function(){
  $(".tip-window").show();
  }); 
  $(".bu-tip-close").click(function(){
  $(".tip-window").hide();
  });  
  /* 頁面-搜尋結果 end */
 
  /* 教師列表 */
  $(".t-day").click(function(){
  var clickIndex = $(".t-day").index(this);
  $($(".t-day-window")[clickIndex]).show();
  });
  $(".t-day-window-close").click(function(){
  var clickIndex2 = $(".t-day-window-close").index(this);
  $($(".t-day-window")[clickIndex2]).hide();
  });
  /* 教師列表 end * /

  /* 推薦教師 */
  $(".recom-teacher-day span").click(function(){
  var clickIndex = $(".recom-teacher-day span").index(this);
  $($(".recom-teacher-day-window")[clickIndex]).show();
  });
  $(".recom-teacher-day-window-close").click(function(){
  var clickIndex2 = $(".recom-teacher-day-window-close").index(this);
  $($(".recom-teacher-day-window")[clickIndex2]).hide();
  });
  /* 推薦教師 end * /
  
  /* 家長見證 */
  $(".bu-see-all").click(function(){
  $(".prove-window").show();
  $(".pup-window-black-2").show();
  }); 
  $(".pup-window-close-2").click(function(){
  $(".prove-window").hide();
  $(".pup-window-black-2").hide();
  });  
  /* 家長見證 end */
  
  /* 頁面選項 */
  $(".bu-page-choice").click(function(){
  $(".main-choice-container").slideToggle("1000");
  }); 
  /* 頁面選項 end*/
  
  /* 頁面-標頭視窗 */
  $(".page-title-bu").click(function(){
  $(".page-title-window").show();
  }); 
  $(".page-title-window-close").click(function(){
  $(".page-title-window").hide();
  });  
  /* 頁面-標頭視窗 end */
  
  /* 頁面-影音視窗 */
  $(".teacher-video-container img").click(function(){
  $(".video-play-window").show();
  }); 
  $(".video-play-window-close").click(function(){
  $(".video-play-window").hide();
  });  
  /* 頁面-影音視窗 end */
  
  /* 頁面-常見問題 */
  $(".qa-answer-bu").click(function(){
  
  var clickIndex = $(".qa-answer-bu").index(this);
  $($(".qa-answer")[clickIndex]).fadeToggle(1000);
      
  if($($(".qa-answer-bu")[clickIndex]).text() == "回答"){
  $($(".qa-answer-bu")[clickIndex]).text("收起");
  }
  else{
  $($(".qa-answer-bu")[clickIndex]).text("回答");
   }    
  });
  /* 頁面-常見問題 end */
  
  /* 頁面-常見問題 end */
	$(".get-reg,.go-to-top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 800);
	});
    $('[href=#get-reg]').click(function() {
               $('html,body').animate({
                 scrollTop:$('#get-reg').offset().top
               },1500);
               return false;
    });
  /* 頁面-常見問題 end */
  
});

/* 彈跳視窗-搜尋教師-頁籤 */
$(function(){
		var showTab = 0;
		var defaultLi = $('.search-window-container li').eq(showTab).addClass('active');
		$(defaultLi.attr('href')).siblings().hide();		
		$('.search-window-container li').click(function() {
			var $this = $(this),
			    clickTab = $this.attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
		}).find('a').focus(function(){
			this.blur();
		});
});
/* 彈跳視窗-搜尋教師-頁籤 end */

/* 頁面-教師資訊-頁籤 */
$(function(){
		var showTab = 0;
		var defaultLi = $('.teach-infor-bookmark li').eq(showTab).addClass('active');
		$(defaultLi.attr('href')).siblings().hide();		
		$('.teach-infor-bookmark li').click(function() {
			var $this = $(this),
			    clickTab = $this.attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
		}).find('a').focus(function(){
			this.blur();
		});
});
/* 頁面-教師資訊-頁籤 end */

/* 頁面-教材資訊-頁籤 */
$(function(){
		var showTab = 0;
		var defaultLi = $('.learn-tool-infor-bookmark li').eq(showTab).addClass('active');
		$(defaultLi.attr('href')).siblings().hide();		
		$('.learn-tool-infor-bookmark li').click(function() {
			var $this = $(this),
			    clickTab = $this.attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
		}).find('a').focus(function(){
			this.blur();
		});
});
/* 頁面-教材資訊-頁籤 end */
  
