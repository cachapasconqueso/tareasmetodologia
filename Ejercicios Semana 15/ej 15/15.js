console.log('\n=== EJERCICIO 15 - Tamaño par o impar ===');
{
    const nums = [1, 2, 3, 2, 1, 4];
    let contador = 0;

    for (let i = 0; i < nums.length; i++) {
        contador++;
    }

    if (contador % 2 === 0) {
        console.log('Tamaño par');
    } else {
        console.log('Tamaño impar');
    }
}