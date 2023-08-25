export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Formato inválido')
        }
        this.#nome = novoNome;
    }

    get email() {
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    get nascimento() {
        return this.#nascimento;
    }

    set nascimento(novaData) {
        this.#nome = novaData;
    }

    get role() {
        return this.#role;
    }

    set role(novaRole) {
        this.#role = novaRole;
    }

    get ativo() {
        return this.#ativo;
    }

    set ativo(novoStatus) {
        this.#ativo = novoStatus;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}