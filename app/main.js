import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  imageController = new ImageController();

  quoteController = new QuoteController();
  
}

window["app"] = new App();
