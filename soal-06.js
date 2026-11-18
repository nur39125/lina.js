// Soal 6: Array

const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan seluruh nilai
console.log("=== DATA NILAI MAHASISWA ===");
console.log("Seluruh Nilai:", nilai);

// Mencari nilai tertinggi dan terendah
let nilaiTertinggi = Math.max(...nilai);
let nilaiTerendah = Math.min(...nilai);

// Menghitung rata-rata
let total = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}

let rataRata = total / nilai.length;

// Menghitung jumlah mahasiswa yang lulus
let jumlahLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
        jumlahLulus++;
    }
}

// Menampilkan hasil
console.log("Nilai Tertinggi :", nilaiTertinggi);
console.log("Nilai Terendah  :", nilaiTerendah);
console.log("Rata-rata       :", rataRata);
console.log("Jumlah Lulus    :", jumlahLulus);