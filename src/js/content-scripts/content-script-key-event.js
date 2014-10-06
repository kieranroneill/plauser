// Listen for a keypress matuching the keys in the chrome.storage.
document.documentElement.addEventListener("keyup", function(e) 
{
	chrome.storage.sync.get(
	{
		modifierKey: null,
    	keyCode: null
  	}, 
  	function(keys) 
  	{
  		// If the key combination matches the key combination stored in the
  		// options then send a message to the main JavaScript file.
  		if(e.keyCode == keyCode && (e.ctrlKey == modifierKey || e.altKey == modifierKey || e.shiftKey == modifierKey))
  		{
  			chrome.runtime.sendMessage({});
  		}
  	});
});