// 1. For Loop untuk Chorus "I'm Blue"
function chorusLoop() {
    const chorusElement = document.getElementById("chorusOutput");
    let chorusLyrics = "";
    
    // Loop untuk mencetak "Da ba dee da ba daa" sebanyak 6 kali
    for (let i = 0; i < 6; i++) {
      chorusLyrics += "Da ba dee da ba daa<br>";
    }
    
    chorusElement.innerHTML = chorusLyrics;
  }
  
  // 2. For Loop untuk Hitung Mundur
  function countdown() {
    const countdownElement = document.getElementById("countdownOutput");
    let countdownNumbers = "";
    
    // Loop untuk mencetak hitungan mundur dari 25 hingga 0 dengan interval 5
    for (let i = 25; i >= 0; i -= 5) {
      countdownNumbers += i + "<br>";
    }
    
    countdownElement.innerHTML = countdownNumbers;
  }
  
  // 3. Iterasi Array dengan For Loop
  const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
  
  function printPeople() {
    const peopleElement = document.getElementById("peopleOutput");
    let peopleList = "";
    
    // Loop untuk mencetak setiap nama dalam huruf kapital
    for (let i = 0; i < people.length; i++) {
      peopleList += people[i].toUpperCase() + "<br>";
    }
    
    peopleElement.innerHTML = peopleList;
  }
  