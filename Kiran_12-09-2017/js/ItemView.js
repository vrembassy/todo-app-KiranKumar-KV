window.Todo = window.Todo || {};        
window.Todo.ItemView=
(function(window){
                // private methods
              
                //ItemView constructor
                function ItemView(constructorParams) {
                               // this.data1 = constructorParams.data1;
                                //this.data2 = constructorParams.data2;
								alert("hi");
                }
			   
 
                // ItemView public methods
                ItemView.prototype.init = function(param1, param2) {
                                privatefunction();
                               
                                // accessing the member variables
                                this.data1
                                this.data2
                               
                                //invoke the public method within another public method
                                this.display();    
                }
 
                ItemView.prototype.display = function (items,divid) {

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
				}
                ItemView.prototype.remove = function (divid) {
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
					
				
 
                     
})(window);
	