(function(e){
	var tabGroup = Ti.UI.createTabGroup(),
	win1 = require('ui/Win1'),
	win2 = require('ui/Win2'),
	tab1 = Ti.UI.createTab({
		title: 'Registros',
		windows: new win1()
	}),
	tab2 = Ti.UI.createTab({
		title: 'Tabla',
		windows: new win2()
	});
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	
	tabGroup.open();
})();