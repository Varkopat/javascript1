// Funktio, joka tarkistaa, onko sana palindromi
function isPalindrome(word) {
  // Alustetaan muuttujat
  let sanitizedWord = "";
  let reversedWord = "";

  // Sanitointi ja kääntö yhdessä silmukassa
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      sanitizedWord += char;
      reversedWord = char + reversedWord; // Rakennetaan käännetty sana samalla
    }
  }

  // Palautetaan true, jos sanat ovat samat, muuten false
  if (sanitizedWord == reversedWord) {
    return true;
  } else {
    return false;
  }
}

// Syötetään 3 parametriä
let word1 = "saippuakauppias";
let word2 = "innostunut sonni";
let word3 = "koodari";

// Kutsutaan funktiota ja testataan, ovatko parametrit palindromeja
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));

// Kysytään käyttäjältä sanaa
/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Anna sana tarkistettavaksi: ", (word) => {
  console.log(isPalindrome(word)); // Kutsutaan funktiota
  readline.close();
}); */
