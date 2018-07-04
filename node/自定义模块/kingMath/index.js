function sum(...arguments) {
    let s = 0;
    arguments.forEach(i => { s += i });
    return s
}

module.exports = { sum } 