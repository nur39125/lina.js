// Soal 9: Array of Objects

const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Menampilkan mahasiswa yang lulus
console.log("=== MAHASISWA YANG LULUS ===");

let mahasiswaLulus = mahasiswa.filter(m => m.nilai >= 75);

mahasiswaLulus.forEach(m => {
    console.log(m.nama + " - Nilai: " + m.nilai);
});

// Menampilkan mahasiswa yang tidak lulus
console.log("=== MAHASISWA TIDAK LULUS ===");

let mahasiswaTidakLulus = mahasiswa.filter(m => m.nilai < 75);

mahasiswaTidakLulus.forEach(m => {
    console.log(m.nama + " - Nilai: " + m.nilai);
});

// Menghitung jumlah mahasiswa yang lulus
console.log("Jumlah Mahasiswa Lulus:", mahasiswaLulus.length);

// Mengurutkan nilai dari tertinggi
let urutanNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("=== URUTAN NILAI TERTINGGI ===");

urutanNilai.forEach(m => {
    console.log(m.nama + " - Nilai: " + m.nilai);
});