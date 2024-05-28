
function contarImpares(numero) {
    let contador = 1;

    while (contador < numero) {
        if (contador % 2 !== 0) {
            console.log(contador);
        }
        contador++;
    }
}


contarImpares(18);
contarImpares(35);
