import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Bia", "b@b.com", "2020-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("João", "j@j.com", "2020-01-01");
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);

console.log(novoAdmin.nome)
novoAdmin.nome = "Patrícia";
console.log(novoAdmin.nome);
console.log(novoAdmin.criarCurso("JS", 20));

const novoDocente = new Docente("Maria", "m@m.com", "2020-010-01");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Chico", "JS"));