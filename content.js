chrome.runtime.onMessage.addListener(request=> {
  if (request.message === "Extension tab") {
    document.execCommand("paste");
  }
});
