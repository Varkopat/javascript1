// Kysytään käyttäjältä sanaa
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Anna sana tarkistettavaksi: ", (word) => {
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

  // Verrataan alkuperäistä ja käännettyä merkkijonoa
  if (sanitizedWord === reversedWord) {
    console.log(`\"${word}\" on palindromi!`);
  } else {
    console.log(`\"${word}\" ei ole palindromi.`);
  }

  readline.close();
});
