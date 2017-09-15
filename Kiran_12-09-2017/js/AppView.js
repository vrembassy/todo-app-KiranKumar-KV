window.Todo = window.Todo || {};        
window.Todo.AppView =  
(function(){
                'use strict';
             	
 document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");  
	  new AppView();
 });
	function AppView(constructorParams) {
                     //initialize appview member variables here       
					alert("hi");
				this.init();
                }
           
                AppView.prototype.init = function() {
                                //instantiate ItemView
								//alert("hi");
                                new ItemView(10);
                }             
 
                    
			    
})();
 