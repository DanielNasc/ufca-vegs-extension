const socket = io("http://localhost:3000");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);

  sendResponse({ message: "Hello from content script" });
});

// intercept all requests
const button = document.getElementById("pei");
const inpt = document.getElementById("name");

document.addEventListener("keydown", (e) => {
  if (e.key === "F9") {
    socket.emit("one passed", Number(inpt.value));
  }
});
