// Forms Demo
// ----------------------------------- 


(function(window, document, $, undefined){

  if (! $.fn['slider']    ||
      ! $.fn['chosen']    ||
      ! $.fn['inputmask'] ||
      ! $.fn['filestyle'] ||
      ! $.fn['wysiwyg'] ) return;

  $(function(){

    // BOOTSTRAP SLIDER CTRL
    // ----------------------------------- 

    $('[data-ui-slider]').slider();

    // CHOSEN
    // ----------------------------------- 

    $('.chosen-select').chosen();

    // MASKED
    // ----------------------------------- 

    $('[data-masked]').inputmask();

    // FILESTYLE
    // ----------------------------------- 

    $('.filestyle').filestyle();

    // WYSIWYG
    // ----------------------------------- 

    $('.wysiwyg').wysiwyg();

  });

})(window, document, window.jQuery);