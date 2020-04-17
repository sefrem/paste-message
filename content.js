chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "Extension tab") {
    observer.observe(document, config);
    navigator.clipboard.readText().then(() => {
      document.execCommand("paste");
    });
  }
});

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (
      mutation.addedNodes.length &&
      mutation.addedNodes[0].ariaLabel === "Отправить"
    ) {
      mutation.addedNodes[0].click();
      observer.disconnect();
    }
  }
});

const config = {
  childList: true,
  subtree: true,
};
