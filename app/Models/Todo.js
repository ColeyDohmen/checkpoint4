export default class Todo {
    constructor(data) {
        this.title = data.title
        this.description = data.description
        this._id = data._id
        this.completed = data.completed

    }

    get Template() {

        return /*html*/`
        <div class="col-4 border rounded shadow-lg text-dark">
            <h2><button class="text close text-dark"
            onclick="app.todoController.deleteTodo('${this._id}')"><span>&times;</span></button> </h2>
            <h5>To-do</h5>
            
            <p>${this.description}</p>
                    
                    
                    </div>
                </div>
            </form>
        </div>
        `
    }
}