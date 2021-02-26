export default class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content 
        this._id = data._id
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.content}
        </div>
        `
    }
}