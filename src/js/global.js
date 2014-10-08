//********************************************************
// Global objects.
//********************************************************

var OS = {
	current: null,
	mac: "mac",
	windows: "windows",
	unix: "unix",
	detectCurrentOS: function()
	{
		this.current = this.unix;
	
		if (navigator.appVersion.indexOf("Win") != -1)
		{
			this.current = this.windows;
		}
	
		if (navigator.appVersion.indexOf("Mac") != -1)
		{
			this.current = this.mac;
		}
	}
};

//********************************************************
// Pototypes.
//********************************************************

Array.prototype.contains = function(element) 
{
  for(var i=0; i < this.length; i++)
  {
	if(this[i] === element)
	{
      return true;
    }
  }
  
  return false;
}

Array.prototype.equals = function(array) 
{
    // If the other array is a false value, return false.
    if (!array)
	{
        return false;
	}

    // Compare lengths - can save a lot of time .
    if (this.length != array.length)
	{
        return false;
	}

    for (var i = 0; i < this.length; i++) 
	{
        // Check if we have nested arrays.
        if (this[i] instanceof Array && array[i] instanceof Array) 
		{
            // Recurse into the nested arrays.
            if (!this[i].equals(array[i]))
			{
                return false;  
			}				
        }           
        else if (this[i] != array[i]) 
		{ 
            return false;   
        }           
    }
	
    return true;
}  

//********************************************************
// Functions.
//********************************************************

function getKeyCodeCombinationArray(currentOS, keys)
{
	var keyMapArray = [];
	var keyCodeArray = [];
	
	if(currentOS == OS.mac)
	{
		keyMapArray = keys.mac;
	}
	else if(currentOS == OS.windows)
	{
		keyMapArray = keys.windows;
	}
	else
	{
		keyMapArray = keys.unix;
	}
	
	// For each key map, get the keyCode.
	for(var i = 0; i < keyMapArray.length; i++)
	{
		keyCodeArray.push(keyMapArray[i].keyCode);
	}
	
	return keyCodeArray;
}

/**
 * Iterates through the keys object and builds a key combination string
 * based on the string versions of the keys.
 *
 * @param currentOS the current OS.
 * @param keys an object containing all the keyChars/keyCode combinations
 * for each OS.
 * @return a string representing all the key combinations as strings, or 
 * an empty string.
 */
function getKeyCombinationCharacterString(currentOS, keys)
{
	var keyMapArray = [];
	var keyCharacterArray = [];
	
	if(currentOS == OS.mac)
	{
		keyMapArray = keys.mac;
	}
	else if(currentOS == OS.windows)
	{
		keyMapArray = keys.windows;
	}
	else
	{
		keyMapArray = keys.unix;
	}
	
	// For each key map, get the character.
	for(var i = 0; i < keyMapArray.length; i++)
	{
		keyCharacterArray.push(keyMapArray[i].keyChar);
	}
	
	return keyCharacterArray.join('+');
}