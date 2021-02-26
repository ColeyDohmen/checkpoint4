import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js";

class QuoteService {

    constructor(){
        console.log(`quote service`);
        
    }

async getImage(){
    // try {
    //     const res = await api.get("images")
    //     console.log(res)
    //     ProxyState.image = res.data
    // } catch(error){
    //     console.error(error)
    // }

}
  addValue() {
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const quoteService = new QuoteService();