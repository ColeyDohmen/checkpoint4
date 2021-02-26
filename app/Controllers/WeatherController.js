import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _drawWeather() {
   
    document.getElementById("weather").innerHTML = ProxyState.weather.Template
    
    console.log(ProxyState.weather);
}
// `<h3 class="text-light">${ProxyState.quote.content}</h3>`
//Public
export default class WeatherController {
  constructor() {
    
        console.log(`weather controller`);
      ProxyState.on("weather" , _drawWeather);
    }
}

//   addValue() {
//     quoteService.addValue()
//   }
