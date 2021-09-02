import { HashFormatter } from "../interface/hasFormatter";


export class List{
    constructor( private list:HTMLUListElement){}
    render(item : HashFormatter){
        const row = document.createElement('li');
       
        const p = document.createElement('p');
        p.innerHTML = '<span id="namaTask">'+item.task+'</span> <a id="hapus" class="hapus" >Hapus</a>';
        row.append(p);
        this.list.append(row)
       
       
    }
}