export default class Image {
    constructor(data) {
        this.url = data.large_url || data.url
        this.id = data.id
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.url}
        </div>
        `
    }
}
