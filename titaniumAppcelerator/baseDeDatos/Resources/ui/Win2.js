function Win2(){
	var win = Ti.UI.createWindow({
		backgroundColor:'#000'
	}),
	dataBase = require('ui/DataBase'),
	table = Ti.UI.createTableView({
	});
	win.add(table);
}
