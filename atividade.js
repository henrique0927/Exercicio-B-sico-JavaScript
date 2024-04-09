// 1. Faça um algoritmo que some quantos números o usuário quiser, sempre pedindo
// seus valores a ele, e que ao fim mostre o resultado.
console.log('----Atividade 1----');
let soma = 0
let numero = 0
let validador = '1'
continuarPrograma = true
while (continuarPrograma) {
    numero = Number(prompt('Digite um Número:'))
    soma += numero
    validador = Number(prompt('Se deseja continuar o programa digite [1], se deseja Sair Digite [0].'))
    if (validador === 0) {
        continuarPrograma = false
        console.log('Saiu do programa.')
    }
    
}
console.log(`Resultado da soma: ${soma}`);





// 2. A NASA precisa de você! Desenvolva um algoritmo que faça a contagem regressiva
// para o lançamento de um foguete.
console.log('----Atividade 2----');
let contagem = prompt("Para começar a contagem, digite de qual número devemos começar: ");

function atualizadorContador() {
    if (contagem > 0) {
        console.log(`${contagem}`);
        contagem -= 1;
        setTimeout(atualizadorContador, 1000);
    } else {
        console.log('Decolagem Autorizada.');
    }
}

atualizadorContador();






// 3. A empresa Mawer precisa fazer o balanço financeiro anual, portanto te contrataram
// e disseram: faça um algoritmo que peça o ganho bruto e os gastos desta empresa
// para cada um dos 12 meses de um ano, e que mostre no final o ganho bruto anual,
// o gasto anual e o saldo financeiro, informando também se a empresa teve lucro ou
// prejuízo.
// Função para calcular o balanço financeiro anual
console.log('----Atividade 3----');
function calcularBalançoFinanceiroAnual() {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let ganhoBrutoAnual = 0;
    let gastoAnual = 0;
    for (let i = 0; i < meses.length; i++) {
        let ganhoBruto = parseFloat(prompt(`Informe o ganho bruto do mês ${meses[i]}:`));
        let gasto = parseFloat(prompt(`Informe o gasto do mês ${meses[i]}:`));
        ganhoBrutoAnual += ganhoBruto;
        gastoAnual += gasto;
    }
    let saldoFinanceiro = ganhoBrutoAnual - gastoAnual;
    let resultado = saldoFinanceiro >= 0 ? "lucro" : "prejuízo";
    console.log(`Ganho bruto anual: ${ganhoBrutoAnual.toFixed(2)}`);
    console.log(`Gasto anual: ${gastoAnual.toFixed(2)}`);
    console.log(`Saldo financeiro: ${saldoFinanceiro.toFixed(2)} (${resultado})`);
}
calcularBalançoFinanceiroAnual();




// 4. Faça um algoritmo que peça ao usuário 4 valores inteiros e mostre-os em ordem
// decrescente.
console.log('----Atividade 4----');
function decrescente(num) {
    console.log(`Número Digitado: ${num}`);
    for (let i = 0; i < 4; i++) {
        num -= 1;
        console.log(`${num}`);
    }
}
let numDigitado = parseInt(prompt('Digite um número: '));
decrescente(numDigitado);



// 5. Faça um algoritmo que peça um número e se este número for par, transforme-o em
// ímpar e vice-versa.
console.log('----Atividade 5----');
let num = parseInt(prompt('Digite um número para verificar se ele é PAR ou ÍMPAR: '));
if (num % 2 == 0) {
    console.log('Número é PAR.');
    console.log(`Número trnasforado em ÍMPAR. Novo valor = ${num + 1}`);
} else {
    console.log('Número é ÍMPAR.');
    console.log(`Número trnasforado em PAR. Novo valor = ${num + 1}`);
}




// 6. Faça um algoritmo que verifique a letra digitada e imprima se ela é uma vogal ou
// consoante.
console.log('----Atividade 6----');
let letraDigitada = prompt('Digite uma letra para verificar se ela é Vogal ou Consoante: ').toLocaleLowerCase();
if (letraDigitada == 'a' || letraDigitada == 'e' || letraDigitada == 'i' || letraDigitada == 'o' || letraDigitada == 'u') {
    console.log(`A letra ${letraDigitada} é Vogal.`);
} else {
    console.log(`A letra ${letraDigitada} Não é Vogal.`);
};


// 7. Faça um algoritmo para uma picoleteria que ao selecionar o tipo de sabor o preço do
// picolé é mostrado, os sabores:
// a. Chocolate custa R$:1,50
// b. Morango custa R$:2,50
// c. Creme custa R$:2,50
// d. 
// e. 
// f. 
// g. 
// h. 
// i. 
console.log('----Atividade 7----');
console.log('______________________________________________________________________________________')
console.log('----Escolha de sabores Picolé----: \n1-Chocolate\n2-Morango\n3-Creme\n4-Manga\n5-Melancia\n6-Vanilla\n7-Céu Azul\n8-Brownie\n9-Hawaiano');
console.log('______________________________________________________________________________________')
const sabor = Number(prompt('Digite o número de um sabor para saber mais sobre as informações do Picolé:'));
switch(sabor) {
    case 1:
        console.log("Chocolate custa R$:1,50");
        break;
    case 2:
        console.log("Morango custa R$:2,50");
        break;
    case 3:
        console.log("Creme custa R$:2,50");
        break;
    case 4:
        console.log("Manga custa R$:3,20");
        break;
    case 5:
        console.log("Melancia custa R$:3,40");
        break;
    case 6:
        console.log("Vanilla Ice custa R$:3,00");
        break;
    case 7:
        console.log("Céu Azul custa R$:3,60");
        break;
    case 8:
        console.log("Brownie custa R$:4,00");
        break;
    case 9:
        console.log("Hawaiano custa R$:5,00");
        break;
    default:
        console.log("Sem Iformações. Esse não é um Sabor Existente.");
}
