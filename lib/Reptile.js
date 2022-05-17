import ANSIColours from './ANSIColours.js';
let AC = new ANSIColours();

import Vertebre from './Vertebre.js';

export default class Reptile extends Vertebre{

    constructor(nom, genre){

        super(nom, genre);
        this.peau = "ecaile";

    }

    description(){
        console.log();
        console.log(AC.BG_BLUE + 'Je suis une Reptile' + AC.RESET);
        console.log('Je m\'appel ' + AC.BG_BGREEN + this.nom + AC.RESET);
        console.log();
    }

}