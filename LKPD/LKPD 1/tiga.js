//input
let totaldetik = 360;
let detik;
let menit;
let jam;
let sisa;
//proses
jam = Math.floor(totaldetik/3600);
sisa = totaldetik % 3600;
menit = Math.floor(sisa/60);
detik = sisa % 60;
//output
console.log(`jam : ${jam}`);
console.log(`menit : ${menit}`);
console.log(`detik : ${detik}`); 