// Brincando com arrays
console.log('\n\nBrincando com arrays');
let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

function inverteArray() {
  if (inverter) {
    listaInvertida[0] = lista[4];
    listaInvertida[1] = lista[3];
    listaInvertida[2] = lista[2];
    listaInvertida[3] = lista[1];
    listaInvertida[4] = lista[0];
    console.log(listaInvertida); // [5, 4, 3, 2, 1]
  } else {
    console.log(lista); // [1, 2, 3, 4, 5]
  }
}

inverteArray();
inverter = false;
inverteArray();

// Fazendo média com FOR
console.log('\n\nFazendo média com FOR');
const arrayNumeros = [22, 33, 55, 103];

function mediaDosNumeros(arrayNumeros) {
  let soma = 0;

  for (let i = 0; i < arrayNumeros.length; i = i + 1) {
    soma = soma + arrayNumeros[i];
  }

  return soma / arrayNumeros.length;
}

console.log(mediaDosNumeros(arrayNumeros));

// Brincando com FOR
console.log('\n\nFazendo média com FOR');
const multiplicador = [3, 7];
let resultado;

for (let index = 0; index < multiplicador.length; index = index + 1) {
  for(let i = 1; i <= 9; i = i + 1) {
    resultado = multiplicador[index] * i;
    console.log(multiplicador[index] + ' x ' + i + ' = ' + resultado)
  }
}

// Pedido na pizzaria
console.log('\n\nPedido na pizzaria');
function clientePedido(numeroPedido) {
  let sabores = ['Pizza de Calabresa', 'Pizza de Quatro Queijos', 'Pizza de Frango com Catupiry', 'Pizza de Brigadeiro'];
  const erro = 'Número do pedido inválido!';

  if (numeroPedido > 0 && numeroPedido < 5) {
    return sabores[numeroPedido - 1];
  } else {
    return erro;
  }
}

for (let index = 1; index < 6; index = index + 1) {
  console.log(clientePedido(index));
}

// Triplique as chances
console.log('\n\nTriplique as chances!');
let chances = [3, 5, 2];
console.log(chances);

function tripliqueAsChances(chances) {
  let soma = 0;
  for (let index = 0; index < chances.length; index = index + 1) {
    soma = soma + chances[index];
  }
  let mult = soma * 3;
  return mult;
}

console.log(tripliqueAsChances(chances));
