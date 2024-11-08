// 1829. Maximum XOR for Each Query

var getMaximumXor = function (nums, maximumBit) {
    const max = 2 ** maximumBit - 1
    let xorr = 0
    let result = []
    let size = nums.length
    for(let i = 0; i < size; i ++){
        xorr ^= nums[i]
    }

    for(let i = 0; i < size; i ++ ){
        result.push(xorr ^ max )
        xorr ^= nums[size - 1 - i ]
    }
    return result


};