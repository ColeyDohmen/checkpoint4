import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


//Private
function _drawTodo() {

  let listElem = document.getElementById("todo")
  let template = ""
  ProxyState.todo.forEach(t => template += t.Template)
  document.getElementById('todo').innerHTML = template
   
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
       let form = event.target 
       let rawTodo = {
           title: form.title.value,
           description: form.description.value,
          //  id: form._id.value,
    
       }
       todoService.createTodo(rawTodo)
       form.reset()
     }
     deleteTodo(_id){
       
       todoService.deleteTodo(_id)
     }

     checkMark(todoId){
      todoService.checkMark(todoId)
  }
    }


//   addValue() {
//     quoteService.addValue()
//   }
