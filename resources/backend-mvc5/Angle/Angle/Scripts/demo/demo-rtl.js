// Toggle RTL mode for demo
// ----------------------------------- 


(function(window, document, $, undefined){

  $(function(){
    var maincss = $('#maincss');
    $('#chk-rtl').on('change', function(){
      
        maincss.attr('href', this.checked ? '/Content/app/css/app-rtl.css' : '/Content/app/css/app.css');

    });

  });

})(window, document, window.jQuery);