// Inisialisasi antrian pembeli
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Tambah pembeli baru yang datang
antrian.push("Nabila");
antrian.push("Maza", "Elsi");

// Pembeli terakhir tidak jadi antri dan pulang ke rumah
antrian.pop();

// Pembeli pertama dan kedua mendapatkan belanjaannya dan keluar antrian
antrian.shift();
antrian.shift();

// Tomi nyerobot antrian
antrian.unshift("Tomi");

// Cek hasil antrian di console
console.log("Hasil akhir antrian:", antrian);

// Tampilkan hasil akhir antrian di halaman
document.getElementById("result").textContent = `Hasil akhir antrian: ${antrian.join(", ")}`;
