;(function(){
//adding new todo item
window.insertToDoList=
function (item2){
	
	var item1=document.getElementById("todoTextBox");
	
	item1.value=null;
	
	var ul=document.getElementById("itemContainer");
	var div=document.createElement('DIV');
	div.id= item2+"div";
	var divid=div.id;
	var count = ul.childNodes.length;
	
	var checkBoxid="checkbox"+count;
	var stat = "unchecked";
	var toDOItems=template(divid,item2);
	
	div.innerHTML=toDOItems.join('');
	ul.appendChild(div);
	var insertedItems = {id : checkBoxid, name : item2, state : stat};
	
     store(insertedItems);	
}
})();