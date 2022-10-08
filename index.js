const num = document.querySelectorAll(".num");
const screen = document.querySelector(".screen");
const C = document.querySelector(".C");
const DEL = document.querySelector(".DEL");
const equal = document.querySelector(".equal");
const data = screen.value;

num.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    if (screen.value === "MATH ERROR") {
      screen.value = "";
    }
    screen.value += num[i].name;
  })
);

C.addEventListener("click", () => {
  screen.value = "";
});

DEL.addEventListener("click", () => {
  let result = screen.value.slice(0, -1);
  screen.value = "";
  screen.value += result;
});

equal.addEventListener("click", () => {
  if (screen.value.length > 0) {
    try {
      if (eval(screen.value)) {
        screen.value = eval(screen.value);
      }
    } catch {
      screen.value = "MATH ERROR";
    }
  }
});
