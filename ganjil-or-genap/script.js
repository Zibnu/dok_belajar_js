const wadah = document.getElementById('container')
const input = document.getElementById('input')
const tombol = document.getElementById('tombol')
const output = document.getElementById('hasil')

wadah.addEventListener("submit", function(){
  console.log("test")
})

function ganjilGenap(number){
  if( number % 2 === 0){
    return `Angka ${number} adalah genap`
  }else {
    return `Angka ${number} adalah ganjil`
  }
}
console.log(ganjilGenap(8))