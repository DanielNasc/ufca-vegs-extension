chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details)
    return {cancel: true}
  },
  {urls: ["<all_urls>"]},
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
    console.log(message)
});
