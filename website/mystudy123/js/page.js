$(document).ready(function() {
	if ($(window).width() <= 950) {
		$(".topbar-bu").removeClass("hvr-top");
	}
	$(".main-topic-choice,.main-red-arrow").click(function() {
		$(".main-topic-container").slideToggle("1000");
	});
	$(".main-topic-container li").click(function() {
		$(".main-topic-container").slideUp("1000");
		$(".main-topic-choice").html($(this).text());
		$(".main-point-container").show();
	});
	$(".main-list-bu").click(function() {
		$("#list-window").fadeIn(500);
		$("html,body").animate({
			scrollTop: 0
		}, 800);
	});
	$(".window-close-bu").click(function() {
		$("#list-window").fadeOut(500);
	});
	$(".page-list-search-bu").click(function() {
		var value = $(".page-list-search").val();
		var liArray = $(".page-main-list-item");
		for (var i = 0; i < liArray.length; i++) {
			if ($(liArray[i]).text().match(value)) {
				$(liArray[i]).removeClass("active");
			} else {
				$(liArray[i]).addClass("active");
			}
		}
	});
	$(".page-list-search").keyup(function(e) {
		if ($(this).val() == "") {
			$(".page-main-list-item").removeClass("active");
		} else {
			if (e.which == 13) {
				$(".page-list-search-bu").click();
			}
		}
	});
	$(".pup-list-search-bu").click(function() {
		var value = $(".pup-list-search").val();
		var liArray = $(".pup-main-list-item");
		for (var i = 0; i < liArray.length; i++) {
			if ($(liArray[i]).text().match(value)) {
				$(liArray[i]).removeClass("active");
			} else {
				$(liArray[i]).addClass("active");
			}
		}
	});
	$(".pup-list-search").keyup(function(e) {
		if ($(this).val() == "") {
			$(".pup-main-list-item").removeClass("active");
		} else {
			if (e.which == 13) {
				$(".pup-list-search-bu").click();
			}
		}
	});
	$(".video-bu.yellow").click(function() {
		$("#list-window").fadeIn(500);
		$("html,body").animate({
			scrollTop: 0
		}, 800);
	});
	$(".window-close-bu").click(function() {
		$("#list-window").fadeOut(500);
	});
	
	
	
});