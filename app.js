// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.
    
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
 }
// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.


    let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
    sum += i;
    }

    console.log(sum);
    
    // 3. Desenvolva um algoritmo que preenche um vetor com os 4
    // primeiros números perfeitos.

    let perfectNumbers = [];
    let count = 0;
    let number = 1;

    
    while (count < 4) {
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        if (sum === number) {
            perfectNumbers.push(number);
            count++;
        }
        number++;
    }
    
    console.log(perfectNumbers);

    //     4. Desenvolva um algoritmo que declare uma lista de 10 números e
    // solicite um número para o usuário e no final informe se o número
    // que o usuário digitou está dentro da lista ou não.

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let userNumber = parseInt(prompt("Digite um número: "));
    if (numbers.includes(userNumber)) {
    console.log("O número digitado está na lista.");
    } else {
    console.log("O número digitado não está na lista.");
    }

    //     5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
    // e que exiba a lista desses nomes na tela. Após exibir essa lista, o
    // programa deve mostrar também os nomes na ordem inversa em
    // que o usuário os digitou.


    let nomes = ['Edson', 'Armando', 'Geronimo', 'Chinaga', 'Anabo']

    console.log('Nomes digitados: ', nomes);
    console.log('Nomes na ordem inversa: ', nomes.reverse());