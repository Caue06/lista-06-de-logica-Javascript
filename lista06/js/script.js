const exercicio01 = document.querySelector("#ex01")
const exercicio02 = document.querySelector("#ex02")
const exercicio03 = document.querySelector("#ex03")
const exercicio04 = document.querySelector("#ex04")
const exercicio05 = document.querySelector("#ex05")
const exercicio06 = document.querySelector("#ex06")
const exercicio07 = document.querySelector("#ex07")
const exercicio08 = document.querySelector("#ex08")
const exercicio09 = document.querySelector("#ex09")
const exercicio10 = document.querySelector("#ex10")
const exercicio11 = document.querySelector("#ex11")
const exercicio12 = document.querySelector("#ex12")
const exercicio13 = document.querySelector("#ex13")
const exercicio14 = document.querySelector("#ex14")
const exercicio15 = document.querySelector("#ex15")
const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {
    res.innerHTML = ""
    let numeros = []
    for (let contadora = 0; contadora < 5; contadora++) {
        let numeroDigitado = parseInt(prompt("Digite um número:"))
        numeros[contadora] = numeroDigitado
    }
    for (let contadora2 = numeros.length - 1; contadora2 > -1; contadora2--) {
        res.innerHTML += numeros[contadora2] + " "
    }

    //1) Faça um programa que leia 5 números inteiros e exiba-os na ordem inversa em que foram digitados.
})

exercicio02.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let soma = 0

    for (let contadora = 0; contadora < 10; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
    }

    for (let contadora2 = numeros.length - 1; contadora2 > -1; contadora2--) {
        soma += numeros[contadora2]
    }

    res.innerHTML = "O resultado da soma dos números digitados é: " + soma
    // 2) Escreva um programa que leia 10 números inteiros e exiba a soma deles.
})

exercicio03.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let soma = 0

    for (let contadora = 0; contadora < 7; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
    }

    for (let contadora2 = numeros.length - 1; contadora2 > -1; contadora2--) {
        soma += numeros[contadora2]
    }

    res.innerHTML = "A média aritmética dos números digitados é: " + soma / 7

    // 3) Crie um programa que leia 7 números inteiros e exiba a média aritmética dos valores lidos.
})

exercicio04.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let pares = 0

    for (let contadora = 0; contadora < 5; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] % 2 == 0) {
            pares++
        }
    }

    res.innerHTML = "Dos números digitados " + pares + " são pares."

    // 4) Faça um programa que leia 5 números inteiros e exiba quantos deles são pares.

})

exercicio05.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let menor = Number.MAX_VALUE
    let maior = Number.MIN_VALUE
    for (let contadora = 0; contadora < 5; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] < menor) {
            menor = numeros[contadora]
        } else if (numeros[contadora] > maior) {
            maior = numeros[contadora]
        }
    }

    res.innerHTML = "Dos números digitados o " + menor + " é o menor e o " + maior + " é o maior."
    // 5) Escreva um programa que leia 5 números inteiros e exiba o maior e o menor valor digitado.
})

exercicio06.addEventListener("click", () => {
    res.innerHTML = ""
    let numeros = []
    for (let contadora = 0; contadora < 10; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
    }

    numeros.sort(function (a, b) {
        return a - b
    })
    res.innerHTML = numeros

    // 6) Crie um programa que leia 10 números inteiros e exiba-os em ordem crescente.
})

exercicio07.addEventListener("click", () => {
    res.innerHTML = ""
    let numeros = []
    let numerosPositivos = 0
    for (let contadora = 0; contadora < 10; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número: "))
        if (numeros[contadora] > -1) {
            numerosPositivos++
        }
    }

    res.innerHTML = "Dos números digitados " + numerosPositivos + " são positivos."
    // 7) Faça um programa que leia 10 números inteiros e exiba quantos deles são positivos.
})

exercicio08.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let pares = 0
    let impares = 0
    let quantidadePares = 0
    let quantidadeImpares = 0

    for (let contadora = 0; contadora < 5; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] % 2 == 0) {
            pares += numeros[contadora]
            quantidadePares++
        } else {
            impares += numeros[contadora]
            quantidadeImpares++
        }
    }

    res.innerHTML = "A média dos números ímpares é de " + impares / quantidadeImpares + " e a média dos números pares é de " + pares / quantidadePares + "."

    // 8) Escreva um programa que leia 5 números inteiros e calcule a média dos valores pares e a média dos valores ímpares.
})

exercicio09.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let positivos = 0
    let negativos = 0

    for (let contadora = 0; contadora < 10; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] < 0) {
            negativos++
        } else {
            positivos++
        }
    }

    res.innerHTML = "Dos números digitados " + positivos + " são positivos e " + negativos + " são negativos."
    // 9) Crie um programa que leia 10 números inteiros e exiba a quantidade de números positivos e a quantidade de números negativos.
})

exercicio10.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let zeros = 0
    for (let contadora = 0; contadora < 5; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] == 0) {
            zeros++
        }
    }
    res.innerHTML = "Dos números digitados " + zeros + "são zeros."
    // 10) Faça um programa que leia 5 números inteiros e verifique se algum deles é igual a zero.
})

exercicio11.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let positivos = 0
    let negativos = 0

    for (let contadora = 0; contadora < 10; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] < 0) {
            negativos += numeros[contadora]
        } else {
            positivos += numeros[contadora]
        }
    }

    res.innerHTML = "Soma dos positivos : " + positivos + " | Soma dos negativos : " + negativos

    // 11) Escreva um programa que leia 10 números inteiros e exiba a soma dos valores positivos e a soma dos valores negativos.
})

exercicio12.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    for (let contadora = 0; contadora < 5; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
    }

    numeros.sort(function (a, b) {
        return b - a
    })
    res.innerHTML = numeros


    // 12) Crie um programa que leia 5 números inteiros e exiba-os em ordem decrescente.
})

exercicio13.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    let entre10e50 = 0
    for (contadora = 0; contadora < 10; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número:"))
        if (numeros[contadora] < 51 && numeros[contadora] > 9) {
            entre10e50++
        }
    }

    res.innerHTML = "Dos números digitados " + entre10e50 + " estão entre 10 e 50."
    // 13) Faça um programa que leia 10 números inteiros e exiba quantos deles estão no intervalo de 10 a 50.

})

exercicio14.addEventListener("click", () => {
    res.innerHTML = ""

    let numeros = []
    for (let contadora = 0; contadora < 7; contadora++) {
        numeros[contadora] = parseInt(prompt("Digite um número: "))
        if (numeros[contadora] % 2 == 0) {
            res.innerHTML += numeros[contadora] + " "
        }
    }
    // 14) Escreva um programa que leia 7 números inteiros e exiba apenas os números pares.
})

exercicio15.addEventListener("click", () => {
    res.innerHTML = ""

    let nomes = []

    for(let contadora = 0; contadora < 5;contadora++){
        nomes[contadora] = prompt("Digite um nome:")
    }

    res.innerHTML = nomes.sort()

    // 15) Crie um programa que leia 5 nomes e exiba-os em ordem alfabética.
})