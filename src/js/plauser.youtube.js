function YouTubePlauser() 
{
	Plauser.call(this);
};

YouTubePlauser.prototype = new Plauser();
YouTubePlauser.prototype.constructor = YouTubePlauser;

// Override methods.
YouTubePlauser.prototype.playPause = function(tabId)
{
	chrome.tabs.executeScript
	(
		tabId, 
		{
			file:
			'js/content-scripts/content-script.youtube.js'
		}
	);
};