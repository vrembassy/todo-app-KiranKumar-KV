window.Todo = window.Todo || {};
Todo.ItemView = (function(){	
	return{
		init : function(){
			$ul = document.querySelector("#itemContainer");
			$newInputItem = document.querySelector("#todoTextBox");
			$clrscr = document.querySelector("#clrButton");
		},
		display : function(items,divid){
			var count =$ul.childNodes.length;
			var buttonid="button"+items;
			var elementArray = [];
			var index =0;
			elementArray[index++] = "<li class='horline' id="+items+"li>";
			elementArray[index++] = "<span>"+items+"</span>";
			elementArray[index++] = "<input type = 'button' class='checkButton' value='&#10004' id = '"+buttonid+"' divid='"+divid+"'/>";
			elementArray[index++] = "<input type='button' divid="+divid+" id="+items+"delete"+" class='deletestyle' value='&#10008'>" ;
			elementArray[index++] = "</li>";
			elementArray = elementArray.join("");
			return elementArray;
		},
		checkBoxEffect : function(id,divId){
			var checkBox = document.getElementById(id);
			var name = checkBox.previousSibling;
			name.classList.toggle("addlabel");
			if(name.classList.contains("addlabel")){
				toDoItems[divId].state = "checked";
				console.log(toDoItems);
			}
			else{
				toDoItems[divId].state = "unchecked";
				console.log(toDoItems);
			}
		},
		remove : function(divid){
			if(divid == "clrButton"){
				$newInputItem.removeEventListener("keydown",Todo.AppView.add);			
				$clrscr.removeEventListener("click",Todo.AppView.clearScreen);
				document.body.innerHTML = null;
				console.log("Clear screen, inputbox Event listener removed and screen cleared");
			}
			else{
				var decision = confirm("Do you want to delete?");
				if(decision == true){
					var outerDivId = "#"+divid;
					console.log(outerDivId);
					var outerDiv = document.querySelector(outerDivId);
					//outerDiv.outerHTML = ""; this also works
					outerDiv.remove();
					console.log("todo item deleted successfully");
				}
				else {
					alert("You chose not to delete that item");
				}
				}
			}
	}
})();