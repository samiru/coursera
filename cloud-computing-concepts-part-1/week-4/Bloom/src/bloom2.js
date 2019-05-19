console.log("hello!")

// Globals
const m = 32;
const multipliers = [1, 2, 3];
const tests = [24, 0, 8, 28];

// Bloom
const inputs_1 = [2010, 2013, 2007];
const inputs_2 = [2010, 2013, 2007, 2004];

bloom(inputs_1, tests);
bloom(inputs_2, tests);

function bloom(inputs, tests) {
    console.log("inputs: ", inputs);

    var outputs = inputs.map(function(input) {
        return multipliers.map(multiplier => h(multiplier, input));
    });

    console.log("outputs: ", outputs);
    console.log("tests: ", tests);
    console.log(test(tests, outputs));
}

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