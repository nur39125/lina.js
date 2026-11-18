// Soal 7: String Manipulation

const nama = "  muhammad rizki  ";

// Menghilangkan spasi awal dan akhir
let namaBersih = nama.trim();

// Mengubah menjadi huruf besar
let hurufBesar = namaBersih.toUpperCase();

// Mengubah menjadi huruf kecil
let hurufKecil = namaBersih.toLowerCase();

// Menghitung jumlah karakter
let jumlahKarakter = namaBersih.length;

// Menampilkan hasil
console.log("=== STRING MANIPULATION ===");
console.log("Nama Asli       :", nama);
console.log("Nama Bersih     :", namaBersih);
console.log("Huruf Besar     :", hurufBesar);
console.log("Huruf Kecil     :", hurufKecil);
console.log("Jumlah Karakter :", jumlahKarakter);