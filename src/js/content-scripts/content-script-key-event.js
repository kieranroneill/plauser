//********************************************************
// Global objects.
//********************************************************

var keysPressedArray = [];

//********************************************************
// Event listeners.
//********************************************************

document.addEventListener("keydown", function(e) 
{
	// Add key to global array, if not present.
	if (!keysPressedArray.contains(e.keyCode))
	{ 
		keysPressedArray.push(e.keyCode);
	}
});

document.addEventListener("keyup", function(e) 
{
	if(keysPressedArray.length > 0)
	{
		// Send a messsage to the background script.
		chrome.runtime.sendMessage(
		{
			name: "plauseWithKeys",
			keys: keysPressedArray
		});
		
		keysPressedArray = [];
	}
});