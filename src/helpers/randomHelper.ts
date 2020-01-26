/**
 * Generates an 'amount' of unique indices between 0 nad range-1.
 * @param amount How many unique indices to generate.
 * @param range 
 */
export function generateUniqueIndices(amount: number, range: number): number[] {
    if (amount > range)
        return [];
    
    const randomIndices: number[] = [];

    for (let i = 0; i < amount; ++i) {
        let index;
        do {
            index = Math.floor(Math.random() * range);
        } while(randomIndices.includes(index));

        randomIndices.push(index);
    }
    
    return randomIndices;
}