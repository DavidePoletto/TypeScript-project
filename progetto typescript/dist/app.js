"use strict";
// Classe Prodotto
class Prodotto {
    constructor(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    assegnaCliente(cliente) {
        if (this.stato === 'disponibile') {
            console.log(`Prodotto ${this.tipo} assegnato a ${cliente.nome} ${cliente.cognome}.`);
            this.stato = 'esaurito';
        }
        else {
            console.log(`Siamo spiacenti ${cliente.nome} ${cliente.cognome} il ${this.tipo} non è più disponibile.`);
        }
    }
}
// Classe Cliente
class Cliente {
    constructor(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }
    ordinaProdotto(prodotto) {
        prodotto.assegnaCliente(this);
    }
}
// Classe ProcessoProduzione
class ProcessoProduzione {
    constructor(nome, descrizione) {
        this.prodottiInProduzione = [];
        this.nome = nome;
        this.descrizione = descrizione;
    }
    aggiungiProdotto(prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Prodotto ${prodotto.id} aggiunto al processo ${this.nome}.`);
    }
}
// Test del codice
const prodotto1 = new Prodotto('costume da bagno', '1', 'M', 'blu', 'disponibile');
const prodotto2 = new Prodotto('pareo', '2', 'L', 'rosso', 'disponibile');
const prodotto3 = new Prodotto('cappello', '3', 'S', 'verde', 'disponibile');
const cliente1 = new Cliente('Davide', 'Poletto', 'davide.poletto@example.com', 'carta di credito');
const cliente2 = new Cliente('Luisa', 'Bianchi', 'luisa.bianchi@example.com', 'PayPal');
const cliente3 = new Cliente('Sara', 'Ravelli', 'sara.ravelli@example.com', 'PayPal');
const processoProduzione = new ProcessoProduzione('Riciclaggio Plastica Marina', 'Processo per creare materiali da plastica riciclata');
processoProduzione.aggiungiProdotto(prodotto1);
processoProduzione.aggiungiProdotto(prodotto2);
processoProduzione.aggiungiProdotto(prodotto3);
cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto2);
cliente3.ordinaProdotto(prodotto2); // fallisce perchè il prodotto è esaurito
