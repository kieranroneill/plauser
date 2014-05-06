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
			code: 'document.getElementById("app-player").contentWindow.document.getElementById("play-pause").click();'
		}
	);
};