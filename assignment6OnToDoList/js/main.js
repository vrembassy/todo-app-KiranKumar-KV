;(function(){
//creating object to store the item	
var items = {};	
window.items=items;
document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
	var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{
				insertToDoList(item);
			});
	console.log("preloaded items are loaded");
	
	$itemText = document.querySelector("#todoTextBox");
	$itemText.addEventListener("keydown" , keyDown, false);
	document.querySelector("#clrButton").addEventListener("click",remove);
	document.querySelector("#itemContainer").addEventListener("click",assignListener);

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
			insertToDoList(item.value);
			
		}
	}
}

//clear screen button method
function remove(){
	$itemText.removeEventListener("keydown" , keyDown, false);
	console.log('removing textbox event listener');
    document.querySelector("#clrButton").removeEventListener("click",remove);	
    console.log('removing clear button event listener');
	document.querySelector("#itemContainer").removeEventListener("click",assignListener);
	console.log('removing delegate event listener');
	document.body.innerHTML='';
}

//method for checkbox status and style for checkbox status
function checkItem(id){
		
	var checkBox = document.getElementById(id);
	var name = checkBox.nextSibling;
	if(checkBox.checked)
	{     
	console.log('checkbox checked');
	name.classList.add("addlabel");
	items[id].state = "checked";
	}
	else 
	{
		console.log('checkbox unchecked');
		name.classList.remove("addlabel");
		items[id].state = "unchecked";
	}
		
}

//delegation function
function assignListener()
{
	console.log("reached delegation");
	if (event.target.type == "checkbox")
		{
			var id = event.target.id;
			checkItem(id);
			console.log("event listeners is added to the checkbox");
		}
	
	else if(event.target.classList.contains("deletestyle"))
		{
			id = event.target.getAttribute("divid");
			
			
			//var deleteButton = document.getElementById(id);
			console.log("event listeners is added to the deletebutton");
			deleteitem(id);
		}
}
})();
