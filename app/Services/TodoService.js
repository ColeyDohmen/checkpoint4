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
        const res = await api.get("coley/todos")
        console.log(res)
        ProxyState.todo = res.data
    } catch(error){
        console.error(error)
    }

}
  addValue() {
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const todoService = new TodoService();