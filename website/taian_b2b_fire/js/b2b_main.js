/*選項按鈕樣式切換*/
$(document).ready(function () {
    $(".ins_form_input_tab_btn,.pup_country_tab_btn,.block_container_tab_btn").click(function () {
        $(this).addClass("active").siblings('.active').removeClass('active');
    });
});
/*選項按鈕樣式切換end*/

/*控制select選項文字顏色*/

$(document).ready(function () {
    $('.select_arrow_icon').css({
        "color": "#A4A4A4",
        "font-weight": "normal"
    });
    $('.select_arrow_icon').change(function () {
        var current = $(this).val();
        if (current != 'null') {
            $(this).css({
                "color": "#212529",
                "font-weight": "bold"
            });
        } else {
            $(this).css({
                "color": "#A4A4A4",
                "font-weight": "normal"
            });
        }
    });
});

/*控制select選項文字顏色end*/

/*保險說明彈跳視窗*/

$(document).ready(function () {
    $(".ins_describe_tip").click(function () {
        $(".ins_describe_pup").show();
    });
    $(".pup_window_close").click(function () {
        $(".ins_describe_pup").hide();
    });
});

/*保險說明彈跳視窗end*/

/*選擇國家彈跳視窗*/

$(document).ready(function () {
    $(".choice_country_btn").click(function () {
        $(".country_choice_pup").show();
    });
    $(".pup_window_close").click(function () {
        $(".country_choice_pup").hide();
    });
});

/*選擇國家彈跳視窗end*/

/*列印彈跳視窗*/

$(document).ready(function () {
    $(".ins_file_print_open").click(function () {
        $(".ins_file_print_pup").show();
    });
    $(".pup_window_close").click(function () {
        $(".ins_file_print_pup").hide();
    });
});

/*列印彈跳視窗end*/
