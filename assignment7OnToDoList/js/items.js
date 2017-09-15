var itemsJs= (function(){
//Public method for adding new todo item

function insertToDoList(item2){
	
	var item1=document.getElementById("todoTextBox");
	
	item1.value=null;
	
	var ul=document.getElementById("itemContainer");
	var div=document.createElement('DIV');
	div.id= item2+"div";
	var divid=div.id;
	var count = ul.childNodes.length;
	
	var checkBoxid="checkbox"+count;
	var stat = "unchecked";
	var toDOItems=itemJs.method2(divid,item2);
	
	div.innerHTML=toDOItems.join('');
	ul.appendChild(div);
	var insertedItems = {id : checkBoxid, name : item2, state : stat};
	
     itemJs.method4(insertedItems);	
}
//exposing the public method
return{
	method1:insertToDoList
};

})();

