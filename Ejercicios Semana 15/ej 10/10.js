console.log('\n=== EJERCICIO 10 - Binario a decimal ===');
{
    const binaryNumber = [0, 1, 0, 1];
    let decimal = 0;
    let potencia = 1;

    // Convertir desde el último bit hacia el primero
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimal += binaryNumber[i] * potencia;
        potencia *= 2;
    }

    console.log('Binario:', binaryNumber.join(''));
    console.log('Decimal:', decimal);
    // Resultado: 5
}
