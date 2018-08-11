export class OptionalInformationModel {
    private id: number;
    private desc: string;

    constructor(id, des) {
        this.id = id;
        this.desc = des;
    }

    getId() {
        return this.id;
    }

    getDesc() {
        return this.desc;
    }
}
