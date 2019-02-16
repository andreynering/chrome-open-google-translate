var code = 'var s = getSelection().toString();' +
  "open('https://translate.google.as' + (s ? '?q=' + s : ''))";
chrome.tabs.executeScript({code: code});
