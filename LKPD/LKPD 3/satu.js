//input
let nama = "anyu";
let PABP = 90;
let MTK = 80;
let DPK = 87;
let avg;
//proses
avg = (PABP + MTK + DPK) / 3;
//output
if(avg <= 100 && avg >= 80){
    console.log("A")
} else if(avg < 80 && avg >= 75){
    console.log("B")
} else if(avg >= 65 && avg < 75){
    console.log("C")
} else if(avg >= 45 && avg < 65){
    console.log("D")
} else if(avg < 45 && avg >= 0){
    console.log("E")
} else{
    console.log("K")
} 