const Z = 7;

// 1. Declaração de Variáveis - Escopo
function declaracaoVariaveisEscopo() {
  console.log("var variable"); // var variable
  console.log(x); // undefined
  var x = 5; // só seta o valor para x
  console.log(x); // 5

  console.log("let variable"); // let variable
  let y = 6; // só seta o valor para y
  console.log(y); // Error
  console.log(y); // 6

  console.log("const variable DENTRO DO main"); // const variable
  // só seta o valor para y
  console.log(Z); // 7
  console.log(Z); // 7
}

// 1.1. Declaração de Variáveis
function declaracaoVariaveis() {
  let nome = "Ariel";
  const idade = 30;
  var cidade = "Sorocaba";
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

// 2. Tipos de Dados
function tiposDeDados() {
  let numero = 42;
  let texto = "Olá, mundo!";
  let booleano = true;
  let lista = [1, 2, 3];
  let objeto = { nome: "Ariel", idade: 30 };
  console.log(
    typeof numero,
    typeof texto,
    typeof booleano,
    typeof lista,
    typeof objeto
  );
}

// 3. Estruturas Condicionais
function estruturasCondicionais() {
  let idade = 18;
  //   if (idade >= 18) {
  //     console.log("Maior de idade");
  //   } else {
  //     console.log("Menor de idade");
  //   }

  if (idade >= 18) return console.log("Maior de idade");

  console.log("Menor de idade");
}

function retornaSomaNumeros(number1, number2) {
  return number1 + number2;
}

function main() {
  declaracaoVariaveis();
  // tiposDeDados();
  estruturasCondicionais();
  //   console.log(retornaSomaNumeros(1, 2));
  let numberSomado = retornaSomaNumeros("1", false);
  console.log(numberSomado);
}

// 5. Laços de Repetição
function lacosDeRepeticao() {
    for (let i = 1; i<=5; i++){
        console.log('Iteração ${i}');
    }

    const NOMES = ['Felipe', 'Lucas', 'Miguel'];
    for (let index = 0; index < NOMES.length; index++){
        const NOME = NOMES[index];
        console.log('Nome: ${NOME}');
    }
}

function funcoesEArrowFunctions() {
    function soma(a, b) {
        return a + b;
    }

    const multiplica = (a, b) => a * b;

    console.log(soma(3, 4));
    console.log(multiplica(3, 4));
}
// 6. Objetos e Arrays
function arraysEMetodos() {
    let numeros = [1, 2 , 3, 4, 5];
    console.log(
        "map:",
        numeros.map((n) => n * 2));

    console.log(
        "filter:",
        numeros.filter((n) => n > 2));

    console.log(
        "find:",
        numeros.find((n) => n > 2));

    console.log(
        "reduce:",
        numeros.reduce((acc, n) => acc + n, 0)
    );

    console.log(
        "some:",
        numeros.some((n) => 4)
    );

    console.log(
        "every:",
        numeros.every((n) => n > 0)
    );

    console.log(
        "sort (decrescente):",
        [...numeros].sort((a, b) => b - a)
    );

    console.log(
        "includes:",
        numeros.includes(3)
    );

    console.log("forEach:");
    numeros.forEach((n) => console.log(n));
};

function objetosJson() {
    let pessoa = {
        nome: "Felipe",
        idade: 19,
    }
    let json = JSON.stringify(pessoa);
    console.log(json);// {"nome":"Felipe","idade":19}
}
main();
arraysEMetodos();
objetosJson();