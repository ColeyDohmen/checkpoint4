import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuoteService {

    constructor(){
        console.log(`quote service`);
        this.getQuote()
    }

async getQuote(){
    try {
        const res = await api.get("quotes")
        console.log(res)
        ProxyState.quote = res.data
    } catch(error){
        console.error(error)
    }

}
  addValue() {
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const quoteService = new QuoteService();