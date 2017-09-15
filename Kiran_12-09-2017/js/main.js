window.Todo = window.Todo || {};        
window.Todo.main = 
(function(window) {
	'use strict';
 document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
                //instantiate AppView
				new AppView();
 });
		           
})(window);