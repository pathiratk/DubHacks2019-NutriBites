(function() {
   'use strict';
   window.onload = function() {
     qs('input[type=text]').onkeyup = search;
   };

   function search() {
     let input = qs('input[type=text]').value.toLowerCase();
     let cards = qsa('#browse a');
     let list = qsa('#browse h4');
     for (let i = 0; i < list.length; i++) {
       let name = list[i].textContent.toLowerCase();
       if (name.indexOf(input) === 0) {
         cards[i].classList.remove('d-none');
       } else {
         cards[i].classList.add('d-none');
       }
     }
   }

   function qs(query) {
     return document.querySelector(query);
   }

   function qsa(query) {
     return document.querySelectorAll(query);
   }

   function gen(tag) {
     return document.createElement(tag);
   }
})();
