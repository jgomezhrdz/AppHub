export class ArchivoMusica {
    private title: string
    private id: string

    constructor(title: string, id: string){
        this.title = title;
        this.id = id;
    }

    getTitle(){
        return this.title
    }
    getId(){
        return this.id
    }
}
