function GoogleMusicPlauser() 
{
	Plauser.call(this);
};

GoogleMusicPlauser.prototype = new Plauser();
GoogleMusicPlauser.prototype.constructor = GoogleMusicPlauser;

// Override methods.
GoogleMusicPlauser.prototype.playPause = function(tabId)
{
	chrome.tabs.executeScript
	(
		tabId, 
		{
			file:
			'js/content-scripts/content-script.google-music.js'
		}
	);
};