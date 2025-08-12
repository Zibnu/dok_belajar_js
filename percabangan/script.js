const nama = "mai";
if( nama.length >= 4){
  console.log("Nama yang panjang");
} else if(nama.length >= 8){
  console.log("Ini mah nama lengkap")
}
else {
  console.log("nama yang singkat")
}
console.log(nama.length)

let nilai = "A";

switch(nilai){
  case "A" :
    console.log("Nice ");
    break;
  case "B" :
    console.log("Bagus");
    break;
  case "C" :
    console.log("Cukup Ok");
    break;
  default :
  console.log("Pindah jurusan aja")
}

let umur = 17;
if(umur <= 5){
  console.log("balita")
}else if(umur <= 12){
  console.log("Anak Anak")
}else if(umur <= 18){
  console.log("Remaja")
}else {
  console.log("Dewasa")
}