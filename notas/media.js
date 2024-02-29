//Respostas do Primeito e Segundo Exercicio;

const nota1 = 5;
const nota2 = 8;
const nota3 = 7;
const provaFinal = 9;

function calcMedia() { 
    const mediaDasNotas = (nota1 + nota2 + nota3)/3;

    if (mediaDasNotas < 7){
        console.log(`Infelizmente a média do aluno foi ${mediaDasNotas}, o mesmo precisará realizar a prova final`);
        const mediaFinal = (mediaDasNotas + provaFinal)/2;
        console.log(`O resultado final do aluno foi ${mediaFinal}`)
    } 
    else{
        console.log(`A média desse aluno é: ${mediaDasNotas}, o aluno foi aprovado.`);
    };
}

calcMedia();

//Resposta do Terceiro Exercicio;

const temp = 22;

function farenhit() {
    const tempF = (9/5 * (temp) + 32);
    console.log(`A temperatura de ${temp} graus, em Farenheit é ${tempF} F`)
}

farenhit()

//Resposta do quarto Exercicio;

const valorProduto = 10;

function calcValor() {
    let imp = (8.875 / 100) * valorProduto;
    let tot = (valorProduto + imp);

    console.log(`O valor do produto é R$ ${valorProduto}, o imposto é R$ ${imp} e o total a ser pago será R$ ${tot}`);
}

calcValor()
