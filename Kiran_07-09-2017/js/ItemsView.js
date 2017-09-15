window.Todo=window.Todo || {};


Todo.ItemsView=(function(){
return{
	init: function() {
				//cache DOM node $ul
				$ul = document.getElementById("itemContainer");
					
			},
	display: function(item2) {
				var item1=document.getElementById("todoTextBox");
	
				item1.value=null;
	
				var ul=document.getElementById("itemContainer");
				var div=document.createElement('DIV');
				div.id= item2+"div";
				 
				var divid=div.id;
				var count = ul.childNodes.length;
				var buttonid="button"+item2;
				var stat = "unchecked";
				div.innerHTML=Todo.ItemView.init(item2,buttonid,divid);
				ul.appendChild(div);
				console.log("new TODO item added");
				var insertedItems = {id : buttonid, name : item2, state : stat};
				Todo.Store.save(insertedItems);	
			},
	add: function(item){
				Todo.ItemsView.display(item);
			},
	remove: function(outerDivId) {
				Todo.ItemView.remove(outerDivId);
			},
	assignListeners: function(){
				console.log("reached delegation");
				var id = event.target.id;
				item = event.target;
				console.log(item);
				if (item.classList.contains("checkButton")){
					Todo.ItemView.checkBoxEffect(id);
				}
				else if(item.classList.contains("deletestyle")){
					var outerDivId = event.target.getAttribute("divid");
					console.log(outerDivId);
					Todo.ItemsView.remove(outerDivId);
				}
			}
	}

})();
