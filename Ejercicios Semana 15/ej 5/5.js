console.log('\n=== EJERCICIO 05 - Contar impares ===');
{
    const nums = [3, 5, 6, 7, 3, 5, 6, 7];
    let contadorImpares = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            contadorImpares++;
        }
    }

    console.log('Cantidad de números impares:', contadorImpares);
}
