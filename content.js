chrome.runtime.onMessage.addListener(request=> {
  if (request.message === "Extension tab") {
    document.execCommand("paste");
    document.querySelector('[aria-label="Отправить"]').click()
  }
});

