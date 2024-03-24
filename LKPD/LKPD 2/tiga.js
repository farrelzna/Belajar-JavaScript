//input
let fahrenheit = 250;
let celcius;
//proses
celcius = (fahrenheit - 32) * 5/9;
//output
if(celcius > 300){
    console.log("Panas");
} else if (celcius < 250){
    console.log("Dingin");
} else{
    console.log("Normal");
} 