import { MongoClient } from "mongodb";

const cliente = new MongoClient(
	"mongodb+srv://plsr12:PzbaQkyiAsWkIhaw@cluster0.9g8so.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;

try {
	await cliente.connect();

	const db = cliente.db("alura-websockets");
	documentosColecao = db.collection("documents");

	console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
	console.log(erro);
}

export { documentosColecao };
