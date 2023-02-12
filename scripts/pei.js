const socket = io("http://localhost:3000");

const counter = document.getElementById("remaining");

socket.on("decrement", () => {
  counter.innerText = String(Number(counter.innerText) - 1).padStart(4, "0");
});

socket.on("increment", () => {
  counter.innerText = String(Number(counter.innerText) + 1).padStart(4, "0");
});

const remaining = document.getElementById("remaining");

try {
  fetch("http://localhost:3000/vegs/count")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .catch((e) => console.log(e))
    .then(function (myJson) {
      console.log(myJson);
      remaining.innerText = String(myJson.activeVegs).padStart(4, "0");
    });
} catch (e) {
  console.log(e);
}
