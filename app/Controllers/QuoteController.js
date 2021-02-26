import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  // values.forEach(v => template += v.Template)
  // document.getElementById("app").innerHTML = /*html*/`
  // <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  // <div className="card-columns values">
  //     ${template}
  // </div>
  // `
}

//Public
export default class QuoteController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    quoteService.addValue()
  }

}