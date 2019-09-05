

function twoNumberSum(array, targetSum) {
    var empArr = [];
    // Write your code here.
    console.log("array", array)
    console.log('array length', array.length)
    console.log('targetSum', targetSum)
    for (var k = 0; k < array.length; k++) {
        //console.log(array[k])
        for (var j = 1; j < array.length; j++) {
            //console.log(array[k] + array[j])
            var ans = array[k] + array[j];
            console.log('ans', ans)
            if (ans === targetSum) {
                empArr.push(array[k], array[j])
                console.log('empArr', empArr)
                return empArr.sort()
            }
        }
    }
    if (empArr = []) {
        return empArr
    }
    console.log("empArr", empArr)

}

twoNumberSum()

//On2 time becuase we have two for loops nested