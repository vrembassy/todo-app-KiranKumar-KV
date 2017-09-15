document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
	console.log("preloaded items are loaded");
	insert();
});

function insert(){
	var item = document.getElementById("todoTextBox");
    item.addEventListener("keydown" , keyDown, false);
}

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
			insertToDoList();
			storeData();
		}
	}
}

function storeData(){
	var arr = document.getElementById("itemContainer").getElementsByTagName("li");
	var array = {};
    var selected=[]
    for (var i = 0; i < arr.length; i++) 
	{
		array.id=arr[i].id;
		var arrr=arr[i].getElementsByTagName("label");
		for (var j= 0; j < arrr.length; j++)
		{
			array.text=arrr[j].innerText;
			var checkboxes = arr[i].getElementsByTagName("input");
			for (var k = 0; k <j+1; k++)
			{
				if (checkboxes[k].type == "checkbox")
				{
					var isChecked = checkboxes[k].checked;
					if(isChecked == true)
					{
						selected.push("checked");
					}
					else
					{
						selected.push("unchecked");
					}
				}
				else 
				{
					alert("not input");
				}
			}
		}
		var list="id:"+array.id+"\ntext:"+array.text+"\nstatus:"+selected[i];
		console.log(list);
	}	
}

function insertToDoList(){		
	var item1=document.getElementById("todoTextBox");
	var item2=item1.value;
	item1.value=null;
	
	var ul=document.getElementById("itemContainer");
	var div=document.createElement('DIV');
	div.id=item2+"div";
	var elementArray = [];
	var index =0;
	elementArray[index++] = "<li id="+item2+"li>";
	elementArray[index++] = "<input type = 'checkbox' id="+item2+"checkbox"+" onclick='checkItem(id);'/>";
	elementArray[index++] = "<label>"+item2+"</label>";
	elementArray[index++] = "<a href='#' id="+item2+"delete"+" onclick='deleteitem(id);' style='float:right;'>Delete</a>";
	elementArray[index++] = "</br>";
	elementArray[index++] = "<hr style='border-bottom:2px solid black;'>";
	elementArray[index++] = "</li>";
	div.innerHTML=elementArray.join('');
	ul.appendChild(div);
		
	    
			
}

function remove(){
	document.body.innerHTML='';

}

function removepreload(id){
	var myList = document.getElementById(id);
	myList.parentNode.parentNode.removeChild(myList.parentNode);
	myList.classList.remove("preloadedList");
}

function checkItem(id){
		
	var checkBox=document.getElementById(id);
	var label=checkBox.nextSibling;
	if(checkBox.checked)
	{ 
	        
	console.log('checkbox checked');
	label.classList.add("addlabel");
	}
	else 
	{
		console.log('checkbox unchecked');
		label.classList.remove("addlabel");
	}
		
}

function deleteitem(id)
{
	var listItem=document.getElementById(id);
	console.log('deleting the item');
	var item = document.getElementById("todoTextBox");
		
    if( item.removeEventListener)
	{
		item.removeEventListener("click" , checkItem, false);
		console.log('removing the checkbox  event listener');
	}
	else
	{
		console.log('cant remove the checkbox event listener');
	}
	if( item.removeEventListener)
	{
		item.removeEventListener("click" , deleteitem, false);
		console.log('removing the delete item event listener');
	}
	else
	{
		console.log('cant remove the delete item event listener');
	}
	listItem.parentNode.parentNode.parentNode.removeChild(listItem.parentNode.parentNode);
	listItem.classList.remove("horline");		
}
		
