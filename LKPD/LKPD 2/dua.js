//input
let angka = 689;
let satuan;
let puluhan;
let ratusan;
//proses
satuan = angka % 10;
puluhan = Math.floor((angka % 100) / 10);
ratusan = Math.floor((angka % 1000) / 100);
//output
console.log(`satuan : ${satuan}`);
console.log(`puluhan : ${puluhan}`);
console.log(`ratusan : ${ratusan}`);