function GroovesharkPlauser() 
{
	Plauser.call(this);
};

GroovesharkPlauser.prototype = new Plauser();
GroovesharkPlauser.prototype.constructor = GroovesharkPlauser;

// Override methods.
GroovesharkPlauser.prototype.playPause = function(tabId)
{
	chrome.tabs.executeScript
	(
		tabId, 
		{
			file:
			'js/content-scripts/content-script.grooveshark.js'
		}
	);
};