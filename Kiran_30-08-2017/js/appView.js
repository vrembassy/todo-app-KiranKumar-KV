window.Todo=window.Todo || {};
Todo.appView = (function(){
	var toDoItems = {};	
	window.toDoItems = toDoItems;
	document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
	var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{	
				//public method invokations
				Todo.appView.addToItem(item);
				
			});
			console.log("preloaded items are loaded");
			(function(){
				var ulElement=document.getElementById("itemContainer");
				$itemText = document.querySelector("#todoTextBox");
				$itemText.addEventListener("keydown" , Todo.appView.init, false);
				document.querySelector("#clrButton").addEventListener("click",clearScreen);
				ulElement.addEventListener("click",Todo.ItemsView.assignListeners);
			})();
	});
	return{
		init: function(){
				var item = document.getElementById("todoTextBox");
				if(event.keyCode === 13)
				{
					console.log('textbox input taken');
					if (item.value.length < 1 || item.value == " ")
					{
						alert("enter proper input");
					}
					else
					{  	
						Todo.ItemsView.add(item.value);
					}
				}
				
			},
		display: function(item) {
				
				Todo.ItemsView.add(item);
			},
		remove: function() {
				Todo.ItemsView.remove();
			},
		addToItem: function(item) {
		
			Todo.appView.display(item);
			}		
	
	}
	
	function clearScreen(){
			var id = "clrButton";
			Todo.ItemView.remove(id);
		}
		
})();
