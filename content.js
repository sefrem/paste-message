chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "Extension tab") {
    navigator.clipboard
      .readText()
      .then(() => {
        document.execCommand("paste");
      })
      .then(() => document.querySelector('[aria-label="Отправить"]').click());
  }
});
