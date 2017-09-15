
//Code to check enter key pressed
function insert(){

var item = document.getElementById("todoTextBox");
item.addEventListener("keydown" , function(event){

	if(event.keyCode === 13){
	//alert("enter is pressed");
	     console.log('textbox input taken');
		if (item.value.length < 1 || item.value == " ")
        {
          alert("enter proper input");
        }else
		insertToDoList(event);
	}
	
});

}
//code to add new item
function insertToDoList(event)
		{		
		var item1=document.getElementById("todoTextBox");
		var item2=item1.value;
		item1.value=null;
		//creating new li element
		var listItem=document.createElement('LI');
		
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
		
		//checkbocx click event
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
	    };		 
	   //creating linebreak
		var linebreak=document.createElement('BR');
		
		//creating horizontal line
		var horline=document.createElement('HR');
		
		//creating anchor
		var anchor=document.createElement('A');
		anchor.href = "#";
         anchor.innerHTML = "Delete";
		 anchor.style.float= "right";
		 
		 //anchor click event
		anchor.onclick = function deleteitem(){
		console.log('deleting the item');
		Container.removeChild(listItem);    //removing li element
		};
		
		//Adding li to ul
		Container.appendChild(listItem);             
		console.log('list appended');
		
		//adding all 5 elements to li 
		listItem.appendChild(checkbox);
		console.log('checkbox appended');
		listItem.appendChild(label);
		console.log('label appended');
		listItem.appendChild(anchor);
		console.log('anchor appended');
		listItem.appendChild(linebreak);
		console.log('linebreak appended');
		listItem.appendChild(horline);
		console.log('horizontal line appended');
		
        }
