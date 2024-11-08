// 461. Hamming Distance

var hammingDistance = function(x, y) {
    let xor = (x ^ y).toString(2)
    return xor.match(/1/g)?.length || 0
    
};