/**
 * An object literal that provides the regex matches for each url.
 */
var PlauserUrl = {
	googleMusic: /(http|https)\:\/\/play\.google\.com\/music\/listen/i,
	spotify: /(http|https)\:\/\/play\.spotify\.com/i,
	youTube: /(http|https)\:\/\/www\.youtube\.com\/watch/i,
	grooveshark: /(http|https)\:\/\/grooveshark\.com/i,
	soundcloud: /(http|https)\:\/\/soundcloud\.com/i
};

/**
* This is called when a key combination is detected matching the 
* key combination stored 
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) 
{
	// Get the current OS.
	OS.detectCurrentOS();

	if(request.name == "plauseWithKeys")
	{
		chrome.storage.sync.get(
		{
			keys: {}
		},
		function (items)
		{
			var storedKeyCodeArray = getKeyCodeCombinationArray(OS.current, items.keys);
			
			// If the stored key combination matches the key combination
			// pressed, then plause.
			if(storedKeyCodeArray.equals(request.keys))
			{
				plause();
			}
		});
	}
});

/**
* Listener for when the user clicks the plauser browser button.
*/
chrome.browserAction.onClicked.addListener(function(tab) 
{
	// Determine whether to play/pause.
	plause();
});

/**
* Convenience method for creating a plauser object based on the 
* url of all the tabs. If the url constructs a matching Plauser object,
* the Plauser object runs it's play/pause function.
*/
function plause()
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
			else if(tabs[i].url.match(PlauserUrl.soundcloud))
			{
				plauser = new SoundCloudPlauser();
			}
			
			if(plauser != null)
			{
				plauser.playPause(tabId);
			}
		}
	});
}