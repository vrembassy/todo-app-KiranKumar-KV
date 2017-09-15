window.Todo = window.Todo || {};
Todo.AppView = (function(){
	var toDoItems = {};	      													  				//object to store items and status
	window.toDoItems = toDoItems;
	document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
	Todo.AppView.init();
	});
	return{
		init:function(){
			$ulElement = document.querySelector("#itemContainer");
			$itemText = document.querySelector("#todoTextBox");
			$clrbutton = document.querySelector("#clrButton");
			$itemText.addEventListener("keydown" ,Todo.AppView.add, false);       				//textbox eventlistener
			$clrbutton.addEventListener("click",Todo.ItemsView.clearScreen);        				//clear screen button eventlistener
			$ulElement.addEventListener("click",Todo.ItemsView.assignListeners);  				//checkbutton and deletebutton eventlistener
			$items = Todo.Store.init();											  				//call to load preloadeditems  init (AppView-->Store)
			Todo.ItemsView.init();																//init (AppView-->ItemsView)
			Todo.AppView.display($items);										  				//call to display preloadeditem
		},
		display:function($items){												  				//function to display preloadeditem
			for(i=0;i<$items.length;i++){
				Todo.ItemsView.display($items[i]);												// display  (AppView-->ItemsView)
			}
		},
		add:function(){
			if(event.keyCode === 13){
				console.log('textbox input taken');
				if ($itemText.value.length < 1 || $itemText.value == " "){
					alert("enter proper input");
				}
				else{  	
					Todo.ItemsView.display($itemText.value);					  				//call to display new entered item  display(AppView--ItemsView)
				}
			}
		}
		
	}
})();