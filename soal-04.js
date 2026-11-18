// Soal 4: Perulangan (Looping)

let jumlahGenap = 0;

console.log("=== ANGKA GENAP ===");

// Menampilkan angka genap 1 sampai 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        jumlahGenap += i;
    }
}

console.log("=== ANGKA GANJIL ===");

// Menampilkan angka ganjil 1 sampai 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Menampilkan jumlah seluruh angka genap
console.log("Jumlah seluruh angka genap:", jumlahGenap);