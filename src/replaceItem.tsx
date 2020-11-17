/**
 * Replaces a searched value within an array.
 *
 * @param data
 * @param searchValue
 * @param replaceValue
 */
export const replace = (data: any[], searchValue: any, replaceValue: any[]) => {
  if (data) {
    let total: number = 0;
    let initialLength: number = data.length;
    let replaceLength = replaceValue.length;
    // Find the total number of occurrences for the searched value.
    for (let i = 0; i < initialLength; i++) {
      if (data[i] === searchValue) {
        total++;
      }
    }
    // If the searched value exists, then proceed.
    if (total > 0) {
      // Find the ending length after the new values are added.
      let finalLength = initialLength + total * (replaceLength - 1);
      let finalIndex = finalLength - 1;
      // Repeat for every item of the initial length.
      for (
        let originalIndex = initialLength - 1;
        originalIndex >= 0;
        originalIndex--
      ) {
        // If an item matches the search value swap at the final index.
        if (data[originalIndex] === searchValue) {
          for (
            let replaceIndex = replaceLength - 1;
            replaceIndex >= 0;
            replaceIndex--
          ) {
            data[finalIndex--] = replaceValue[replaceIndex];
          }
          // Otherwise swap the final index at the original index;
        } else {
          data[finalIndex--] = data[originalIndex];
        }
      }
    }
  }
  return data;
};
