export default class Weather {
    constructor(data) {
        this.temp = data.main.temp
    }

    get Template() {

        return /*html*/`
        <div class="text-light text-right">
            <h1>${this.temp} K<h1>
        </div>
        `
    }
}
