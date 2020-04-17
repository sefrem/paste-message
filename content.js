chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "Extension tab") {
    navigator.clipboard.readText().then(() => {
      document.execCommand("paste");
      setTimeout(function () {
        document.querySelector('[aria-label="Отправить"]').click();
      }, 0);
    });
  }
});
