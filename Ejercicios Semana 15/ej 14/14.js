console.log('\n=== EJERCICIO 14 - Verificar palíndromo ===');
{
    const nums = [1, 2, 3, 2, 1];
    let esPalindromo = true;

    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        if (nums[i] !== nums[nums.length - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    if (esPalindromo) {
        console.log('Sí es palíndromo');
    } else {
        console.log('No es palíndromo');
    }
}
