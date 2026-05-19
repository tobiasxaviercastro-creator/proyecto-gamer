function analizarPoder() {
    let nombre = document.getElementById("nombreHeroe").value;
    let lvl = parseInt(document.getElementById("nivel").value);
    let vic = parseInt(document.getElementById("victorias").value);
    let kills = parseInt(document.getElementById("kills").value);

    let combatScore = (lvl * 10) + (vic * 50) + (kills * 5);
    let rango = "";

    if (combatScore < 1000) {
        rango = "BRONCE - Novato";
    } else if (combatScore >= 1000 && combatScore < 3000) {
        rango = "PLATA - Guerrero";
    } else if (combatScore >= 3000 && combatScore < 7000) {
        rango = "ORO - Comandante";
    } else {
        rango = "DIAMANTE - Leyenda";
    }

    document.getElementById("resultado").innerText = "ANALIZADO: " + nombre + "\nSCORE: " + combatScore + "\nRANGO: " + rango;
}