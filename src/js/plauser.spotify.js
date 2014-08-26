function SpotifyPlauser() 
{
	Plauser.call(this);
};

SpotifyPlauser.prototype = new Plauser();
SpotifyPlauser.prototype.constructor = SpotifyPlauser;

// Override methods.
SpotifyPlauser.prototype.playPause = function(tabId)
{
	chrome.tabs.executeScript
	(
		tabId, 
		{
			file:
			'js/content-scripts/content-script.spotify.js'
		}
	);
};