class jogoHeroi { // Criando uma classe
    constructor(nameHero, styleHero, heroAttack) { // Construtor da Classe 'Heroi', onde informamos a própriedade de cada atributo
        this.nameHero = nameHero
        this.styleHero = styleHero
        this.heroAttack = heroAttack
    }

    escrever() {
        if(this.styleHero === "Guerreiro" && this.heroAttack === "Espada") { // Se o estilo do heroi e a Arma pré selecionada forem as mesmas...
            console.log(`O Heroi '${this.nameHero}', é um ${this.styleHero}.`)
            console.log(`O Heroi ${this.styleHero}, atacou usando uma ${this.heroAttack}`)
            console.log()
        } else if(this.styleHero === "Mago" && this.heroAttack === "Magia") {
            console.log(`O Heroi '${this.nameHero}', é um ${this.styleHero}.`)
            console.log(`O Heroi ${this.styleHero}, atacou usando uma ${this.heroAttack}`)
            console.log()
        } else if(this.styleHero === "Monge" && this.heroAttack === "Artes Marciais") {
            console.log(`O Heroi '${this.nameHero}', é um ${this.styleHero}.`)
            console.log(`O Heroi ${this.styleHero}, atacou usando uma ${this.heroAttack}`)
            console.log()
        } else if(this.styleHero === "Ninja" && this.heroAttack === "Shuriken") {
            console.log(`O Heroi ${this.nameHero}', é um ${this.styleHero}.`)
            console.log(`O ${this.styleHero}, atacou usando uma ${this.heroAttack}`)
            console.log()
        }
                
        else { // Se mão for um desses... Ele automáticamente sairá da condição...
            console.log(`O estilo selecionado: '${this.styleHero}' para o Heroi ${this.nameHero}, não existe!`)
            console.log(`Impossivel utilizar essa arma para esse heroi.`)
            console.log()
        }
    }
}

let personagem1 = new jogoHeroi("Ben 10", "Mago", "Magia")
personagem1.escrever()

let personagem2 = new jogoHeroi("Gwen", "Guerreiro", "Espada")
personagem2.escrever()