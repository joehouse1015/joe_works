//客服信箱彈跳視窗
$("#customer-service-btn,.customer-service-btn").click(function(){
    $("#report-mail-div").fadeIn();
});

$("#report-mail-close-btn").click(function(){
    $("#report-mail-div").fadeOut();
});

$("#report-mail-send-btn ").click(function(){
    $("#report-mail-div").fadeOut();
});

$("#report-mail-cancel-btn").click(function(){
    $("#report-mail-div").fadeOut();
});

//首頁上方點擊搜尋教師，滑動至下方 
$('#index-search-teacher-btn').click(function(){
 $('html,body').animate({scrollTop:$('#search-area-div').offset().top}, 800); 
});

//其他分頁上方搜尋教師彈跳視窗
$("#search-teacher-btn").click(function(){
    $("#search-teacher-div").fadeIn();
});

$("#search-teacher-div-close").click(function(){
    $("#search-teacher-div").fadeOut();
});

//購買點數彈跳視窗 
$("#buy-point-btn").click(function(){
    $("#buy-point-div").fadeIn();
});

$("#buy-point-div-close").click(function(){
    $("#buy-point-div").fadeOut();
});

//候補教師彈跳視窗
$("#show-AlterTeacher-btn").click(function(){
    $("#show-alterteacher-div").fadeIn();
});

$("#show-alterteacher-div-close").click(function(){
    $("#show-alterteacher-div").fadeOut();
});

//課程安排彈跳視窗
$("#course-schedule-btn").click(function(){
    $("#course-schedule-div").fadeIn();
});

$("#course-schedule-div-close").click(function(){
    $("#course-schedule-div").fadeOut();
});

$("#course-schedule-div-ok").click(function(){
    $("#course-schedule-div").fadeOut();
});

$("#course-schedule-div-cancel").click(function(){
    $("#course-schedule-div").fadeOut();
});

//安排中課程彈跳視窗
$("#arranging-course-btn").click(function(){
    $("#fa-calendar-div").fadeIn();
});

$("#fa-calendar-cancel-btn").click(function(){
    $("#fa-calendar-div").fadeOut();
});

//輔助工具彈跳列
$("#sup-tools-btn").click(function(){
	if ( $( "#fa-calendar-btn" ).is( ":hidden" ) ) {
 			$("#up-down").attr("class","fa fa-caret-up icon2  trans2");
		} else {
 			$("#up-down").attr("class","fa fa-caret-up icon2");
 		}

	$("#fa-comments-btn").slideToggle();
	$("#fa-street-view-btn").slideToggle();
	$("#fa-calendar-btn").slideToggle();

});
// 系統客服彈跳視窗
$("#fa-comments-btn,.fa-comments-btn").click(function(){
    $("#system-talk-div,.system-talk-area").fadeIn();
});

$("#system-talk-close,.system-talk-control").click(function(){
    $("#system-talk-div,.system-talk-area").fadeOut();
});


//家長見證
$("#show-case-btn").click(function(){
    $("#show-case-div").fadeIn();
});

$("#show-case-close").click(function(){
    $("#show-case-div").fadeOut();
});

//訊息通知
$("#info-btn").click(function(){
    $("#message-infor-div").fadeIn();
});

$("#message-infor-cancel-btn").click(function(){
    $("#message-infor-div").fadeOut();
});

//客製化課程
$("#fa-street-view-btn").click(function(){
    $("#fa-street-view-div").fadeIn();
});

$("#fa-street-view-close").click(function(){
    $("#fa-street-view-div").fadeOut();
});
//專業度選擇
$("#teacher-per-input").click(function(){
    $("#teacher-per-div").fadeIn();
});

$("#teacher-per-div-ok").click(function(){
    $("#teacher-per-div").fadeOut();
});

$("#teacher-per-div-cancel").click(function(){
    $("#teacher-per-div").fadeOut();
});
//上課科目選擇。還有第二層
// $("#subject-input").click(function(){
//     $("#subject-div").fadeIn();
// });

// $("#subject-div-cancel").click(function(){
//     $("#subject-div").fadeOut();
// });

//上課日選擇
$("#class-day-input").click(function(){
    $("#class-day-div").fadeIn();
});

$("#class-day-div-ok").click(function(){
    $("#class-day-div").fadeOut();
});

$("#class-day-div-cancel").click(function(){
    $("#class-day-div").fadeOut();
});

// 共用部分 教師搜尋
$("#search-teacher-btn").click(function(){
    $("#search-area-div").fadeIn();
});

$("#search-area-div-close").click(function(){
    $("#search-area-div").fadeOut();
});


//page-teacher-video 部分

//彈跳視窗 影片播放視窗
$(".teacher-video-area div").click(function(){
    $("#video-play-div").fadeIn();
});

$("#video-play-div-close").click(function(){
    $("#video-play-div").fadeOut();
});

//網頁上方篩選功能
$("#filter-area-show-btn").click(function(){
    $("#filter-area-div").show();
});

$("#filter-area-div-close").click(function(){
    $("#filter-area-div").hide();
});

//會員登入登出 
$(".logout-btn").click(function(){
    $(".member-book").hide();
    $(".login-book").show();
});
$(".login-btn").click(function(){
    $(".member-book").show();
    $(".login-book").hide();
});

//註冊視窗
$(".reg-btn").click(function(){
    $("#reg-div").show();
});
$("#reg-close-btn").click(function(){
    $("#reg-div").hide();
});

//個資安全
$(".open-infor-safe").click(function(){
    $("#infor-safe-div").show();
});
$("#infor-safe-div-close").click(function(){
    $("#infor-safe-div").hide();
});

//上課行程
$("#fa-calendar-btn").click(function(){
    $("#class-calendar-div").fadeIn();
});
$("#class-calendar-cancel-btn").click(function(){
    $("#class-calendar-div").fadeOut();
});