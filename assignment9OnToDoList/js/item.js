todo.itemJs=(function(){

//public method
function template(divid,item2)
{  
    var ul=document.getElementById("itemContainer");
    var count = ul.childNodes.length;
    var buttonid="button"+count;

	var elementArray = [];
    var index =0;
	
	elementArray[index++] = "<li class='horline' id="+item2+"li>";
	elementArray[index++] = "<span>"+item2+"</span>";
	elementArray[index++] = "<input type = 'button' class='checkButton' value='&#10004' id = '"+buttonid+"'/>";
	elementArray[index++] = "<input type='button' divid="+divid+" id="+item2+"delete"+" class='deletestyle' value='&#10008'>" ;
	elementArray[index++] = "</li>";
	return elementArray;
}
// public method for deleteing the item

function deleteitem(id)
{
	alert(id);
	if(event.target.classList.contains("button"))
	{
		$itemText.removeEventListener("keydown" ,todo.main.enterMethod, false);
	console.log('removing textbox event listener');
    document.querySelector("#clrButton").removeEventListener("click",deleteitem);	
    console.log('removing clear button event listener');
	document.querySelector("#itemContainer").removeEventListener("click",todo.itemsJs.listener);
	console.log('removing delegate event listener');
	document.body.innerHTML='';
	}
	else
	{
		
	var ul=document.getElementById("itemContainer");
	var listItem=document.getElementById(id);
	ul.removeChild(listItem);

	console.log('removed item from the list');
	}
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
todo.main.Items[idOfTheItem] = insertedItems;
	console.log("Stored items summary :");
	console.log(todo.main.Items);
}

//public method for checkbox status and style for checkbox status
function checkItem(id){
		
	var checkBox = document.getElementById(id);
	
	var name = checkBox.previousSibling;
	name.classList.toggle("addlabel");
	if(name.classList.contains("addlabel"))
	{
		todo.main.Items[id].state = "checked";
		console.log(todo.main.Items);
	}
	else{
		todo.main.Items[id].state	 = "unchecked";
		console.log(todo.main.Items);
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