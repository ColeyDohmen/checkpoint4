export default class Todo {
    constructor(data) {
        this._id = data._id
        this.completed = data.completed

    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this._id}
        </div>
        `
    }
}