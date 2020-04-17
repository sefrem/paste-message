const url = document.getElementById("url");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  if (url.value && message.value) {
    navigator.clipboard.writeText(message.value).then(() => {
      chrome.runtime.sendMessage({ url: url.value });
    });
  }
});
