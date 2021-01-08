export class Video {
    private title: string
    private id: string

    constructor(title: string, id: string){
        this.title = title;
        this.id = id;
    }

    getTitle(): string{
        return(this.title)
    }

    getId(): string{
        return(this.id)
    }
}
