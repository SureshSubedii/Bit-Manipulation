// 338. Counting Bits
var countBits = function(n) {
    let ans = []
    const countBits = (num) =>{
        let count = 0
        while( num > 0){
            count += num & 1
            num >>= 1
        }
        return count
    }
    for(let i = 0; i <= n; i ++){
        if(i % 2 === 0) ans[i] = ans[i/2] || countBits(i)
        else ans[i] = ans[Math.floor(i/2) ] + 1 || countBits(i)

    }
    return ans
    
};