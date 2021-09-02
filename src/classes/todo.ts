import { HashFormatter } from "../interface/hasFormatter";

export class Todo implements HashFormatter {

    constructor(public id:number,public task:string){}
    
    format() {
        return `${this.task}`;
    }
}