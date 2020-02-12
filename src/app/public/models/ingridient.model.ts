export class Igredient {
    id: number;
    nome: string;
    quantidade: number;

    constructor(obj: Partial<Igredient>) {
        if (obj) {
            this.id = obj.id ? obj.id : null;
            this.nome = obj.nome ? obj.nome : null;
            this.quantidade = obj.quantidade ? obj.quantidade : null;
        }
    }
}