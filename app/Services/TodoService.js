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
  addValue() {
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const todoService = new TodoService();