export class Insight {
    public id: number;
    public text: string;

    constructor(obj: Partial<Insight>) {
        this.id = obj.id;
        this.text = obj.text;
    }
}
