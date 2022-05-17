import ANSIColours from './ANSIColours.js';
let AC = new ANSIColours();

import Vertebre from "./Vertebre.js";

export default class Mamifere extends Vertebre{

    constructor(nom, genre, peau){
        super(nom, genre, peau)
    }

    description(){
        console.log(AC.BG_MAGENTA + 'Je suis un mamifere' + AC.RESET);
        //appel de la methode description de la classe mere
        super.description();
    }

}