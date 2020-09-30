var IOT ={
    "name" : "jonas ",
    "Beteckning" : "STM32 ",
    "Tillverkare": "ST ",
    "Funktion":  "LTE IoT cellular to cloud ",
    "ÅR": 2020 ,
    "Plats": " Sweden"}
function JSONfunction(){
document.getElementById('IOT1').innerHTML = IOT.name;
document.getElementById('IOT2').innerHTML = IOT.Beteckning;
document.getElementById('IOT3').innerHTML = IOT.Tillverkare;
document.getElementById('IOT4').innerHTML = IOT.Funktion;
document.getElementById('IOT5').innerHTML = IOT.ÅR;
document.getElementById('IOT6').innerHTML = IOT.Plats;
}