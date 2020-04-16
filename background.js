chrome.runtime.onMessage.addListener(request => {
  const urls = request.url.split("\n").filter(item => item.length !== 0);
  createTabs(urls);
});

const createTabs = urls => {
  createTab(urls[0]);
  if (urls.length > 1) {
    let i = 1;
    let timerId = setInterval(() => {
      createTab(urls[i]);
      i++;
      if (i === urls.length) clearInterval(timerId);
    }, 10000);
  }
};

const createTab = url => {
  chrome.tabs.create({ url });
  sendMessageToNewTab();
};

const sendMessageToNewTab = () => {
  chrome.tabs.onUpdated.addListener(sendMessage);
};

const sendMessage = (tabId, changeInfo) => {
  if (changeInfo.status == "complete") {
    chrome.tabs.query({ active: true, currentWindow: true }, () => {
      chrome.tabs.sendMessage(tabId, { message: "Extension tab" });
      chrome.tabs.onUpdated.removeListener(sendMessage);
    });
  }
};
