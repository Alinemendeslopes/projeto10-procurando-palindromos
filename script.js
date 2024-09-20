let word = prompt(`Digite uma palavra.`)
let Word2 = ``

for (let i = word.length - 1; i >= 0; i--) {
    Word2 += word[i]
}

if (word === Word2) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra ${word} não é um palíndromo.
Pois ${word} ao contrário é: ${Word2}, então não pode ser um palíndromo.`)
}
