var itemJs=(function(){

//public method
function template(divid,item2)
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
// public method for deleteing the item

function deleteitem(id)
{
	var ul=document.getElementById("itemContainer");
	var listItem=document.getElementById(id);
	ul.removeChild(listItem);
	
		console.log('removed item from the list');
}

//public method for storing the item

function store(insertedItems)
{
	console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
	
	// storing the todo items using objects inside an object
	
	//getting the id of the inserted item to use as index
	idOfTheItem = insertedItems.id;
	//storing the javascript object inside another object
	//public method invocation
	main.Items[idOfTheItem] = insertedItems;
	console.log("Stored items summary :");
	console.log(main.Items);
}

//public method for checkbox status and style for checkbox status
function checkItem(id){
		
	var checkBox = document.getElementById(id);
	var name = checkBox.nextSibling;
	alert(checkBox);
	if(checkBox.checked)
	{     
		console.log('checkbox checked');
		name.classList.add("addlabel");
		main.Items[id].state = "checked";
		alert(id);
	}
	else 
	{
		console.log('checkbox unchecked');
		name.classList.remove("addlabel");
		main.Items[id].state = "unchecked";
	}
		
}

//exposing public method
return{
	method2:template,
	method3:deleteitem,
	method4:store,
	method5:checkItem
	
};
})();