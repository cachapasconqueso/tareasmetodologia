console.log('\n=== EJERCICIO 03 - Combinaciones sin repetir ===');
{
    const nums = [0, 2, 4, 8];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i] + '' + nums[j]);
        }
    }
}