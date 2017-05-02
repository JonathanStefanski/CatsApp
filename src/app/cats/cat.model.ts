interface ICat {
    id: number,
    name: string,
    imageUrl: string,
    owner: string
}

export class Cat implements ICat {
    constructor (public id:number, public name:string, public imageUrl:string, public owner:string) {
        
    }
}