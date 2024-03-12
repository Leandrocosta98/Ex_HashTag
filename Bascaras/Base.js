let a = document.getElementById("valorA");
let b = document.getElementById("valorB");
let c = document.getElementById("valorC");
let res = document.getElementById("res")

function Baskara() {
    const delta = (b.value ** 2 - 4 * a.value * c.value);
    const x1 = (-b.value + calcularRaiz(delta)) / (2 * a.value);
    const x2 = (-b.value - calcularRaiz(delta)) / (2 * a.value);

    res.innerHTML = (`O valor de x1 e x2 é: ${x1.toFixed(2)} e ${x2.toFixed(2)}`);
}

function calcularRaiz(base) {
    return base ** (1/2);
}
