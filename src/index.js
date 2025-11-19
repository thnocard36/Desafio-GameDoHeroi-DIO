class jogoHeroi { // Criando uma classe
    constructor(nameHero, styleHero) {
        this.nameHero = nameHero
        this.styleHero = styleHero
    }

    escrever() {
        console.log(`O Heroi ${this.nameHero}, se tornou um ${this.styleHero}`)
    }

}

let personagem1 = new jogoHeroi("Sonic", "Guerreiro")

personagem1.escrever()