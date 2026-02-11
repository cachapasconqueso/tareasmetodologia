console.log('\n=== EJERCICIO 04 - Índices que suman X ===');
{
    const nums = [2, 3, 6, 5, 0];
    const x = 7;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === x) {
                console.log(`Índice ${i} e índice ${j}`);
            }
        }
    }
}
