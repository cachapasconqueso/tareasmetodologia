console.log('\n=== EJERCICIO 07 - Invertir array par ===');
{
    const world = ['o', 'ñ', 'e', 'l', 'i', 'u', 'q', 'a', 'y', 'a', 'u', 'g'];
    console.log('Texto original:', world.join(''));

    for (let i = 0; i < world.length / 2; i++) {
        let aux = world[i];
        world[i] = world[world.length - 1 - i];
        world[world.length - 1 - i] = aux;
    }

    console.log('Texto invertido:', world.join(''));
}