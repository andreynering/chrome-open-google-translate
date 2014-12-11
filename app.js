var code = 'var s = getSelection().toString();' +
  "open('https://translate.google.com' + (s ? '?q=' + s : ''))";
chrome.tabs.executeScript({code: code});
