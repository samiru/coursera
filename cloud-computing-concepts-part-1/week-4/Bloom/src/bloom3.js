var BitArray = require('zo-bitarray');

console.log("B L O O M");

// Globals
const m = 32;
let bloom = new BitArray(m);

console.log(bloom.toString());

const tests = [0];

// Bloom
const inputs = [2013, 2010, 2007, 2004, 2001, 1998];

inputs.forEach(input => {
    var fingerPrint = getFingerPrint(input);

    bloom = bloom.or(fingerPrint);
    console.log(fingerPrint.toString());
});

console.log("===");
console.log(bloom.toString());
console.log("---");

inputs.forEach(input => {
    console.log(test(getFingerPrint(input), bloom));
});

const t = getFingerPrint(3200);

console.log(t.toString());

console.log(test(t, bloom));

function h(i, x, m) {
    return ((Math.pow(x, 2) + Math.pow(x, 3)) * i) % m;
}

function getFingerPrint(x) {
    const fingerPrint = new BitArray(m);
    //    const multipliers = [1, 2, 3];
    const multipliers = Array.from(Array(20).keys());

    multipliers.forEach(i => {
        const bit = h(i, x, m);
        fingerPrint.set(bit, 1);
    });

    return fingerPrint;
}

// Check which values of tests are in outputs
function test(fingerPrint, bloom) {
    var inBloom = true;

    for (const [i, v] of fingerPrint.entries()) {
        if (v === 1 && bloom.get(i) !== 1) {
            inBloom = false;
            break;
        }
    }

    return inBloom;

    /*
        const checks = [];

        tests.forEach(test => {
            let found = outputs.some(output => { return output.includes(test); });
            checks.push({ test, found });
        });

        return checks;
    */
}