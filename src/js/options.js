//********************************************************
// Global objects.
//********************************************************

var keyCombination = {};

//********************************************************
// Event handlers.
//********************************************************

// Bind the key combinator to the input field.
$('#bind-hotkey-input').makeKeyCombinator(
{
	onComplete: function(keyComboData)
	{
		if(OS.current == OS.mac)
		{
			keyCombination.mac = keyComboData.comboParts;
		}
		else if(OS.current == OS.windows)
		{
			keyCombination.windows = keyComboData.comboParts;
		}
		else
		{
			keyCombination.unix = keyComboData.comboParts;
		}
	}
});

// Prevent the user from manually entering any text.
$('#bind-hotkey-input').keydown(function(e) 
{
	e.preventDefault();
	
	return false;
});

$("#clear-key-binding-button").click(function() 
{
	// Clear the key bindings.
	$('#bind-hotkey-input').clearKeyCombinator();
});

$("#save-button").click(function() 
{
	// Save the options.
	saveOptions();
});

//********************************************************
// Functions
//********************************************************

/**
 * Convenience method retoring the options.
 */
function restoreOptions()
{
	chrome.storage.sync.get(
	{
		keys: {}
  	}, 
  	function(items) 
  	{
		// Set he global key combination object.
  		keyCombination = items.keys;
		
		// Show the currently saved key combination, based on the current OS.
		$('#bind-hotkey-input').val(getKeyCombinationCharacterString(OS.current, items.keys));
  	});
}

/**
 * Convenience method for saving the key combination to the user's
 * chrome storage. It also displays a toast indicating a saved state.
 */
function saveOptions()
{
	chrome.storage.sync.set(
	{
		keys: keyCombination
	}, 
	function() 
	{
		// Show a toast message.
		toastr.options = {
		"timeOut": "1000",
		"extendedTimeOut": "1000"
		}
		toastr.success("", "Saved");
	});
}

//********************************************************
// Event listeners.
//********************************************************

document.addEventListener('DOMContentLoaded', function()
{
	// Get the current OS.
	OS.detectCurrentOS();
	
	restoreOptions();
});