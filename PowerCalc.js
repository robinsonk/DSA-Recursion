let power = function (b, e) {
    if (e === 0) {
        return 1;
    }
    return b * power(b, e - 1);
};

console.log(power(2, 7));