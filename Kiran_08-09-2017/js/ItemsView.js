window.Todo = window.Todo || {};
Todo.ItemsView = (function(){
	return{
		init:function(){
			$item1=document.querySelector("#todoTextBox");
			$ul=document.querySelector("#itemContainer");
			Todo.ItemView.init();																	// init (ItemsView-->ItemView)
		},
		display:function(items){
			$item1.value = null;
			$div = document.createElement('DIV');
			$div.id = items+"div";
			var divid = $div.id;
			var stat = "unchecked";
			$div.innerHTML = Todo.ItemView.display(items,divid);
			$ul.appendChild($div);
			console.log("new TODO item added");
			var insertedItems = {id : divid, name : items, state : stat};
			Todo.Store.save(insertedItems);															// save (ItemsView-->Store)
		},
		remove: function(outerDivId) {
			Todo.ItemView.remove(outerDivId);														//remove (ItemsView-->ItemView)
		},
		assignListeners: function(){
			console.log("reached delegation");
			var id = event.target.id;
			item = event.target;
			console.log(item);
			if (item.classList.contains("checkButton")){
				var DivId = event.target.getAttribute("divid");
				Todo.ItemView.checkBoxEffect(id,DivId);
			}
			else if(item.classList.contains("deletestyle")){
				var outerDivId = event.target.getAttribute("divid");
				console.log(outerDivId);
				Todo.ItemsView.remove(outerDivId);													//remove (ItemsView-->ItemView)
				Todo.Store.remove(outerDivId);														//delete (ItemsView-->Store)
			}
		},
		clearScreen:function(){
			Todo.ItemView.remove($clrbutton.id);
		}
	}
})();