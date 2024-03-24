//input
let gram = 100;
let diskon;
let harga;
let setDiskon;
//proses
harga = gram/100 * 500;
diskon = harga * 5/100;
setDiskon = harga - diskon;
//output
console.log(`Harga sebelum diskon : ${harga}`);
console.log(`Diskon : ${diskon}`);
console.log(`Harga setelah diskon : ${setDiskon}`);