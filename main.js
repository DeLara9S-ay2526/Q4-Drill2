function checkTemp() {
    var tempIndex = document.getElementById("temp").value;
    var humIndex = document.getElementById("hum").value;
    var heatIndex = tempIndex + Number(.33 * humIndex) - 4;
    document.getElementById("replace1").innerHTML = "Heat Index: " + heatIndex;
}