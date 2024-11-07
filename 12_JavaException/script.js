// Fungsi untuk membagi dua angka dengan penanganan error
function divideNumbers(a, b) {
  try {
      // Cek apakah input adalah angka
      if (isNaN(a) || isNaN(b)) {
          throw new Error("Input harus berupa angka.");
      }
      // Ubah input ke tipe angka
      a = Number(a);
      b = Number(b);

      // Cek apakah pembagi adalah nol
      if (b === 0) {
          throw new Error("Tidak dapat membagi dengan nol.");
      }
      // Jika tidak ada error, lakukan pembagian
      return a / b;
  } catch (error) {
      // Tampilkan pesan kesalahan jika ada error
      console.error("Kesalahan:", error.message);
      document.getElementById("result").textContent = "Kesalahan: " + error.message;
  }
}

// Fungsi untuk menangani input pengguna
function handleDivision() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = divideNumbers(num1, num2);
  
  if (result !== undefined) {
      document.getElementById("result").textContent = "Hasil: " + result;
  }
}

// Fungsi untuk menampilkan waktu yang diperbarui setiap detik
function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}

// Perbarui waktu setiap detik
setInterval(setTime, 1000);

console.log("Program Finish");
