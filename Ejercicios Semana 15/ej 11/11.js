console.log('\n=== EJERCICIO 11 - Llenar con múltiplos ===');
{
    const t = 5; // Tamaño del vector
    const x = 3; // Valor base
    const v = [];

    for (let i = 1; i <= t; i++) {
        v.push(x * i);
    }

    console.log('Vector:', v);
    // Resultado: [3, 6, 9, 12, 15]
}
