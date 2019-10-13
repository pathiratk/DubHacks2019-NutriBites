
(function() {
   'use strict';
   window.onload = function() {
      $(".list-group-item").click(() =>  {
         console.log($(this));
         $(this).addClass('active');
      });


   };

})();