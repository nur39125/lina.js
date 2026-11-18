// Soal 2: Operator Aritmatika

let hargaBarang = 25000;
let jumlahBarang = 4;
let diskon = 10;

// Menghitung total harga sebelum diskon
let totalHarga = hargaBarang * jumlahBarang;

// Menghitung besaran diskon
let besarDiskon = totalHarga * diskon / 100;

// Menghitung total pembayaran
let totalBayar = totalHarga - besarDiskon;

// Menampilkan hasil
console.log("=== TOTAL BELANJA ===");
console.log("Harga Barang       : Rp" + hargaBarang);
console.log("Jumlah Barang      :", jumlahBarang);
console.log("Total Sebelum Diskon: Rp" + totalHarga);
console.log("Besaran Diskon     : Rp" + besarDiskon);
console.log("Total Pembayaran   : Rp" + totalBayar);