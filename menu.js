
(function() {
   'use strict';
   window.onload = function() {
      $(".list-group-item").click(function()  {
         console.log($(this));
         // $(this).addClass('active');
      });


   };

})();