var counters = document.querySelectorAll(".counter");

counters.forEach((counter, index, array) => {
  counter.innerText = "0";

  function updateCounter() {
    const target = +counter.getAttribute("data-target");
    const zw = +counter.innerText;
    console.log(zw);
    const increment = target / 200;

    if (zw < target) {
      counter.innerText = `${Math.ceil(zw + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
});
