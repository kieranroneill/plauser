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
			code: 'document.querySelector(\'[data-id="play-pause"]\').click();'
		}
	);
};