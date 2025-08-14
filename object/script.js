let orang = {}

// Ubah property
orang["Nama"] = "Gojo satoru";
orang["Umur"] = 18;
orang["Alamat"] = "Jl Gancib jaya";

console.log(orang)

let streamer = {
  subs : 77,
  pendapatan : 0,
  branding : false,
  "Jumlah penonton": 1000
}
console.table(streamer)
// Menghapus property di object
  const hapus = delete streamer.branding
// console.log(hapus)
// Mengakses Property object
  console.log(`Jumlah penonton :${streamer["Jumlah penonton"]}`)
  console.log(`Berapa Jumlah pendapatan : ${streamer.pendapatan}`)