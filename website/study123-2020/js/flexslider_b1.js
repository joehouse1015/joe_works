    (function() {
      // store the slider in a local variable
      var $window = $(window),
          flexslider = { vars:{} };
      // tiny helper function to add breakpoints
      function getGridSize() {
        return (window.innerWidth < 500) ? 1 :
               (window.innerWidth < 800) ? 2 : 3;
      }

       $(function() {
         SyntaxHighlighter.all();
       });

      $window.load(function(){
        $('.flexslider_b1').flexslider({
          animation: "slide",
          animationSpeed: 400,
          animationLoop: false,
          itemWidth: 380,
          itemMargin:20,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
      });
		
        $(".index_product_btn").click(function(){
            var index = $(".index_product_btn").index($(this));
            var imgs = $(".index_product_pic_container").eq(index).find($("img"));
            for(var i = 0 ; i < imgs.length ; i++){
              imgs.eq(i).resize();
            }
        });
	  
	  // check grid size on resize event
      $window.resize(function() {
        var gridSize = getGridSize();
        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
	  });

      });
    }());