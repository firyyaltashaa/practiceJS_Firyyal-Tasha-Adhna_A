// 1. Fungsi printHeart - Mencetak simbol <3
function printHeart() {
  console.log("<3");
  alert("<3"); // Menambahkan alert untuk menampilkan simbol <3 di layar
}

// 2. Fungsi multiply - Mengalikan dua angka dan mengembalikan hasilnya
function multiply(a, b) {
  return a * b;
}

// Fungsi untuk menampilkan hasil multiply di console
function tampilkanHasilMultiply() {
  console.log(multiply(2, 3)); // 6
  console.log(multiply(9, 9)); // 81
  console.log(multiply(5, 4)); // 20
}

// 3. Scope Practice
// A. Periksa output ketika menjalankan fungsi observe()
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal); // Output akan "Pajama Squid" karena variabel dalam fungsi
}

// B. Periksa output ketika menjalankan fungsi handleAnimal()
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal); // Output akan "Scorpionfish" dari variabel dalam fungsi
  console.log("Global deadlyAnimal:", deadlyAnimal);
}

// 4. Arrow Function - Menggunakan fungsi panah (arrow function)
const sayHello = (name) => {
  console.log(`Hello ${name}!`);
};
