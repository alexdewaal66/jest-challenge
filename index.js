module.exports = {
    challenge: challenge
}

function challenge(x) {
    const { garbled } = x;
    let result = '';
    for (let i = 1; i < garbled.length; i += 3) {
        result += garbled.charAt(i);
    }
    return result;
}
