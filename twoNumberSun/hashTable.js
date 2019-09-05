0(n) time | 0(n) space

function twoNumberSum(array, targetSum) {
    var nums = {};
    for (var num of array) {
        if (targetSum - num in nums) { // if nums is empty, skip below, 
            console.log("nums1", [targetSum - num, num])
            return [targetSum - num, num].sort((a, b) => a - b) //sort by number
        } else {
            nums[num] = true; //if nums is empty, add the property to the object with the value of true
            console.log("nums2", nums)
        }
    }
    return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
