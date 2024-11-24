// 268. Missing Number

var missingNumber = function (nums) {
    let sum = 0
    const SumNatural = n => n * (n + 1) / 2;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return SumNatural(nums.length) - sum

};

//Alternative using XOR

var missingNumber = function (nums) {
    let xor1 = 0
    for (let i = 0; i < nums.length; i++) {
        xor1 ^= nums[i] ^ i + 1
    }
    return xor1

};