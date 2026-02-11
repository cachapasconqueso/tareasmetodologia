"use strict "
console.log('\n=== EJERCICIO 02 - Bucles anidados ===');
{
    const nums = [0, 2, 4, 8];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[i] + '' + nums[j]);
        }
    }
}
