// Soal 8: Object

const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

// Menampilkan nama dan harga produk
console.log("=== DATA PRODUK ===");
console.log("Nama Produk :", produk.nama);
console.log("Harga       : Rp" + produk.harga);

// Mengubah stok menjadi 5
produk.stok = 5;

// Menambahkan properti merek
produk.merek = "Lenovo";

// Menampilkan seluruh properti object
console.log("=== DATA PRODUK TERBARU ===");
console.log("Nama     :", produk.nama);
console.log("Harga    : Rp" + produk.harga);
console.log("Stok     :", produk.stok);
console.log("Kategori :", produk.kategori);
console.log("Merek    :", produk.merek);