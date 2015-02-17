(function( $ ){
   $.fn.smoothScroll = function ( options ) {

      var settings = $.extend({
          duration : 500,
          animation: "easeInExpo"
      }, options );

      $(this).click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop,
        }, settings.duration, settings.animation);
        e.preventDefault();
      });
      return this;
  };

})( jQuery );