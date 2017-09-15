
//Code to check enter key pressed
function insert(){

var item = document.getElementById("todoTextBox");

function keyDown(event)
{

	if(event.keyCode === 13){
	//alert("enter is pressed");
	     console.log('textbox input taken');
		if (item.value.length < 1 || item.value == " ")
        {
          alert("enter proper input");
        }
else
		insertToDoList(event);
	}
	
}
item.addEventListener("keydown" , keyDown);

/*window.onunload = function() {
    console.log("reloading the page");
    item.removeEventListener('keydown', keyDown);
    return;
}*/
}
//code to add new item
function insertToDoList(event)
		{		
		var item1=document.getElementById("todoTextBox");
		var item2=item1.value;
		item1.value=null;
		//creating new li element
		var listItem=document.createElement('LI');
		listItem.id="listId";
		
		//getting item container
		var Container=document.getElementById("itemContainer");
		
		//creating label for checkbox
		var label=document.createElement('LABEL');
		
		label.htmlFor="todolist";
		label.appendChild(document.createTextNode(item2));
		
		//creating checkbox
		var checkbox=document.createElement('input');
		checkbox.type="checkbox";
		checkbox.name="todolist";
		checkbox.value="todolist";
		checkbox.id="todolist";
		
		//checkbox click event
		checkbox.onclick=function checkItem(){
	    if(checkbox.checked)
		    { 
		     console.log('checkbox checked');
			label.setAttribute("class", "addlabel");
			}
		else 
			{
				console.log('checkbox unchecked');
			 label.setAttribute("class", "removelabel");
			}
	    }		 
	   //creating linebreak
		var linebreak=document.createElement('BR');
		
		
		//create delete button
		var anchor=document.createElement('A');
		anchor.href = "#";
		anchor.id="deleteButtonId";
         anchor.innerHTML = "Delete";
		 anchor.classList.add("deletestyle");
		 
		 //if delete is pressed the item should be deleted
		anchor.onclick = function deleteitem(){
		console.log('deleting the item');
		Container.removeChild(listItem); 
		}
		
		//listing the items
		Container.appendChild(listItem);             
		console.log('list appended');
		
		//adding all 5 item  to itemcontainer
		listItem.appendChild(checkbox);
		console.log('checkbox appended');
		listItem.appendChild(label);
		console.log('label appended');
		listItem.appendChild(anchor);
		console.log('anchor appended');
		listItem.appendChild(linebreak);
		console.log('linebreak appended');
		listItem.setAttribute("class", "horline");
		
		console.log('horizontal line appended');
		
        }
		
		
function remove(){
	console.log("Removing everything now");
	var cheBoxCount = 0;
	var delButtonCount = 0;
	
	var toBeRemovedUl = document.getElementById("itemContainer");
	while(toBeRemovedUl.firstChild){
		var listItemId = toBeRemovedUl.firstChild.id;
		var list = toBeRemovedUl.firstChild;
		if(listItemId == null){
			console.log("null");
			toBeRemovedUl.removeChild(toBeRemovedUl.firstChild);
		}
		else {
				if(listItemId == "listId"){
					while(list.firstChild){
					var itemId = document.getElementById(listItemId).firstChild.id;
					if(itemId == null){
						console.log("null");
						list.removeChild(item);
					}
					else{
					var item = document.getElementById(listItemId).firstChild;
					if(itemId == "todolist"){
						document.getElementById(itemId).onclick = null;
						cheBoxCount++;
						console.log(cheBoxCount+" checkbox event listener removed");
					}
					else if(itemId == "deleteButtonId"){
						document.getElementById(itemId).onclick = null;
						delButtonCount++;
						console.log(delButtonCount+" deletebutton event listener removed");
					}
					list.removeChild(item);
					}
					}
				}
			toBeRemovedUl.removeChild(toBeRemovedUl.firstChild);
		}
	}
	
	
}
