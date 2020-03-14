/**
 * Test a string to find a valid URL patter
 * 
 * @param {string} number 
 */
export const validate = (url) => {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return urlRegex.test(url);
}