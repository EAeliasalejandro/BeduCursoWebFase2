function getChess(tamaño) {
    var car1 = " #";
    var car2 = "# ";
    var cadFinal1="";
    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            //dar espacio o no
            if (i % 2 !== 0) {
                cadFinal1 += car1;//doy espacio
            } else {
                cadFinal1 += car2;//no doy espacio
            }
        }
        cadFinal1 += "\n";
    }
    console.log(cadFinal1);
}
getChess(8);