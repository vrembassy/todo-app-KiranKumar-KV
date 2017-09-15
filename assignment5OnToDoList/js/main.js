;(function(){
//creating object to store the item	
var items = {}	
	

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

//adding new todo item
function insertToDoList(item2){		
	var item1=document.getElementById("todoTextBox");
	
	item1.value=null;
	
	var ul=document.getElementById("itemContainer");
	var div=document.createElement('DIV');
	div.id=item2+"div";
	var count = ul.childNodes.length;
	
	var checkBoxid="checkbox"+count;
	var stat = "unchecked";
	var toDOItems=template(item2);
	
	div.innerHTML=toDOItems.join('');
	ul.appendChild(div);
	var insertedItems = {id : checkBoxid, name : item2, state : stat};
	
     store(insertedItems);	
}
	

function template(item2)
{  
    var ul=document.getElementById("itemContainer");
    var count = ul.childNodes.length;
    var checkBoxid="checkbox"+count;
	var elementArray = [];
    var index =0;
	elementArray[index++] = "<li class='horline' id="+item2+"li>";
	elementArray[index++] = "<input type = 'checkbox' id = '"+checkBoxid+"'/>";
	elementArray[index++] = "<span>"+item2+"</span>";
	elementArray[index++] = "<a href='#' id="+item2+"delete"+" class='deletestyle'>Delete</a>";
	elementArray[index++] = "</li>";
	return elementArray;
}
//deleteing the item
function deleteitem(id)
{
	var listItem=document.getElementById(id);
	//removing div tag inside ul to remove perticular li
		listItem.parentNode.parentNode.removeChild(listItem.parentNode);	
		console.log('removing li element');
}

//storing the item
function store(insertedItems)
{
	console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
	
	// storing the todo items using objects inside an object
	
	//getting the id of the inserted item to use as index
	idOfTheItem = insertedItems.id;
	//storing the javascript object inside another object
	items[idOfTheItem] = insertedItems;
	console.log("Stored items summary :");
	console.log(items);
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
			id = event.target.parentNode.id;
			alert(id);
			//var deleteButton = document.getElementById(id);
			console.log("event listeners is added to the deletebutton");
			deleteitem(id);
			alert(id);
		}
}
})();
