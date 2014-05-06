/**
 * An object literal that provides the regex matches for each url.
 */
var PlauserUrl = {
	googleMusic: /https\:\/\/play\.google\.com\/music\/listen/i,
	spotify: /https\:\/\/play\.spotify\.com/i
};

/**
* Listener for when the user clicks the plauser browser button.
*/
chrome.browserAction.onClicked.addListener(function(tab) 
{
	chrome.tabs.query({}, function(tabs) 
	{
		for(var i = 0; i < tabs.length; i++)
		{
			var tabId = tabs[i].id;
			var plauser = null;
			
			if(tabs[i].url.match(PlauserUrl.googleMusic))
			{
				plauser = new GoogleMusicPlauser();
				
				plauser.playPause(tabId);
			}
			else if(PlauserUrl.spotify)
			{
				plauser = new SpotifyPlauser();
				
				plauser.playPause(tabId);
			}
		}
	});
});