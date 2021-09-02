import { Todo } from './classes/todo.js';
import { List } from './classes/listTemplate.js';
import { HashFormatter } from './interface/hasFormatter.js';


const form = document.querySelector('.form') as HTMLElement;
const ul = document.querySelector('ul')!;
const list = new List(ul);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let errTask = document.getElementById('errTask') as HTMLLabelElement;
    let id = Math.floor(Math.random() * 100);
    let inputTask = document.getElementById('task') as HTMLInputElement;
    
    let d = new Date();
    let date = d.getDay()+'-'+d.getMonth()+'-'+d.getFullYear()

    if(inputTask.value == null || inputTask.value == ''){
        errTask.innerText = "Task wajib diisi."
    
    } else {
        errTask.innerText='';
        let todos : HashFormatter;
        todos  = new Todo(id,inputTask.value);
        list.render(todos);
        const span = document.querySelectorAll('#namaTask');
        const hapus = document.querySelectorAll('#hapus');
        for (let i = 0; i < span.length; i++) {
            span[i].setAttribute('onclick','toggle(this)');   
        }
        for (let i = 0; i < hapus.length; i++) {
            hapus[i].setAttribute('onclick','del(this)');    
        }
      
    }
   
})

