import { BeerType, BeerComplexity } from './beer.enum';

export class Beer {
    name: string;
    type: BeerType;
    complexity: BeerComplexity;
    imgLink: string;

    constructor(obj: Partial<Beer>) {
        if (obj) {
            this.name = obj.name ? obj.name : '';
            this.type = obj.type ? obj.type : null;
            this.complexity = obj.complexity ? obj.complexity : null;
            this.name = obj.name ? obj.name : '';
        }
    }
}
