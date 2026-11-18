// Soal 10: Mini Project Sistem Kasir Sederhana

// Data produk menggunakan Array of Objects
const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Data pembelian
const keranjang = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

// Variabel untuk menghitung total belanja
let subtotal = 0;

// Menyimpan detail transaksi
let daftarBelanja = [];

// Memproses transaksi
for (let i = 0; i < keranjang.length; i++) {

    let barang = produk.find(
        p => p.nama === keranjang[i].nama
    );

    if (barang !== undefined && keranjang[i].jumlah > 0) {

        let totalProduk = barang.harga * keranjang[i].jumlah;

        subtotal += totalProduk;

        daftarBelanja.push({
            nama: barang.nama,
            jumlah: keranjang[i].jumlah,
            subtotal: totalProduk
        });

    } else {
        console.log("Produk tidak ditemukan atau jumlah tidak valid!");
    }
}

// Menghitung diskon
let diskon = 0;

if (subtotal > 500000) {
    diskon = subtotal * 10 / 100;
}

// Menghitung total pembayaran
let totalPembayaran = subtotal - diskon;

// Fungsi format rupiah
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Menampilkan struk pembelian
console.log("==================================");
console.log("       STRUK PEMBELIAN");
console.log("==================================");

for (let i = 0; i < daftarBelanja.length; i++) {

    let barang = daftarBelanja[i];

    console.log(
        barang.nama.padEnd(12) +
        " x" + barang.jumlah +
        "   " + formatRupiah(barang.subtotal)
    );
}

console.log("----------------------------------");
console.log("Subtotal       :", formatRupiah(subtotal));
console.log("Diskon         :", formatRupiah(diskon));
console.log("Total          :", formatRupiah(totalPembayaran));
console.log("==================================");
console.log("       Terima kasih!");
console.log("==================================");