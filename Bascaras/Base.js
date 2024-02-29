let a1 = document.getElementById("valorA");
let b1 = document.getElementById("valorB");
let c1 = document.getElementById("valorC");

const a = (a1.value);
const b = (b1.value);
const c = (c1.value);

function Baskara() {
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularRaiz(delta)) / (2 * a);
    const x2 = (-b - calcularRaiz(delta)) / (2 * a);

    console.log(`O valor de x1 e x2 é: ${x1} e ${x2}`);
}

function calcularRaiz(base) {
    return base ** (1/2);
}
