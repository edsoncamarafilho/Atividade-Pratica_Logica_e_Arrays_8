    
    
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}



    let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
    sum += i;
    }

    console.log(sum);

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


    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let userNumber = parseInt(prompt("Digite um número: "));
    if (numbers.includes(userNumber)) {
    console.log("O número digitado está na lista.");
    } else {
    console.log("O número digitado não está na lista.");
    }




    let nomes = ['Edson', 'Armando', 'Geronimo', 'Chinaga', 'Anabo']

    console.log('Nomes digitados: ', nomes);
    console.log('Nomes na ordem inversa: ', nomes.reverse());