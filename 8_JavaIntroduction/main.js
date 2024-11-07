// Fungsi yang akan dijalankan ketika tombol diklik
function tampilkanPesan() {
    alert("Selamat datang di eksperimen interaktif JavaScript!");
  
    // Mengambil masukan pengguna dan mengonfirmasi
    let lanjutkan = confirm("Ingin lanjut belajar?");
    let namaPengguna = prompt("Siapa nama kamu?");
    
    if (lanjutkan && namaPengguna) {
      console.log(`Halo, ${namaPengguna}! Mari mulai eksplorasi.`);
      document.getElementById("hasil").innerHTML = `<p>Halo, ${namaPengguna}! Selamat belajar!</p>`;
    } else {
      document.getElementById("hasil").innerHTML = "<p>Terima kasih sudah mampir!</p>";
      return;
    }
  
    // Contoh deklarasi variabel
    var a = 7;
    let b = 14;
    const c = 21;
  
    // Menampilkan variabel di console
    console.log("Nilai awal a (var):", a);
    console.log("Nilai awal b (let):", b);
    console.log("Nilai awal c (const):", c);
  
    // Mengubah nilai variabel a dan b, tapi tidak untuk konstanta c
    a = 10;
    b = 18;
  
    // Menampilkan hasil di elemen HTML
    document.getElementById("hasil").innerHTML += `
      <p>Nilai variabel setelah perubahan:</p>
      <p>a = ${a}</p>
      <p>b = ${b}</p>
      <p>c = ${c}</p>
    `;
    
    // Menampilkan hasil perubahan di console juga
    console.log("Nilai setelah perubahan:");
    console.log("a (var):", a);
    console.log("b (let):", b);
    console.log("c (const):", c);
  }
  