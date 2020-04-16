export class Student {
    public name: string
    public imagePath: string
    public P1: number
    public P2: number
    public P3: number
    public media: number

    constructor(name: string, image: string, p1: number = undefined, p2: number = undefined, p3: number = undefined){
        this.name = name
        this.imagePath = image
        this.P1 = p1
        this.P2 = p2
        this.P3 = p3
    }
}