	
	// creating object to store the new toDo items
	var toDoElements = {};
	
document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM loaded");
var newInputItem = document.getElementById("newToDoItem");
newInputItem.addEventListener("keydown",check);
});
//checks for enter key
function check(event){
	console.log("Keydown event listened");
		if(event.keyCode === 13){
			console.log("Enter key pressed, going to add new items");
			TimeForNewToDoItem();
		}
}


//function to remove li elements
function removeElements(id){
	var deleteButton = document.getElementById(id);
	var parentLiElement = deleteButton.parentNode;
	var checkBox = deleteButton.previousSibling.previousSibling;
		if(deleteButton.removeEventListener && checkBox.removeEventListener){
			deleteButton.removeEventListener("onclick",removeElements);
			checkBox.removeEventListener("onclick",checkBoxEffect);
			console.log("Item deleted, Checkbox and deleteButton event listeners have been removed");
		}
	parentLiElement.innerHTML = "";
	parentLiElement.classList.remove("customHorizontalRule");
}


//function to add effects to checkbox name and updating status of the checkbox
function checkBoxEffect(id){
	var checkBox = document.getElementById(id);
	var name = checkBox.nextSibling;

		if (checkBox.checked){
			name.classList.add("strikeItOut");
			toDoElements[id].state = "checked";
		}
		
		else {
		name.classList.remove("strikeItOut");
		toDoElements[id].state = "unchecked";
	}
}


//to add new todo item
function TimeForNewToDoItem(){
	
	var newInputItem = document.getElementById("newToDoItem");
	var newItem = newInputItem.value;
	newInputItem.value = null;
	
	var count = 0;
	var newItemToBeAdded = [];
	
	var ulContainer = document.getElementById("itemContainerId");
	
	var div = document.createElement("div");
	
	var childCount = ulContainer.childNodes.length;
	console.log("totally "+childCount+" child nodes are currently present inside parent ul element");
	
	var checkBoxid = "checkBox"+childCount;
	
	var stat = "unchecked";
	
	newItemToBeAdded[count++] = "<li class = 'customHorizontalRule'>";
	newItemToBeAdded[count++] = "<input type = 'checkbox' id = '"+checkBoxid+"' onclick = 'checkBoxEffect(id)'/>";
	newItemToBeAdded[count++] = "<span>"+newItem+"</span>";
	newItemToBeAdded[count++] = "<a href = '#' class = 'moveRightSide' id = 'deletebutton"+childCount+"' onclick = 'removeElements(id)'>Delete</a>";
	
	newItemToBeAdded = newItemToBeAdded.join("");
	div.innerHTML = newItemToBeAdded;
	ulContainer.appendChild(div);
	console.log("new TODO item added");
	
	var insertedItems = {id : checkBoxid, name : newItem, state : stat};
	
	storeElements(insertedItems);
	
}

//clear screen function
function clearScreen(){
	document.body.innerHTML = null;
}

// stores all inserted elements
function storeElements(insertedItems){
	console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
	
	// storing the todo items using objects inside an object
	
	//getting the id of the inserted item to use as index
	idOfTheItem = insertedItems.id;
	//storing the javascript object inside another object
	toDoElements[idOfTheItem] = insertedItems;
	console.log("Stored items summary :");
	console.log(toDoElements);
}