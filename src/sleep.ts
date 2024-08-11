/** @module sleep */

/**
 * Pauses the execution for a specified number of milliseconds.
 *
 * @param {number} milliseconds - The duration for which to pause the execution, in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 */
const sleep = (milliseconds: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

export { sleep };
