import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Image from "./Models/Image.js"
import Quote from "./Models/Quote.js"
import Weather from "./Models/Weather.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
 /** @type {Image} */
 image = null

  /** @type {Quote} */
  quote = null

    /** @type {Weather} */
    weather = null

      /** @type {Todo[]} */
  todo = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
