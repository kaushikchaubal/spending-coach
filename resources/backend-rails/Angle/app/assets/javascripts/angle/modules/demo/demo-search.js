// Custom jQuery
// ----------------------------------- 


(function(window, document, $, undefined){

  if (! $.fn['slider'] || ! $.fn['chosen'] ) return;

  $(function(){

    // BOOTSTRAP SLIDER CTRL
    // ----------------------------------- 

    $('[data-ui-slider]').slider();

    // CHOSEN
    // ----------------------------------- 

    $('.chosen-select').chosen();

  });

})(window, document, window.jQuery);
