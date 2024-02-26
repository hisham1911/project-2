/**
 * Truncates a string to a maximum length, adding an ellipsis if necessary.
 *
 * @param {string} txt - The string to truncate.
 * @param {number} [max=50] - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 *
 * @example
 * const longText = 'This is a very long string that needs to be truncated.';
 * const truncatedText = txtSlice(longText, 25); // Output: 'This is a very...'
 */
export function txtSlicer(txt: string, max: number = 50): string {
    if (txt.length > max) return `${txt.slice(0, max)}...`;
    return txt;
  }