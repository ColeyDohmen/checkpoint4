import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


//Private
function _drawImage() {
    document.body.style.backgroundImage = `url('${ProxyState.image.url}')`;
   console.log(ProxyState.image.url);
}

//Public
export default class ImageController {
  constructor() {
      console.log(`image controller`);
    ProxyState.on("image" , _drawImage);
  }

  addValue() {
    imageService.addValue()
  }

}
