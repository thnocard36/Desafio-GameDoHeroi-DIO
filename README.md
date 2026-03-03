# 🛡️ Classificador e Ataque de Herói (Orientação a Objetos)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Finalizado-brightgreen?style=for-the-badge)
![Logic](https://img.shields.io/badge/Tipo-Lógica_de_Programação-lightgrey?style=for-the-badge)
![DIO](https://img.shields.io/badge/Origem-Digital_Innovation_One-EE2E5D?style=for-the-badge)


Este projeto implementa um classificador de heróis utilizando o conceito de **Classes** (Orientação a Objetos - OO) em JavaScript. O objetivo é criar uma estrutura genérica para um herói de aventura e definir seu comportamento de ataque baseado em seu tipo.

## 🧑‍💻 Créditos
| **Categoria** | **Autor**
| ----------------- |:------------|
| Autor | [Thiago Cardoso](https://github.com/thnocard36/) |
| Professor / Instrutor | [Prof. Felipe Aguiar](https://github.com/felipeAguiarCode) |

----

## 🎯 Objetivo

Criar uma classe chamada `Heroi` que encapsule as propriedades (`nome`, `idade`, `tipo`) e um método (`atacar`) que exibe a ação de ataque específica de cada tipo de herói (Guerreiro, Mago, Monge, Ninja).

----

## ✨ Conceitos Trabalhados

-   **Classes** e **Construtores**.
    
-   **Propriedades** (atributos) da classe.
    
-   **Métodos** (funções) dentro da classe.
    
-   **Estruturas de Decisão** (`if`, `else if`, `else`) para definir o tipo de ataque.

----

## ⚔️ Regras de Ataque

O método `atacar` deve exibir uma mensagem específica com base na propriedade `tipo` do herói:

| **Tipo de Herói (tipo)** | **Mensagem de Ataque (ataque)** | 
| ----------------- |:------------|
|**Mago** | "usou magia"
| **Guerreiro** | "usou espada"
| **Monge** | "usou artes marciais"
| **Ninja** | "usou shuriken"

**Saída Esperada:** `O {tipoDeHeroi} atacou usando {ataque}`.

## 💻 Código JavaScript

```
/**
 * Classe que representa um herói de aventura.
 * Possui um método 'atacar' que determina a ação com base no tipo do herói.
 */

class Heroi {
    // O construtor recebe nome, idade e tipo
    constructor(nome, idade, tipo) { 
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase() // Converte para minúsculas para padronizar a comparação
    }

    // Método 'atacar' para exibir a mensagem de ataque
    atacar() {
        let ataque = "";

        // Determina a descrição do ataque com base no tipo do herói
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            console.log(`Erro: Tipo de herói '${this.tipo}' não reconhecido.`)
            return
        }

        // Saída solicitada: "O {tipoDeHeroi} atacou usando {ataque}"
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// 🚀 Exemplos de Instanciação e Uso:
let mago = new Heroi("Gandalf", 1000, "Mago")
mago.atacar() 

let guerreiro = new Heroi("Aragorn", 35, "Guerreiro")
guerreiro.atacar() 

let monge = new Heroi("Bruce Lee", 50, "Monge")
monge.atacar() 

let ninja = new Heroi("Hattori Hanzo", 28, "Ninja")
ninja.atacar() 

```
----------

## ⚙️ Como Executar

1.  Salve o código acima em um arquivo (ex: `class_heroi.js`).
    
2.  Abra seu terminal na pasta onde o arquivo foi salvo.
    
3.  Execute o arquivo com o **Node.js**:
    
    *Bash*
    
    ```
    node class_heroi.js
    
    ```
    
4.  Você verá as mensagens de ataque de cada herói no console.

---

## ⚖️ Licença

Este projeto está sob a licença MIT. Isso significa que você pode copiar, modificar e distribuir o código, desde que inclua o aviso de copyright original.