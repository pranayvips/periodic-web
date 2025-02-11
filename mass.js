let num = document.getElementsByClassName("up");
let k = 0;
for (k = 1; k <= 118; k++) {
  if (k % 2 == 1) {
    num[k].parentElement.style.backgroundColor = "#868e96";
  } else {
    num[k].parentElement.style.backgroundColor = "#9da7b0";
    console.log(num[k].parentElement);

    console.log("odd");
  }
}
