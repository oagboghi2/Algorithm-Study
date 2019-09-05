0(n) time | 0(1) space

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        console.log("array", array)
        const currentSum = array[left] + array[right];
        console.log("currentSum", currentSum)
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
