import { BeerType, BeerComplexity, Cor } from './beer.enum';

export class Beer {

    id: number;
    cor: Cor;
    teorAlcoolico: number;
    estilo: BeerType;
    nome: string;
    ibu: number;
    diasMaturacao: number;
    conplexidade: BeerComplexity;

    constructor(obj: Partial<Beer>) {
        if (obj) {
            this.id = obj.id ? obj.id : null;
            this.nome = obj.nome ? obj.nome : null;
            this.estilo = obj.estilo ? obj.estilo : null;
            this.conplexidade = obj.conplexidade ? obj.conplexidade : null;
            this.cor = obj.cor ? obj.cor : null;
            this.estilo = obj.estilo ? obj.estilo : null;
            this.teorAlcoolico = obj.teorAlcoolico ? obj.teorAlcoolico : null;
            this.diasMaturacao = obj.diasMaturacao ? obj.diasMaturacao : null;
            this.ibu = obj.ibu ? obj.ibu : null;
        }
    }
}
