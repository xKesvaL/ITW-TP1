let minus = document.getElementById("minus");
let currNb = document.getElementById("currNb");
let plus = document.getElementById("plus");
minus.onclick = () => {
  currNb.value--;
};
plus.onclick = () => {
  currNb.value++;
};
