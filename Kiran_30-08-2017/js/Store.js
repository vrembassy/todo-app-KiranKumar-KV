window.Todo=window.Todo || {}
Todo.Store=(function(){
	return{
		
		save: function(insertedItems){
			
					console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
					idOfTheItem = insertedItems.id;
					toDoItems[idOfTheItem] = insertedItems;
					console.log("Stored items summary :");
					console.log(toDoItems);
		}
	}
})();