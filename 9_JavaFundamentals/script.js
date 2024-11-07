// Fungsi yang dipanggil saat tombol diklik
function prosesData() {
  // Mengambil nilai dari input form
  let nama = document.getElementById("nama").value;
  let usia = document.getElementById("usia").value;
  let isActive = document.getElementById("isActive").value === "true"; // Mengambil nilai boolean dari dropdown

  // Menyimpan tipe data
  let tipeNama = typeof nama;  // String
  let tipeUsia = typeof parseInt(usia);  // Number
  let tipeIsActive = typeof isActive;  // Boolean
  let tipeBigInt = typeof BigInt(1234567890123456789012345678901234567890);  // BigInt
  let tipeNull = typeof null;  // Object (termasuk dalam tipe data Object)
  let tipeSymbol = typeof Symbol('id');  // Symbol
  let tipeUndefined; // Undefined
  let objekContoh = { nama: nama, usia: usia };  // Object
  let undefinedVar; // undefined

  // Menampilkan informasi di konsol
  console.log("Nama: " + nama);
  console.log("Usia: " + usia);
  console.log("Apakah aktif? " + isActive);
  console.log("Tipe data Nama: " + tipeNama);
  console.log("Tipe data Usia: " + tipeUsia);
  console.log("Tipe data Apakah aktif?: " + tipeIsActive);
  console.log("Tipe data BigInt: " + tipeBigInt);
  console.log("Tipe data Null: " + tipeNull);
  console.log("Tipe data Symbol: " + tipeSymbol);
  console.log("Tipe data Undefined: " + typeof undefinedVar);
  console.log("Tipe data Object: " + typeof objekContoh);

  // Menampilkan hasil di halaman web
  let hasilHTML = `
    <h3>Hasil Input:</h3>
    <p>Nama: ${nama} (Tipe data: ${tipeNama})</p>
    <p>Usia: ${usia} (Tipe data: ${tipeUsia})</p>
    <p>Apakah aktif? ${isActive} (Tipe data: ${tipeIsActive})</p>
    <p>BigInt: 1234567890123456789012345678901234567890 (Tipe data: ${tipeBigInt})</p>
    <p>Null: null (Tipe data: ${tipeNull})</p>
    <p>Symbol: Symbol(id) (Tipe data: ${tipeSymbol})</p>
    <p>Undefined: ${undefinedVar} (Tipe data: ${typeof undefinedVar})</p>
    <p>Object: { nama: ${nama}, usia: ${usia} } (Tipe data: ${typeof objekContoh})</p>
  `;
  
  document.getElementById("hasil").innerHTML = hasilHTML;

  // Memberikan feedback kepada pengguna dengan alert
  alert(`Terima kasih, ${nama}! Kamu berusia ${usia} tahun.`);
}
