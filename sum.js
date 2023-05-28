
module.exports.sumNum = function (a, b) {
    return  a + b;
}

module.exports.mult = function (d, e) {
    return d * e;
    
};
module.exports.revString = function (str) {
    let reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}






