const wadah = document.getElementById('container');
const input = document.getElementById('input');
const hasil = document.getElementById('output');

wadah.addEventListener("submit", function(event){
  event.preventDefault();

  const angka = input.valueAsNumber;
  input.value = "";

  hasil.style.color = "red"
  hasil.style.fontWeight = "bold"
  hasil.style.textDecoration = "underline"
  hasil.style.fontStyle = "italic"

  if(angka % 2 === 0){
    console.log("Ini adalah genap");
    hasil.innerHTML = "Ini adalah genap"
  } else{
    console.log("Ini adalah ganjil")
    hasil.innerHTML = "Ini adalah ganjil"
  }
})
// hasil.textContent = `<i><u><b>Nilai Genap</b></u></i>`;