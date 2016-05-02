function Win1(){
	var win = Ti.UI.createWindow({
		backgroundColor:'White'
	}),
	dataBase = require('ui/DataBase'),
	buttonCreate = Ti.UI.createButton({
		title:'create',
		width:80,
		height:50,
		top:0
	}),
	textField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color:'black',
		width:200,
		top:35
	}),
	buttonInsert = Ti.UI.createButton({
		title:'insert',
		width:80,
		height:50,
		left:'50',
		top:70
	}),
	buttonDelete = Ti.UI.createButton({
		title:'delete',
		width:80,
		height:50,
		right:50,
		top:70
	});
	win.add(buttonCreate);
	win.add(textField);
	win.add(buttonInsert);
	win.add(buttonDelete);
	
	buttonCreate.addEventListener('click',function(e){
		dataBase('create',null);
	});
	
	buttonInsert.addEventListener('click',function(e){
		dataBase('create',textField.value);
	});
	
	buttonDelete.addEventListener('click',function(e){
		dataBase('create',textField.value);
	});
	
	return win;
}

module.exports = Win1;