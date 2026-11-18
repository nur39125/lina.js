// Soal 3: Conditional Statement

let nilai = 85;
let predikat;

// Menentukan predikat berdasarkan nilai
if (nilai < 0 || nilai > 100) {
    predikat = "Nilai di luar rentang 0-100";
} else if (nilai >= 85) {
    predikat = "A";
} else if (nilai >= 75) {
    predikat = "B";
} else if (nilai >= 65) {
    predikat = "C";
} else if (nilai >= 50) {
    predikat = "D";
} else {
    predikat = "E";
}

// Menampilkan hasil
console.log("=== PREDIKAT MAHASISWA ===");
console.log("Nilai     :", nilai);
console.log("Predikat  :", predikat);