import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

    constructor(){
        console.log(`weather service`);
        this.getWeather()
    }

async getWeather(){
    try {
        const res = await api.get("weather")
        console.log(res)
        ProxyState.weather = new Weather(res.data)
    } catch(error){
        console.error(error)
    }

}
  addValue() {
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const weatherService = new WeatherService();