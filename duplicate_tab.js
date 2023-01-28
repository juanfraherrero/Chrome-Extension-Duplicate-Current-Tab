chrome.commands.onCommand.addListener(function(command) {
    if (command === "duplicate_tab") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.create({url: tabs[0].url});
        })
    }
})
