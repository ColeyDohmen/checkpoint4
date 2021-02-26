import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


//Private
function _drawTodo() {
   
    // document.getElementById("quote").innerHTML = ProxyState.quote.Template
    
    // console.log(ProxyState.quote.content);
}
// `<h3 class="text-light">${ProxyState.quote.content}</h3>`
//Public
export default class TodoController {
  constructor() {
    
        console.log(`todo controller`);
      ProxyState.on("todo" , _drawTodo);
    }
}

//   addValue() {
//     quoteService.addValue()
//   }
