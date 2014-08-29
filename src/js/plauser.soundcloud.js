function SoundCloudPlauser() 
{
	Plauser.call(this);
};

SoundCloudPlauser.prototype = new Plauser();
SoundCloudPlauser.prototype.constructor = SoundCloudPlauser;

// Override methods.
SoundCloudPlauser.prototype.playPause = function(tabId)
{
	chrome.tabs.executeScript
	(
		tabId, 
		{
			file:
			'js/content-scripts/content-script.soundcloud.js'
		}
	);
};