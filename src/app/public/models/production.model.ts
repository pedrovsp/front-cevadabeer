import { Beer } from './beer.model';

export class Production {
    cerveja: Beer;
    quantidadeEmLitros: number;
    dtInicio: Date;
    dtFim: Date;
    id: number;

    constructor(obj: Partial<Production>) {
        if (obj) {
            this.cerveja = obj.cerveja ? obj.cerveja : null;
            this.quantidadeEmLitros = obj.quantidadeEmLitros ? obj.quantidadeEmLitros : null;
            this.dtInicio = obj.dtInicio ? new Date(obj.dtInicio) : null;
            this.dtFim = obj.dtFim ? new Date(obj.dtFim) : null;
            this.id = obj.id ? obj.id : null;
        }
    }

    getRemainingDays(): number {
        return Math.round((this.dtFim.getTime() - new Date().getTime())/(1000*60*60*24));
    }
    
    getDuracao(): number {
        return Math.round((this.dtFim.getTime() - this.dtInicio.getTime())/(1000*60*60*24));
    }
    
}
