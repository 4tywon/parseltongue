// background script

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	// request = {word, impressions, incorrect}
	if (request.impressions == true) {
	    chrome.storage.sync.set({request.word :
				     {"correct" : 0,
				      "incorrect":0}}
				    , function(){}
				   )
	}
	if (request.incorrect == true) {
	    chrome.storage.sync.get(request.word, functon(wd) {
		var newInc = wd[request.word]["incorrect"] + 1
		var newCor = wd[request.word]["correct"]
		chrome.storage.sync.set({request.word :
					 {"correct" : newCor,
					  "incorrect" : newInc}}, func(){})
	    })
	}
	if (request.correct == true) {
	    chrome.storage.sync.get(request.word, functon(wd) {
		var newInc = wd[request.word]["incorrect"]
		var newCor = wd[request.word]["correct"] + 1
		chrome.storage.sync.set({request.word :
					 {"correct" : newCor,
					  "incorrect" : newInc}}, func(){})
	    })
	}
	sendResponse({"response" : success})
    });

