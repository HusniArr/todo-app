export class List {
    constructor(list) {
        this.list = list;
    }
    render(item) {
        const row = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = '<span id="namaTask">' + item.task + '</span> <a id="hapus" class="hapus" >Hapus</a>';
        row.append(p);
        this.list.append(row);
    }
}
