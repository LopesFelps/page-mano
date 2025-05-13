// 1. Crie uma função que receba um array de números e retorne um arrya somente com números pares:
function array() {
    let numeros = [1, 2, 3, 4, 5];

    console.log(
        "filter:",
        numeros.filter(n => n % 2 === 0)
      );
}

array();

// 2. Crie uma função que receba um array de numeros e retorne a media aritimetica

function Media() {
    let numeros = [1, 2, 3, 4 ,5];
    soma = numeros.reduce((acc, n) => acc + n, 0);
    media = soma / numeros.length;
    console.log(media);   
}

Media();

// 3. Crie uma funcao que receba dois valores e um operador e execute a operecao correspondente

function Soma(n1, n2, operador) {
    switch (operador) {
        case '+':
            console.log (n1+n2);
            break
            case '-':
                console.log (n1-n2);
                break
            case '*':
                console.log (n1*n2);
                break
            case '/':
                console.log (n1/n2);
                break
            default:
                console.log('Operador Inválido...');
        }
        
    }
    
    Soma(5, 9, '+')
    
    // 4. Crie uma funcao que receba um str e retorne ela invertida.
    
    function inverterString(str) {
        return str.split('').reverse().join('');
      }
      console.log(inverterString("felipe"));
            
    
    // 5. Crie uma funcao que simule uma rolagem de dado de 6 lados e retorne o numero sorteado. Use Math.random().
    function rolarDado() {
        return Math.floor(Math.random() * 6) + 1;
      }

      console.log("Você rolou:", rolarDado());

      // 6. Crie uma função que adicione dinamicamente uma lista (<ul>) no body contendo 5 frutas como <li>.
      function adicionarListaDeFrutas() {
        const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
        
        const ul = document.createElement("ul"); 
        
        frutas.forEach(fruta => {
          const li = document.createElement("li"); 
          li.textContent = fruta; 
          ul.appendChild(li); 
        });
      
        document.body.appendChild(ul); 
      }
      adicionarListaDeFrutas();

      // 7. Crie uma função que receba um array de números e retorne um objeto com o maior, menor e a média dos valores.
      function analisarNumeros(numeros) {
        const maior = Math.max(...numeros);
        const menor = Math.min(...numeros);
        const soma = numeros.reduce((acc, num) => acc + num, 0);
        const media = soma / numeros.length;
      
        return {
          maior: maior,
          menor: menor,
          media: media
        };
      }
      const resultado = analisarNumeros([10, 5, 8, 20, 3]);
      console.log(resultado);
      
      // 8. Crie uma função que receba uma lista de nomes e retorne um novo array contendo somente os nomes que começam com a letra “A”.

      function filtrarNomesComA(nomes) {
        return nomes.filter(nome => nome.startsWith("A"));
      }
      const nomes = ["Felipe", "Lucas", "Bella", "Carlos",];
      const resultado1 = filtrarNomesComA(nomes);
      console.log(resultado); 

      // 9. Crie uma função buscarPostPorId(id) que use fetch e retorne os dados do post com o ID fornecido. A Api deve ser a https//jsonplaceholder.typicode.com/posts/ID.
      function buscarPostPorId(id) {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Erro: ${response.status}`);
            }
            return response.json();
          })
          .then(dados => {
            console.log("Post encontrado:", dados);
            return dados;
          })
          .catch(erro => {
            console.error("Erro ao buscar o post:", erro);
          });
      }
      buscarPostPorId(3);

    // 10. Crie uma função que receba uma palavra e verifique se é um palíndromo (ex: “radar”, “arara”).

    function ehPalindromo(palavra) {
        const normal = palavra.toLowerCase(); // torna tudo minúsculo
        const invertida = normal.split('').reverse().join('');
        return normal === invertida;
      }
      console.log(ehPalindromo("arara")); 
      console.log(ehPalindromo("Radar")); 
      console.log(ehPalindromo("felipe")); 
            
      
            
            
      