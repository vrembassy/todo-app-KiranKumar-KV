;(function(){
window.template=
function (divid,item2)
{  
    var ul=document.getElementById("itemContainer");
    var count = ul.childNodes.length;
    var checkBoxid="checkbox"+count;

	var elementArray = [];
    var index =0;
	elementArray[index++] = "<li class='horline' id="+item2+"li>";
	elementArray[index++] = "<input type = 'checkbox' id = '"+checkBoxid+"'/>";
	elementArray[index++] = "<span>"+item2+"</span>";
	elementArray[index++] = "<a href='#' divid="+divid+" id="+item2+"delete"+" class='deletestyle'>Delete</a>";
	elementArray[index++] = "</li>";
	return elementArray;
}
//deleteing the item
window.deleteitem=
function(id)
{
	var ul=document.getElementById("itemContainer");
	var listItem=document.getElementById(id);
	ul.removeChild(listItem);
	
		console.log('removed item from the list');
}

//storing the item
window.store=
function(insertedItems)
{
	console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
	
	// storing the todo items using objects inside an object
	
	//getting the id of the inserted item to use as index
	idOfTheItem = insertedItems.id;
	//storing the javascript object inside another object
	window.items[idOfTheItem] = insertedItems;
	console.log("Stored items summary :");
	console.log(items);
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
})();