window.Todo=window.Todo || {};
ItemView = (function(){
return{
	init: function(item2,buttonid,divid){
				//cache DOM nodes 
				//register event handlers
				var toBeAdded = Todo.ItemView.display(item2,buttonid,divid);
				return toBeAdded;
			},
	checkBoxEffect : function(id){
				var checkBox = document.getElementById(id);
				var name = checkBox.previousSibling;
				name.classList.toggle("addlabel");
				if(name.classList.contains("addlabel"))
				{
					toDoItems[id].state = "checked";
					console.log(toDoItems);
				}
				else{
					toDoItems[id].state = "unchecked";
					console.log(toDoItems);
				}
			},
				
	display: function(item2,buttonid,divid){
				//createDOMElement('li');
				//return DOMNode
				var ul=document.getElementById("itemContainer");
				var count = ul.childNodes.length;
				var buttonid="button"+item2;
				var elementArray = [];
				var index =0;
				elementArray[index++] = "<li class='horline' id="+item2+"li>";
				elementArray[index++] = "<span>"+item2+"</span>";
				elementArray[index++] = "<input type = 'button' class='checkButton' value='&#10004' id = '"+buttonid+"'/>";
				elementArray[index++] = "<input type='button' divid="+divid+" id="+item2+"delete"+" class='deletestyle' value='&#10008'>" ;
				elementArray[index++] = "</li>";
				elementArray=elementArray.join("");
				return elementArray;
			},
	remove: function(divid){
				var newInputItem = document.getElementById("todoTextBox");
				var clrscr = document.getElementById("clrButton");
				var UlElement = document.querySelector("#itemContainer");
				if(divid == "clrButton"){
					newInputItem.removeEventListener("keydown",Todo.appView.init);			
					clrscr.removeEventListener("click",Todo.appView.clearScreen);
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
						alert("item deleted successfully");
					}
					else {
						alert("You chose not to delete that item");
					}
				}
			},	
				
	}
})();
window.Todo.ItemView = ItemView;