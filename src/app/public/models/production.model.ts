import { Beer } from './beer.model';
import { BottleType } from './production.enum';

export class Production {
    beer: Beer;
    quantity: number;
    bottleType: BottleType;
    startDate: Date;
    duration: number;

    constructor(obj: Partial<Production>) {
        if (obj) {
            this.beer = obj.beer ? obj.beer : null;
            this.quantity = obj.quantity ? obj.quantity : null;
            this.bottleType = obj.bottleType ? obj.bottleType : null;
            this.startDate = obj.startDate ? obj.startDate : null;
            this.duration = obj.duration ? obj.duration : null;
        }
    }
}
