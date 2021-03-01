import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "./AxiosService.js";

class TodoService {

    constructor(){
        console.log(`todo service`);
        this.getTodo()
    }

async getTodo(){
    try {
        const res = await api.get('coley/todos')
        console.log(res)
        ProxyState.todo = res.data.map(rawTodoData => new Todo(rawTodoData))
    } catch(error){
        console.error(error)
    }

}

async createTodo(rawTodo){
    try {
    
      const res = await api.post('coley/todos', rawTodo)
      this.getTodo()
    } catch (error) {
      console.error(error)
    }
    
  }


  async deleteTodo(_id){
      try {
          const res = await api.delete(`coley/todos/${_id}`)
          this.getTodo()

      }
      catch(error){
          console.error(error)
      }
  }
  async checkMark(todoId){
    let CheckedTask = ProxyState.todo.find(t => t._id == todoId)

    // if (CheckedTask.completed == true){
    //     CheckedTask.completed = false
    // }
    // else if (CheckedTask.completed == false){
    //     CheckedTask.completed = true
    // }
    CheckedTask.completed = !CheckedTask.completed

    try {
        const res = await api.put('coley/todos/' + todoId, CheckedTask)
        console.log(res.data)
    
    ProxyState.todo = ProxyState.todo
    } catch (error) {
      console.error(error)
    }
    console.log(`${todoId}`);
}
}

export const todoService = new TodoService();