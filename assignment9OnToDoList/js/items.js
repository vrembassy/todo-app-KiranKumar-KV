todo.itemsJs= (function(){
//Public method for adding new todo item

function insertToDoList(item2){
	
	var item1=document.getElementById("todoTextBox");
	
	item1.value=null;
	
	var ul=document.getElementById("itemContainer");
	var div=document.createElement('DIV');
	div.id= item2+"div";
	var att = document.createAttribute("class");       // Create a "class" attribute
     att.value = "divclass";                           // Set the value of the class attribute
      div.setAttributeNode(att);  
	var divid=div.id;
	var count = ul.childNodes.length;
	
	var buttonid="button"+count;
	var stat = "unchecked";
	var toDOItems=todo.itemJs.method2(divid,item2);
	
	div.innerHTML=toDOItems.join('');
	ul.appendChild(div);
	var insertedItems = {id : buttonid, name : item2, state : stat};
	
     todo.itemJs.method4(insertedItems);	
}


//delegation function
function assignListener()
{
	console.log("reached delegation");
	if (event.target.classList.contains("checkButton"))
		{
			var id = event.target.id;
			
			todo.itemJs.method5(id);
			console.log("event listeners is added to the button");
		}
	
	else if(event.target.classList.contains("deletestyle"))
		{
			var msg=confirm("Do you really want's to delete todo item?");
			if(msg)
			{
				//var buttonid=event.target.id;
				//alert(buttonid);
			id = event.target.getAttribute("divid");
		
			console.log("event listeners is added to the deletebutton");
			todo.itemJs.method3(id);
			}
			else{
				console.log("Delete cancelled");
			}
		}
		
		
}
//exposing the public method
return{
	method1:insertToDoList,
	listener:assignListener
	
};

})();

