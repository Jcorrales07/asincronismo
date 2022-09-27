const suma = (a, b) => a + b;

function call(a, b, cb) {
    return cb(a, b);
}

console.log(call(142, 243, suma));

setTimeout(function () {
    console.log('Hola ${JavaScript}');
}, 10000)

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'JavaScript');
setTimeout(greeting, 2000, 'Node.js');