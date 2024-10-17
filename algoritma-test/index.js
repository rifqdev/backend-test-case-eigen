// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const reverseAlphabet = (str) => {
  const alphabet = str.match(/[a-zA-Z]+|[0-9]+/g);
  const reversedAlphabet = alphabet[0].split("").reverse().join("");
  return `${reversedAlphabet}${alphabet[1]}`;
};

console.log(reverseAlphabet("NEGIE1"));

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
const longestWord = (str) => {
  const words = str.split(" ");
  let longest = "";
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return `${longest}: ${longest.length} karakter`;
};

console.log(longestWord("Saya sangat senang mengerjakan soal algoritma"));

// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
const hitungKemunculan = (input, query) => {
  const hasil = query.map((kata) => {
    return input.filter((item) => item === kata).length;
  });
  return hasil;
};

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

console.log(hitungKemunculan(INPUT, QUERY));

// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN

const hitungSelisihDiagonal = (matrix) => {
  let diagonalPertama = 0;
  let diagonalKedua = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    diagonalPertama += matrix[i][i];
    diagonalKedua += matrix[i][n - 1 - i];
  }

  return Math.abs(diagonalPertama - diagonalKedua);
};

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(hitungSelisihDiagonal(matrix));
