import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


//Private
function _drawQuote() {
   
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
    
    console.log(ProxyState.quote.content);
}
// `<h3 class="text-light">${ProxyState.quote.content}</h3>`
//Public
export default class QuoteController {
  constructor() {
    
        console.log(`quote controller`);
      ProxyState.on("quote" , _drawQuote);
    }
}

//   addValue() {
//     quoteService.addValue()
//   }
