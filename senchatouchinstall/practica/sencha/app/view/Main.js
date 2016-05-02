Ext.define('prueba1.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
    	items: [
    	{
    		docked:'top',
    		xtype:'titlebar',
    		title:'HOLA MUNDO !',
    		style:'background:#ff0000'
    	},
    	{
    		html:"mi primera aplicacion <b> Sencha touch <b> ",
    		styleHtmlContent:true
    	}
    	]
    }
});