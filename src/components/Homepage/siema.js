
const mySiema = new Siema({
    perPage: {
      1024: 4,
      768: 3,
      598: 2,
      1: 1.25,
    },
  });
  document
    .querySelector(".prev")
    .addEventListener("click", () => mySiema.prev());
  document
    .querySelector(".next")
    .addEventListener("click", () => mySiema.next());

  const mySiema2 = new Siema({
    selector: ".siema2",
    perPage: {
      1024: 4,
      768: 3,
      598: 2,
      1: 1.25,
    },
  });
  document
    .querySelector(".prev2")
    .addEventListener("click", () => mySiema2.prev());
  document
    .querySelector(".next2")
    .addEventListener("click", () => mySiema2.next());