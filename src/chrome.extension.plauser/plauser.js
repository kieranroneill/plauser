var Plauser = {
	tabId: null,

	getTabId: function(tabs) {
		var id = null;
		
		for(var i = 0; i < tabs.length; i++)
		{
			if(tabs[i].url.match(/https\:\/\/play\.google\.com\/music\/listen/i))
			{
				id = tabs[i].id;
				
				break;
			}
		}
		
		return id;
	},
	
	playPause: function (tabId) 
	{
	
		chrome.tabs.executeScript(tabId, {code:"location.assign('javascript:SJBpost(\"playPause\");void 0');"});
	}
}

/**
* When the user clicks on the browser icon.
*/
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({}, function(tabs) {
	
		Plauser.tabId = Plauser.getTabId(tabs);
		
		if(Plauser.tabId != null)
		{
			Plauser.playPause(Plauser.tabId);
		}
	});
});