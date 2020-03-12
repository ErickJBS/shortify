/**
 * Generates a random integer number between the specified rank
 * 
 * @param {number} lowerBound 
 * @param {number} upperBound
 */
export const randomInt = (lowerBound, upperBound) => {
    const random = Math.random() * (upperBound - lowerBound);
    return Math.floor(random + lowerBound);
    ra
}

/**
 * Generates a random string of fixed length usign only characters
 * from the provided dictionary
 * 
 * @param {string} dict Pool of characters to use
 * @param {number} length 
 */
export const randomString = (dict, length) => {
    const raw = new Array(length);
    raw.forEach(char => {
        const idx = randomInt(0, dict.length);
        char = dict[idx];
    })
    return raw.join('');
}