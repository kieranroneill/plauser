var keysPressedArray = [];

function insertKeyToArray(key, array)
{
    var alreadyPresent = false;

    if (key === undefined)
	{
		if ($.inArray(key, array) >= 0)
		{ 
			alreadyPresent = true; 
		}
    }

    if (!alreadyPresent)
	{ 
		array.push(key);
	}
  }

document.addEventListener("keydown", function(e) 
{
	insertKeyToArray(e.keyCode, keysPressedArray);
});

document.addEventListener("keyup", function(e) 
{
	if(keysPressedArray.length > 0)
	{
		console.log("keys: " + keysPressedArray);
	
		keysPressedArray = [];
		
		return false;
	}
	
	// chrome.storage.sync.get(
	// {
		// keys: null
  	// }, 
  	// function(keys) 
  	// {
  		// // If the key combination matches the key combination stored in the
  		// // options then send a message to the main JavaScript file.
  		// if(e.keyCode == keyCode && (e.ctrlKey == modifierKey || e.altKey == modifierKey || e.shiftKey == modifierKey))
  		// {
  			// chrome.runtime.sendMessage({});
  		// }
  	// });
});