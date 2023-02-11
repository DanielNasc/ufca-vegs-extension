//const socket = io("http://localhost:3000");

//socket.on("connect", () => {
  //   console.log("connected");
   //  }
//);

const socket = new WebSocket("ws://localhost:3000");

// socket.on("connect_error", (err) => {
//     console.log(`connect_error due to ${err.message}`);
// });

const remaining = document.getElementById('remaining');

try {
fetch('http://localhost:3000/vegs/count')
                .then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .catch(e => console.log(e))
                .then(function(myJson) {
                    console.log(myJson);
                    remaining.innerText = String(myJson.activeVegs).padStart(4, '0');
                });
} catch (e) {
  console.log(e)  
}

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details)
    return {cancel: true}
  },
  {urls: ["<all_urls>"]},
);

