import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


//Private
function _drawTodo() {
   
    // document.getElementById("todo").innerHTML = ProxyState.todo.Template
    
    console.log(ProxyState.todo);
}
// `<h3 class="text-light">${ProxyState.quote.content}</h3>`
//Public
export default class TodoController {
  constructor() {
    
        console.log(`todo controller`);
      ProxyState.on("todo" , _drawTodo);
    }

    addTodo(event){
       event.preventDefault()
    }
}

//   addValue() {
//     quoteService.addValue()
//   }
