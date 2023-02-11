document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
  console.log(event)
});

const pei = io("http://localhost:3000")

window.fetch = new Proxy(window.fetch, {
  apply(fetch, that, args) {
    console.log(args)

    return fetch.apply(that, args)
  }
})
