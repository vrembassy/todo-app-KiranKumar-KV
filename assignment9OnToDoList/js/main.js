window.todo={};

todo.main = (function(){
//creating object to store the item	

//public variable
var toDoItems = {};	
	

document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
	var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{
				//public method invokations
				todo.itemsJs.method1(item);
			});
	console.log("preloaded items are loaded");
	
	$itemText = document.querySelector("#todoTextBox");
	$itemText.addEventListener("keydown" , keyDown, false);
	document.querySelector("#clrButton").addEventListener("click",todo.itemJs.method3);
	document.querySelector("#itemContainer").addEventListener("click",todo.itemsJs.listener);

});

//enter key method for text box
function keyDown(event){
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
			todo.itemsJs.method1(item.value);
			
		}
	}
}

//clear screen button method

	
return{
		Items:toDoItems,	
		enterMethod:keyDown
		};
})();
