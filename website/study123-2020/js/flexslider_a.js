    $(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider_a').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });