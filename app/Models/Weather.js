export default class Weather {
    constructor(data) {
        this.temp = data.main.temp
    }

    get Template() {

        return /*html*/`
        <div class="text-light ">
            <h1>${this.temp}<h1>
        </div>
        `
    }
}
