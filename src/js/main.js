/**
 * An object literal that provides the regex matches for each url.
 */
var PlauserUrl = {
	googleMusic: /https\:\/\/play\.google\.com\/music\/listen/i,
	spotify: /https\:\/\/play\.spotify\.com/i,
	youTube: /https\:\/\/www\.youtube\.com\/watch/i,
	grooveshark: /http\:\/\/grooveshark\.com/i
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
			}
			else if(tabs[i].url.match(PlauserUrl.spotify))
			{
				plauser = new SpotifyPlauser();
			}
			else if(tabs[i].url.match(PlauserUrl.youTube))
			{
				plauser = new YouTubePlauser();
			}
			else if(tabs[i].url.match(PlauserUrl.grooveshark))
			{
				plauser = new GroovesharkPlauser();
			}
			
			if(plauser != null)
			{
				plauser.playPause(tabId);
			}
		}
	});
});