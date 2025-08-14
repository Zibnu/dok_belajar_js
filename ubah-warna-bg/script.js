const tombol = document.getElementById('tombol');

function randomColor(){
  let colors = ["red", "aqua", "blue", "maroon", "yellow", "orange"];
  let indexAcak = Math.floor(Math.random() * colors.length);
  console.log(indexAcak)
  return colors[indexAcak];
}
tombol.addEventListener("click", function ubahwarna(){
  document.body.style.backgroundColor = randomColor()
})
