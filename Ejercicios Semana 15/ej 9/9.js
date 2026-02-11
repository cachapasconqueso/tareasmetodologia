console.log('\n=== EJERCICIO 09 - Secuencia duplicada ===');
{
    const nums = [0, 0, 0, 0];
    const x = 1;

    // Llenar desde el último elemento hacia atrás
    nums[nums.length - 1] = x;
    for (let i = nums.length - 2; i >= 0; i--) {
        nums[i] = nums[i + 1] * 2;
    }

    console.log('Array final:', nums);
    // Resultado: [8, 4, 2, 1]
}
