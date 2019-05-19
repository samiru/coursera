console.log("hello!")

// Globals
const m = 32;
const multipliers = [1, 2, 3];
const tests = [24, 14, 10, 16];

// Bloom
const inputs = [2010, 2013];

var outputs = inputs.map(function(input) {
    return multipliers.map(multiplier => h(multiplier, input));
});

console.log(outputs);
console.log(tests);
console.log(test(tests, outputs));

function h(i, x) {
    return ((Math.pow(x, 2) + Math.pow(x, 3)) * i) % m;
}

// Check which values of tests are in outputs
function test(tests, outputs) {
    const checks = [];

    tests.forEach(test => {
        let found = outputs.some(output => { return output.includes(test); });
        checks.push({ test, found });
    });

    return checks;
}