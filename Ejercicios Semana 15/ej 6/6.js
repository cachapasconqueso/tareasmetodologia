console.log('\n=== EJERCICIO 06 - Intercambiar primer y último ===');
{
    const name = ['a', 'o', 'l', 'h'];
    console.log('Array original:', name);

    // Variable auxiliar
    let aux = name[0];
    name[0] = name[name.length - 1];
    name[name.length - 1] = aux;

    console.log('Array después del intercambio:', name);
}