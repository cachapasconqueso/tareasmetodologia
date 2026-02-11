console.log('\n=== EJERCICIO 08 - Invertir array impar ===');
{
    const world = ['s', 'o', 'n', 'a', 'c', 'n', 'e', 'u', 'c'];
    console.log('Texto original:', world.join(''));

    for (let i = 0; i < Math.floor(world.length / 2); i++) {
        let aux = world[i];
        world[i] = world[world.length - 1 - i];
        world[world.length - 1 - i] = aux;
    }

    console.log('Texto invertido:', world.join(''));
}