import Animaux from './Animaux.js';

export default class Vertebre extends Animaux{

    /**
     * 
     * @param {string} nom nom du vertebre
     * @param {string} genre genre du vertebre
     * @param {string} typePeau type de peau (exemple : "poil", "plume");
     */
    constructor(nom, genre, typePeau){
        super(nom, genre, true);

        this.typePeau = typePeau;
    }
}