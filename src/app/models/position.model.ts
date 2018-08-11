export class PositionModel {
    lat: number;
    lon: number;
    opts: string;

    constructor(la: number, lo: number, opt?: string) {
        this.lat = la;
        this.lon = lo;
        this.opts = opt;
    }
}