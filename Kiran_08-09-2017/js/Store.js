window.Todo = window.Todo || {};
Todo.Store = (function(){
	return{
		init : function(){
			var preloadedItems = ["Eat","sleep"];
			return preloadedItems;															// return back (Store-->AppView)
			console.log("preloaded items are loaded");
		},
		save : function(insertedItems){
			console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
			idOfTheItem = insertedItems.id;
			toDoItems[idOfTheItem] = insertedItems;
			console.log("Stored items summary :");
			console.log(toDoItems);
		},
		remove : function(id){
				delete toDoItems[id];
				console.log(toDoItems);
		}
	}
})();