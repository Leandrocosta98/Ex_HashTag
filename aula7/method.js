let casa = {
    cor: "white",
    sala: 15,
    banheiro: 7,
    quarto: 12,
    cozinha: 15,
}

function calcularTamanhoTotalCasa() {
    const tamanhoTotal = (casa.sala + casa.banheiro + casa.quarto + casa.cozinha);
    console.log(`O tamanho total da casa em M² = ${tamanhoTotal}m²`)
};

calcularTamanhoTotalCasa();

/*Podemos colocar essa função de calc o tamanho total dentro do let casa,
tambem podemos substituir o casa.o valor por this. o valor, o this está indicando 
que é esta variável e o valor é dela.*/

/* Quado voce coloca a função dentro da variável ela se chamará methodos, se se o tipo da
variável for number, ela vai lhe dar os methodos disponiveis, toda vez que ao lado das opções
que aparecer para nos tiver um dado roxo ao lado esquerdo, indica que ele é um methodo.*/
