// program to check an Armstrong number of three digits
function digits(num) {
    let temp = num;
    let cnt = 0;
    while (temp > 0) {
        cnt++;
        temp = parseInt(temp / 10);
    }
    return cnt;
}
function check(number) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits(number));
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        return true;

    }
    else {
        return false;
    }
}

for (let i = 1; i <= 1000; i++) {

    if (check(i)) {
        console.log(`${i} is an Armstrong number`);
    }
    else {
        console.log(`${i} is not an Armstrong number.`);
    }
}