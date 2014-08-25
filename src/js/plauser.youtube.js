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
			code: 
			'var player=document.getElementById("movie_player");if(player.getPlayerState() == 1){ player.pauseVideo(); }else{ player.playVideo(); }'
		}
	);
};